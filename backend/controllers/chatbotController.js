import Groq from "groq-sdk";
import productModel from "../models/productModel.js";
import 'dotenv/config';

// Khởi tạo Groq
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Hàm tìm kiếm sản phẩm (Giữ nguyên của bạn)
const searchProductsForUI = async (query) => {
    try {
        const searchRegex = new RegExp(query, 'i'); 
        const products = await productModel.find({
            $or: [ { name: searchRegex }, { category: searchRegex } ]
        }).select('name price image category').limit(5);
        return products;
    } catch (error) {
        return [];
    }
};

// Hàm lấy context (Giữ nguyên)
const getProductContext = async () => {
    try {
        const products = await productModel.find({});
        if (products.length === 0) return "Cửa hàng hiện chưa có sản phẩm nào.";
        
        let context = "DANH SÁCH SẢN PHẨM CỬA HÀNG TLOOK:\n";
        products.forEach(p => {
            context += `- ${p.name} (Giá: ${p.price.toLocaleString('vi-VN')}đ) - Loại: ${p.category}\n`;
        });
        return context;
    } catch (error) {
        return "";
    }
}

const chatWithBot = async (req, res) => {
    try {
        const { message } = req.body;
        console.log("📩 Tin nhắn khách:", message);

        // 1. Lấy dữ liệu sản phẩm
        const relatedProducts = await searchProductsForUI(message);
        const productContext = await getProductContext();

        // 2. Cấu hình Prompt
        const systemPrompt = `
        Bạn là AI tư vấn viên chuyên nghiệp của shop cầu lông TLook.
        Nhiệm vụ: Trả lời ngắn gọn, thân thiện, dùng icon sinh động.
        QUAN TRỌNG: Chỉ tư vấn dựa trên danh sách sản phẩm dưới đây. Nếu không có sản phẩm khách hỏi, hãy gợi ý sản phẩm tương tự.
        
        ${productContext}
        `;

        // 3. Gọi Groq API (Model Llama-3-8b siêu nhanh)
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: message },
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.5,
            max_tokens: 500,
        });

        const text = chatCompletion.choices[0]?.message?.content || "Xin lỗi, tôi đang bị mất kết nối.";

        console.log("✅ Groq trả lời:", text);

        res.json({ 
            success: true, 
            response: {
                text: text,
                products: relatedProducts
            }
        });

    } catch (error) {
        console.error("❌ LỖI GROQ:", error.message);
        res.json({ 
            success: false, 
            response: {
                text: "Hệ thống đang bảo trì, vui lòng thử lại sau.",
                products: []
            }
        });
    }
};

export { chatWithBot };