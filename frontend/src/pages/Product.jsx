import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts';
// Import Component hiển thị mới tạo
import DescriptionDisplay from '../components/DescriptionDisplay'; 

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    if (products && products.length > 0) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
      return <div className='opacity-0'></div>
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 bg-white'>

      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((item, index) => (
                <img onClick={() => { setImage(item) }} src={item} key={index} className='w-[85%] sm:mb-3 flex-shrink-0 cursor-pointer border p-2' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[65%] '>
            <img className='w-full h-auto ' src={image} alt="" />
          </div>
        </div>

        {/* Product Info  */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium text-[#e8002d]'>{productData.price.toLocaleString('vi-VN')}{currency}</p>
          
          {/* [VỊ TRÍ 1]: Sử dụng Component chuẩn Senior */}
          <div className='mt-5 md:w-4/5'>
            <DescriptionDisplay content={productData.description} />
          </div>

          <div className='flex flex-col gap-4 my-8'>
            <p>Chọn size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''} `} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>THÊM VÀO GIỎ HÀNG</button>
          
          <hr className='mt-8 sm:w-4/5' />
          
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Sản phẩm vợt cầu lông chính hãng 100%.</p>
            <p>Hỗ trợ giao hàng toàn quốc, thanh toán khi nhận hàng.</p>
            <p>Bảo hành chính hãng, đổi trả dễ dàng trong 7 ngày nếu có lỗi từ nhà sản xuất.</p>
            <p>Tư vấn chọn vợt phù hợp miễn phí cho mọi khách hàng.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews Section */}
      <div className='mt-20 '>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Mô tả chi tiết</b>
          <p className='border px-5 py-3 text-sm'>Đánh giá (222)</p>
        </div>
        
        {/* [VỊ TRÍ 2]: Tái sử dụng Component */}
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
             <DescriptionDisplay content={productData.description} />
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  )
}

export default Product