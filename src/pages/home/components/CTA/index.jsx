import CTA from '@/assets/images/CTA.png'
import GlobalContainer from '@/components/globalcontainer'
import { Button } from '@/components/ui/button'
import React from 'react'

const CallToAction = () => {
  return (
    <GlobalContainer>
        <section className='mt-[100px]'>
            <div className='grid grid-cols-[auto_auto]'>
                <div className='w-[650px]'>
                    <h4 className='font-poppins text-[55px] font-medium leading-[80px]  text-black-04'>Download Our Tracking Sheet</h4>
                    <h5 className='mt-[40px] font-poppins text-[30px] font-medium leading-[40px] text-black-04'>Train Your Pup :</h5>
                    <p className='mt-[25px] font-poppins text-[24px] font-normal leading-[40px] text-[#27233AE5]'>Log your dog’s pees, poops and meals and Puppy Potty Log will use the data to create a custom housetraining schedule unique to your fur baby.</p>
                    <Button className="bg-primary font-poppins text-[20px] font-normal leading-[40px] px-[24px] py-7 hover:bg-transparent hover:text-primary hover:border hover:border-primary mt-[50px]">Download Now</Button>
                </div>
                <div className='flex justify-end'>
                    <img src={CTA} alt="CTA Image" />
                </div>
            </div>
        </section>
    </GlobalContainer>
  )
}

export default CallToAction
