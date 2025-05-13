import GlobalContainer from '@/components/globalcontainer'
import React from 'react'
import TestimonialLayout from './TestimonialLayout'

const ClientsReview = () => {
  return (
    <GlobalContainer>
        <section className='mt-[100px]'>
            <div className='text-center'>
                <h4 className='font-manjari text-[24px] font-normal text-black-03'>Testimonial</h4>
                <h5 className='mt-[10px] font-poppins text-[30px] font-semibold leading-[44px] capitalize text-black-01 max-w-[379px] mx-auto'>What Our Clients Say</h5>
            </div>
            <TestimonialLayout  />
        </section>
    </GlobalContainer>
  )
}

export default ClientsReview
