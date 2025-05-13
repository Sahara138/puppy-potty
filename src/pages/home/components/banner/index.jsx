import GlobalContainer from '@/components/globalcontainer'
import { Button } from '@/components/ui/button'
import React from 'react'
import BannerImage from '@/assets/images/bannerImage.png'
import { BannerShape01 } from '@/assets/svg/BannerShape'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <GlobalContainer>
       <motion.section
       initial={{opacity:0,y:50}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.3}}
       viewport={{once:true}}
        className='grid grid-cols-[60%_50%] gap-x-3 justify-between items-center mt-[20px]'>
        <div className="left">
            <h1 className='font-manjari text-[70px] font-bold leading-[96px] text-black-01 mb-[28px]'>Potty train your pup<br/> the easy way</h1>
            <p className='font-poppins text-[24px] font-normal leading-[40px] text-black-02 mb-[31px]'>Log your dog’s pees, poops and meals and<br/> Puppy Potty Log will use the data to create a<br/> custom housetraining schedule unique to<br /> your fur baby.</p>
            <Button className="bg-primary font-poppins text-base font-semibold px-[66px] py-[15px] rounded-full hover:bg-transparent hover:text-primary hover:border hover:border-primary">Join Us</Button>
            
        </div>
        <div className="right relative">
            <div className='absolute top-[80px] -right-12'>
                <BannerShape01 width={200} height={200}/>
            </div>
            <img src={BannerImage} alt="" />
            <div className='absolute bottom-0 -left-6'>
                <BannerShape01 width={200} height={200}/>
            </div>
        </div>
       </motion.section>
    </GlobalContainer>
  )
}

export default Banner
