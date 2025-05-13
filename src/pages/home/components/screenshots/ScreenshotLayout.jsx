import React from 'react'
import { screenshotData } from './screenshotData'

const ScreenshotLayout = () => {
  return (
    <div className='grid grid-cols-3 gap-x-[25px] items-center mt-[95px]'>
        {
            screenshotData.map((screenshot,index) => (
                <div key={index} className='flex justify-between items-center gap-x-5 mb-[71px]'>
                    <img src={screenshot.image} alt="Screenshot Item" />
                </div>
            ))
        }
      
    </div>
  )
}

export default ScreenshotLayout
