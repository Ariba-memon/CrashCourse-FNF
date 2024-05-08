import React from 'react'
import Logo from '../Assets/Logo.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    {/* {**************First Code of Navbar*************} */}
    <div className='font-Merri bg-[#000000] text-[#EEF7FF] p-1 sm:text-sm md:text-base  text-center justify-center items-center flex'>
      <h2>Welcome To Our Blog Website 🧨
</h2>
 </div>
  {/* {**************Second Navbar Code*************} */}
    <nav className='bg-[#212121] text-[#EEEEEE] p-2'>
       {/* {**************Logo Code*************} */} 
<div className='mx-auto flex justify-between '>
<div className='max-w-7xl  '>
      <Link to='/'>
     <img src={Logo} width={45}  height={45} alt='logo'/>
     </Link>
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
