import React from 'react'
import logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-black w-full h-full  text-center lg:text-left '>
   <div className='p-2'>
    <div className='grid md:grid-cols-2 lg:grid-cols-4'>
      <div className='mb-6'>
<h5 >
  <img src={logo}  width={200} height={200}/>
</h5>
      </div>
      <div className='mb-6 m-8'>
        <h5 className='mb-2.5 font-bold uppercase text-white'>
          Company
        </h5>
        <ul className='mb-0 list-none'>
          <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/'>Home</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/contact'>Contact</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/about'>AboutUs</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/postblogs'>PostBlog</Link>
            </li>
        </ul>
      </div>
      <div className='mb-6 m-8'>
  <h5 className='mb-2.5 font-bold uppercase text-white'>
    Support
  </h5>
  <ul className='mb-0 list-none'>
          <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/'>Home</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/contact'>Contact</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/about'>AboutUs</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/postblogs'>PostBlog</Link>
            </li>
        </ul>
      </div>
      <div className='mb-6 m-8'>
  <h5 className='mb-2.5 font-bold uppercase text-white'>
    Support
  </h5>
  <ul className='mb-0 list-none'>
          <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/'>Home</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/contact'>Contact</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/about'>AboutUs</Link>
            </li>
            <li>
            <Link className='text-white hover:text-[#EEF7FF]' to='/postblogs'>PostBlog</Link>
            </li>
        </ul>
      </div>
   </div>
    </div>
    <div className='bg-gray-700 p-4 text-center text-white'>
      Copyright @ blogwebsite 
      Powered By: Ariba Memon
    </div>
    </div>
  )
}

export default Footer
