import React from 'react'
import Logo from '../../assets/svg/logo.svg'
import { LinkList } from './LinkList'
import { Link } from 'react-router'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className='flex items-center container mx-auto my-4'>
      <div className='w-[20%]'>
        <img src={Logo} alt="" />
      </div>
      <div className='w-[60%]'>
        <ul className='flex justify-center gap-x-[30px]'>
          {
            LinkList.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='w-[20%] space-x-2'>
        <Button className="bg-[#F9CE3B]">Sign Up</Button>
        <Button className="bg-transparent text-[#F9CE3B] border border-[#F9CE3B]">Log In</Button>
      </div>
      
    </div>
  )
}

export default Header
