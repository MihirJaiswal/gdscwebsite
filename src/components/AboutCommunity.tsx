import React from 'react'
import Image from 'next/image'
import logo from '../../public/google-developers-seeklogo.svg'
import cdgi from "../../public/cdgi.jpg"

const AboutCommunity = () => {
  return (
        <div className='mt-20'>
    
        <div className="flex flex-col mx-12 my-4 md:flex-row">
        <div className="md:order-1 md:mr-4 flex flex-col items-center">
       
        <Image
         src={cdgi}
         alt='College Image'
         width={500}
         height={500}
         className='w-full md:w-auto shadow-lg rounded mt-6' />
        </div>


            <div className="md:order-2 md:ml-4">
                <h1 className="text-3xl font-semibold mb-4 pt-6 pl-6 pr-6">About <span className='inline-block'><Image src={logo} width={50}  className='h-6' alt='LOGO'/></span> GDSC CDGI</h1>
                <p className="mb-4 text-gray-700 font-medium pt-2 pl-6 pr-6">The GDSC CDGI (Google Developer Student Clubs) is a vibrant and inclusive community for students passionate about technology and development. Sponsored by Google, GDSC provides a platform for students to collaborate, learn, explore and create together.</p>
                <p className="mb-4 text-gray-700 font-medium pt-2 pl-6 pr-6">Through a combination of <span className='text-blue-600'>workshops</span>, <span className='text-green-600'>hackathons</span>, <span className='text-red-600'>speaker sessions</span>, and <span className='text-yellow-500'>hands-on projects</span>, GDSC members have the opportunity to enhance their technical skills, explore innovative ideas, and connect with like-minded peers.</p>
                
                <div className="flex flex-col md:flex-row ml-6 justify-between items-center">
                <button className="bg-yellow-500 rounded-lg shadow-xl text-white font-medium py-2 px-6 mb-2 md:mb-0 max-w-max flex-shrink-0">Know More!</button>
                
                </div>
            </div>
        </div>
        </div>
  )
}

export default AboutCommunity