import { Button } from '@/components/ui/button';
import React from 'react'

const ProductCard = ({product}) => {
    const {image,advantages,brand,buttonText} = product;
    console.log(advantages?.map((advantage) => advantage.icon),advantages.map((advantage) => advantage.title));
    console.log(advantages.title);
  return (
    <>
    <div className='bg-[#ffffff] rounded-[10px] overflow-hidden'>
        <div className='h-[317px]'>
            <img className='w-full h-full object-cover' src={image} alt="product_image" />
        </div>
        <div className='pt-4 pb-5 px-[21px]'>
          <ul>
            {
              advantages?.map((advantage,index) => (
                <li key={index} className='flex items-center gap-x-4 mb-[15px]'>
                  <img src={advantage.icon} alt="" />
                  <span>{advantage.title}</span>
                </li>
              ))
            }
          </ul>
          <div className='flex items-center justify-between mt-[15px]'>
            <h4 className='font-poppins text-[15px] font-medium text-black-04'>{brand}</h4>
            <Button className="bg-primary font-poppins text-[14px] font-medium px-[21px] py-[9px] hover:bg-transparent hover:text-primary hover:border hover:border-primary">{buttonText}</Button>
          </div>

        </div>
    </div>

    </>
  )
}

export default ProductCard
