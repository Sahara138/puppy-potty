import React from 'react'

const ServiceCard = ({icon, title, description}) => {
  const Icon = icon;
  return (
    <div className='bg-white rounded-[10px] border border-[#1E1E1E14] py-[54px] px-[17px] text-center group hover:bg-primary hover:border-primary transition-all duration-300 ease-linear'>
        <div className=' w-[95px] h-[95px] mx-auto bg-primary rounded-full text-white mb-[34px] flex items-center justify-center group-hover:bg-[#ffffff] group-hover:text-primary  transition-all duration-300 ease-linear'><Icon/></div>
        <h4 className='font-poppins text-[30px] font-medium  text-black-03 mb-[11px] group-hover:text-[#ffffff]  transition-all duration-300 ease-linear'>{title}</h4>
        <p className='font-poppins text-[16px] font-normal leading-[35px] text-black group-hover:text-[#ffffff]  transition-all duration-300 ease-linear'>{description}</p>
    </div>
  )
}

export default ServiceCard
