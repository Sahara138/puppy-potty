import React from 'react'
import GlobalContainer from '../globalcontainer'
import Logo from '../../assets/svg/logo.svg'
import { LinkList } from '../Header/LinkList'
import { Link } from 'react-router'
import Google_PlayStore from "@/assets/svg/google-playstore.svg";
import AppStore from "@/assets/svg/available-on-the-app-store.svg";
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <GlobalContainer>
      <footer className='mt-[168px]'>
         <div className='grid grid-cols-[auto_auto_auto] justify-between'>
            <div className='pr-[97px]'>
                <div >
                  <img src={Logo} alt="" />
                </div>
                <p className='font-poppins text-[18px] font-normal leading-[32px] text-black-04 mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
            </div>
            <div className='mr-[246px]'>
              <h4 className='font-poppins text-[25px] font-medium leading-[24px] text-black-04'>Quick Links</h4>
              <div className='mt-[60px]'>
                <ul>
                  {
                    LinkList.slice(0, 5).map((link) => {
                      return (
                        <li key={link.id} className='font-poppins text-[16px] font-normal leading-[24px] mb-[18px] hover:text-primary cursor-pointer transition-all'>
                          <Link to={link.path}>{link.name}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div>
              <h4 className='font-poppins text-[25px] font-medium leading-[24px] text-black-04 mb-[56px]'>Download Our App</h4>
              <p className='max-w-[270px] font-poppins text-[18px] font-normal leading-[28px] text-black-04 mb-[44px]'>Available on Google Play and App Store.</p>
              <div className="flex mt-[42px] items-center ">
                <Button
                  className="bg-[#ffffff] py-[16px] px-[24px]  hover:bg-[#ffffff] drop-shadow-[#00000024] rounded-full mr-[15px] shadow-2xl"
                >
                  <img
                    className='w-[78px] h-[15px]'
                    src={Google_PlayStore}
                    alt="google-play-store"
                  />
                </Button>
                <Button
                  className="bg-[#ffffff] py-[16px] px-[24px] hover:bg-[#ffffff] drop-shadow-[#00000024] rounded-full shadow-2xl"
                >
                  <img
                    className='w-[68px] h-[23px]'
                    src={AppStore}
                    alt="app-store"
                  />
                </Button>
              </div>
            </div>
         </div>
         <div className='border-t border-[#E5E5E5] mt-[26px] '>
              <div className='flex justify-between items-center py-[27px]'>
                <div>
                  <p className='font-poppins text-[14px] font-normal text-black-04'>Copyright © 2023 potty.app</p>
                </div>
                <div>
                  <ul className='flex gap-x-[30px] '>
                    <li className='font-poppins text-[14px] font-normal text-black-04'>Terms of Service</li>
                    <li className='font-poppins text-[14px] font-normal text-black-04'>Privacy Policy</li>
                  </ul>
                </div>
              </div>
         </div>
      </footer>
    </GlobalContainer>
  )
}

export default Footer
