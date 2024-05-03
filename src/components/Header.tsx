import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import MobNav from './MobNav'
import logo from '../../public/next.svg'




const Header = () => {
  return (
    <div className='fixed w-full top-0 z-50 bg-white backdrop-blur-sm border-b border-n-6  lg:backdrop-blur-sm'>
        <div className='flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a href="/" className='flex items-center w-[12rem] xl:mr-8'>
            <Image
            alt='logo'
            src={logo}
            width={52}
            height={42}
            className='max-sm:size-10 m-2'
            />
            
        </a>
        <div>
        <Navbar/>
        </div>
        
      <div className='flex-between gap-5'>

         <MobNav/>
      </div>
    </div>  
    </div>
  )
}

export default Header