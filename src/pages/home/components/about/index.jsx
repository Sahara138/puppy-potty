import GlobalContainer from '@/components/globalcontainer'
import React from 'react'
import AboutLayout from './AboutLayout'

const AboutSection = () => {
  return (
   <GlobalContainer>
    <section className='mt-[100px]'>
        <div className='text-center'>
            <h4 className='font-manjari text-[24px] font-normal text-black-03'>About Us</h4>
            <h5 className='mt-[10px] font-poppins text-[30px] font-semibold leading-[44px] capitalize text-black-01 max-w-[379px] mx-auto'>Best service for training your lovely dog</h5>
        </div>
        <AboutLayout />
    </section>
   </GlobalContainer>

  )
}

export default AboutSection
