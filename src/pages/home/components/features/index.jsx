import GlobalContainer from '@/components/globalcontainer'
import React from 'react'
import FeatureLayout from './FeatureLayout'

const Features = () => {
  return (
     <GlobalContainer>
        <section className='mt-[100px]'>
            <div className='text-center'>
                <h4 className='font-manjari text-[24px] font-normal text-black-03'>Features</h4>
                <h5 className='mt-[10px] font-poppins text-[30px] font-semibold leading-[44px] capitalize text-black-01 max-w-[379px] mx-auto'>Our Best Features</h5>
            </div>
            <FeatureLayout />
        </section>
       </GlobalContainer>
  )
}

export default Features
