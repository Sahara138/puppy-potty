import React from 'react';
import AboutImage from '@/assets/images/aboutImage.png'
import { Button } from '@/components/ui/button';

const AboutLayout = () => {
  return (
   <>
    <div className='grid grid-cols-[40%_50%] justify-between mt-[66px]'>
        <div>
            <img src={AboutImage} alt="aboutImage" />
        </div>
        <div>
            <h4 className='font-poppins text-[45px] font-semibold leading-[64px] capitalize text-black-04 max-w-[570px]'>We are the world’s most trusted animal trainer</h4>
            <p className='font-poppins text-[18px] font-normal leading-[34px] text-black-04 max-w-[570px] mt-[24px]'>Lorem ipsum dolor sit amet consectetur. Neque et aliquam tincidunt auctor pellentesque vestibulum est. Mattis fermentu pulvinar gravida dictumst sagittis. Sit cursus nulla mattis. Gravida enim in fusce maecenas vel cras turpis.</p>
            <Button className="bg-primary font-poppins text-[18px] leading-[34px] font-normal px-[59px] py-[12px] rounded-full hover:bg-transparent hover:text-primary hover:border hover:border-primary drop-shadow-[#F9CE3B40] mt-[50px]">About Us</Button>
        </div>

    </div>
   </>
  )
}

export default AboutLayout
