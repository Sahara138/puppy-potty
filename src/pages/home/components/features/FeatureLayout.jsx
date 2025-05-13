import React from 'react'
import { FeatureData } from './featureData'
import FeatureMobileScreen from '@/assets/svg/featureScreen.svg'

const FeatureLayout = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-x-[63px] items-center mt-[79px]'>
        <div>
            {
                FeatureData.slice(0,2).map((feature,index) => (
                    <div key={index} className='flex justify-between items-center gap-x-5 mb-[71px]'>
                        <img src={feature.image} alt="Feature Item" />
                        <div className='flex flex-col '>
                            <h5 className='font-poppins text-[18px] font-semibold text-black-04'>{feature.title}</h5>
                            <p className='max-w-[285px] font-poppins text-[14px] font-normal leading-[23px] text-black'>{feature.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='mx-auto'>
            <img src={FeatureMobileScreen} alt="Feature Screen" />
        </div>
        <div>
            {
                FeatureData.slice(2,4).map((feature,index) => (
                    <div key={index} className='flex flex-row-reverse justify-between items-center gap-x-5 mb-[71px]'>
                        <img src={feature.image} alt="Feature Item" />
                        <div className='flex flex-col '>
                            <h5 className='font-poppins text-[18px] font-semibold text-black-04 text-end'>{feature.title}</h5>
                            <p className='max-w-[285px] font-poppins text-[14px] font-normal leading-[23px] text-black text-end'>{feature.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default FeatureLayout
