import React from 'react'

const ProductCard = ({product}) => {
    const {image,advantages,brand,buttonText} = product;
  return (
    <>
    <div className='bg-[#ffffff] rounded-[10px] overflow-hidden'>
        <div className='h-[317px]'>
            <img className='w-full h-full object-cover' src={image} alt="product_image" />
        </div>
    </div>
    </>
  )
}

export default ProductCard
