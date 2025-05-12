import React from 'react'
import { productData } from './productData'
import ProductCard from './ProductCard'
import GlobalContainer from '@/components/globalcontainer'

const Products = () => {
  return (
   <GlobalContainer>
       <section className='mt-[118px]'>
           <div className='text-center'>
               <h4 className='font-manjari text-[24px] font-normal text-black-03'>Supplies</h4>
               <h5 className='mt-[10px] font-poppins text-[30px] font-semibold leading-[44px] capitalize text-black-01 max-w-[379px] mx-auto'>Pick Our Products</h5>
           </div>
           <div className='grid grid-cols-3 gap-x-[30px] mt-[73px]'>
           {
            productData.map((product) => {
              return (
                <ProductCard product={product} />
              )
            })
           }
           </div>
       </section>
      </GlobalContainer>
  )
}

export default Products
