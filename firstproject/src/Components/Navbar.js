import React from 'react'
import Logo from '../Assets/Logo.png'
import { Link } from "react-router-dom";
import HamburgerImage from '../Assets/hamburgericon.webp'
import CrossImage from '../Assets/cross.png'
const Navbar = () => {
  return (
    <>
    {/* {**************First Code of Navbar*************} */}
    {/* <div className='font-Merri bg-[#000000] text-[#EEF7FF] p-1 sm:text-sm md:text-base  text-center justify-center items-center flex'>
      <h2>Welcome To Our Blog Website 🧨
</h2>
 </div> */}
  {/* {**************Second Navbar Code*************} */}
    <nav className='w-full fixed  top-0 left-0 right-0 z-10 bg-[#212121] text-[#EEEEEE] p-2'>
       {/* {**************Logo Code*************} */} 
<div className='mx-auto flex justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8 '>
<div className='flex items-center justify-between py-3 md:py-5 md:block '>
      <Link to='/'>
     <img src={Logo} width={48}  height={45} alt='logo'/>
     </Link>
 {/* {**************Mobile Responsive Code*************} */} 
  

    </div>
     {/* {**************Nav Links Code*************} */} 
   <div>
   <ul className='flex space-x-10'>
    <li>
      <Link to='/'>
        <div>
        Home
        </div>
      </Link>
    </li>
    <li>
      <Link to='/About'>
        <div>
        About
        </div>
      </Link>
    </li>
    <li>
      <Link to='/Contact'>
        <div>
     Contact
        </div>
      </Link>
    </li>
    <li>
      <Link to='/Contact'>
        <div>
    PostYourBlogs
        </div>
      </Link>
    </li>
   </ul>

   </div>
</div>

    </nav>
    </>
  )
}

export default Navbar
