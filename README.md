# 🏸 TLookShop - MERN Stack E-commerce Platform

**TLookShop** là hệ thống thương mại điện tử trọn gói chuyên cung cấp các sản phẩm thể thao cầu lông (vợt Yonex, Lining,...). Dự án được xây dựng theo kiến trúc Full-stack (MERN stack), áp dụng quy trình CI/CD tích hợp tự động qua GitHub và triển khai trực tiếp lên môi trường Điện toán đám mây (Cloud).

## 🚀 Live Demos (Sản phẩm thực tế)
- **Giao diện Khách hàng (Frontend):** [https://tlookshop-github-workflow-1.onrender.com](https://tlookshop-github-workflow-1.onrender.com)
- **Trang Quản trị (Admin):** [https://tlookshop-admin.onrender.com](https://tlookshop-admin.onrender.com) *(Cập nhật link đúng của Admin nghen)*
- **API Backend:** [https://tlookshop-github-workflow.onrender.com](https://tlookshop-github-workflow.onrender.com)

## 📌 Công nghệ sử dụng (Tech Stack)
* **Frontend Client & Admin:** ReactJS (Vite), Tailwind CSS, React Router, Axios.
* **Backend API:** Node.js, Express.js, JWT Authentication.
* **Database:** MongoDB Atlas (Cloud NoSQL).
* **Lưu trữ ảnh trực tuyến:** Cloudinary.
* **Deployment & CI/CD:** Render (Web Service & Static Sites), Docker, GitHub.
* **Quản lý dự án (Agile/Scrum):** Jira Software.

## 🎯 Tính năng nổi bật
### 1. Phía Khách hàng (Frontend)
- Xem danh sách và tìm kiếm sản phẩm bằng ảnh thực tế chuyên nghiệp.
- Lọc theo danh mục (Yonex, Lining, Dụng cụ,...).
- Chi tiết sản phẩm: Mô tả dạng Rich Text sinh động, chọn Size đa dạng.
- Thêm vào Giỏ hàng, Quản lý số lượng và Đặt hàng (Checkout).

### 2. Trang Quản trị viên (Admin Panel)
- Đăng nhập bảo mật (Admin Auth).
- **Quản lý Sản phẩm:** Giao diện Thêm, sửa, xóa sản phẩm trực quan. Đăng nhiều ảnh cùng lúc, tích hợp Rich Text Editor (React-Quill) căn chỉnh phong cách Word.
- **Quản lý Đơn hàng:** Xem trạng thái đơn hàng (Đang xử lý, Gợi ý, Giao hàng, Hoàn tất).

### 3. Backend (API & Database)
- Hệ thống RESTful API kết nối siêu mượt (Status Code thông minh).
- Mã hóa mật khẩu bảo mật (Bcrypt) & Cấp Token đăng nhập (JWT).
- Kết nối CSDL linh hoạt lấy IP Cloud qua cấu hình cổng động.

## ⚙️ Hướng dẫn cài đặt mạng Local (Môi trường phát triển)

### Cách 1: Tiện lợi qua Docker Compose (Dành cho Dev 1-chạm)
1. Đảm bảo đã chạy ứng dụng Docker Desktop trên máy bạn.
2. Tại thư mục gốc `TLookShop`, mở Terminal gõ:
   ```bash
   docker-compose up --build
   ```
3. Truy cập ngay:
   - Frontend: `http://localhost:3000`
   - Admin: `http://localhost:3001`
   - Backend API: `http://localhost:5000`

### Cách 2: Vận hành độc lập truyền thống (Node.js)
1. Mở 3 cửa sổ Terminal tương ứng cho 3 folder (`frontend`, `admin`, `backend`).
2. Gõ lệnh cài đặt thư viện (Chỉ làm 1 lần):
   ```bash
   npm install
   ```
3. Tạo/Cấu hình file `.env` chứa URL tương ứng cho môi trường Local.
4. Chạy dự án:
   - Dưới nhánh `frontend` và `admin`: gõ `npm run dev`
   - Dưới nhánh `backend`: gõ `npm start` (hoặc `npm run server`)

## 🛠 Chuẩn mực Làm việc Nhóm (Git + Jira CI/CD)
Dự án được bảo vệ nghiêm ngặt tự động hóa, yêu cầu:
- Bắt buộc tạo **Nhánh con (Branch) mới** cho mỗi tính năng và gắn mã thẻ Jira vào đầu tên (VD: `feature/admin/JS-11-demo`).
- Chỉ được dùng **Pull Request** trên Github để kiểm duyệt và gộp code vào nhánh gốc `develop`.
- Khi `develop` được cập nhật, hệ thống Github Actions tích hợp sẽ "kéo" máy chủ Render ra để tự Build và phát hành tính năng mới nhất trực triếp lên Cloud (Auto-Deploy).

---
*Thiết kế & Vận hành bởi Sinh viên - Khóa Đồ án Chuyên ngành 2026.*
