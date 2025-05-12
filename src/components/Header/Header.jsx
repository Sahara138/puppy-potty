import React from 'react'
import Logo from '../../assets/svg/logo.svg'
import { LinkList } from './LinkList'
import { Link } from 'react-router'
import { Button } from '../ui/button'
import GlobalContainer from '../globalcontainer'

const Header = () => {
  return (
    <GlobalContainer>
      <div className='flex items-center  mt-[11px]'>
        <div className='w-[20%]'>
          <img src={Logo} alt="" />
        </div>
        <div className='w-[60%]'>
          <ul className='flex justify-center gap-x-[30px]'>
            {
              LinkList.map((link) => {
                return (
                  <li key={link.id} className='font-poppins text-base font-medium hover:text-primary cursor-pointer transition-all'>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='w-[20%] space-x-[12px] text-end'>
          <Button className="bg-primary font-poppins text-base font-medium px-[21px] py-[9px] hover:bg-transparent hover:text-primary hover:border hover:border-primary">Sign Up</Button>
          <Button className="bg-transparent  font-poppins text-base font-medium px-[21px] py-[9px] text-primary border border-primary hover:bg-primary hover:text-[#ffffff]">Log In</Button>
        </div>
        
      </div>
    </GlobalContainer>
  )
}

export default Header
