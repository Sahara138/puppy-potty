import React from 'react';
import QuoteImage from '@/assets/svg/quoteImage.svg';
import { clientData } from './clientData';
import { FaStar } from 'react-icons/fa';

const TestimonialLayout = () => {
    // counting and generating the reviews
    const getReviews = (reviewsNumber) => {
        let reviews=[];

        for(let i = 0; i < reviewsNumber; i++){
            reviews.push(<FaStar color="#F9CE3B" />)
        }
        return reviews
    }
  return (
    <>
    <div className='grid grid-cols-2 gap-x-[63px] mt-[80px]'>
        {
            clientData.map((client,index) => (
                <div key={index} className='bg-[#ffffff] p-[50px] rounded-[5px]'>
                    <div className='w-[75px] h-[75px] rounded-full bg-[#ffffff] flex justify-center items-center -mt-[85px] -ml-[15px]'>
                        <img src={QuoteImage} alt="Quote Image" />
                    </div>
                    <div className='mt-[13px]'>
                        <p className='font-poppins text-[16px] font-normal leading-[25px] text-black-04'>{client.reviewDescription}</p>
                        <div className='flex justify-between items-center mt-[51px]'>
                            <div className='flex items-center gap-x-4'>
                                <div className='w-[61px] h-[61px] rounded-full overflow-hidden'>
                                    <img src={client.userImage} className="w-full h-full object-cover" alt="Client Image" />
                                </div>
                                <div>
                                    <h5 className='font-poppins text-[14px] font-medium leading-[25px] text-black-04 mb-[3px]'>{client.userName}</h5>
                                    <span className='flex items-center gap-x-[5px]'>{getReviews(client.reviews)}</span>
                                </div>
                            </div>
                            <p className='font-poppins text-[16px] font-normal leading-[25px] text-[#9E9E9E]'>{client.reviewTime}</p>

                        </div>
                    </div>

                </div>
            ))
        }
    </div>
    </>
  )
}

export default TestimonialLayout
