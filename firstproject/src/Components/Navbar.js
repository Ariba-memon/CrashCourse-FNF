// import React from 'react'
// import Logo from '../Assets/Logo.png'
// import { Link } from "react-router-dom";
// import HamburgerImage from '../Assets/hamburgericon.webp'
// import CrossImage from '../Assets/cross.png'
// const Navbar = () => {
//   return (
//     <>
//     {/* {**************First Code of Navbar*************} */}
//     {/* <div className='font-Merri bg-[#000000] text-[#EEF7FF] p-1 sm:text-sm md:text-base  text-center justify-center items-center flex'>
//       <h2>Welcome To Our Blog Website 🧨
// </h2>
//  </div> */}
//   {/* {**************Second Navbar Code*************} */}
//     <nav className='w-full fixed  top-0 left-0 right-0 z-10 bg-[#212121] text-[#EEEEEE] p-2'>
//        {/* {**************Logo Code*************} */} 
// <div className='mx-auto flex justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8 '>
// <div className='flex items-center justify-between py-3 md:py-5 md:block '>
//       <Link to='/'>
//      <img src={Logo} width={48}  height={45} alt='logo'/>
//      </Link>
//  {/* {**************Mobile Responsive Code*************} */} 
  

//     </div>
//      {/* {**************Nav Links Code*************} */} 
//    <div>
//    <ul className='flex space-x-10'>
//     <li>
//       <Link to='/'>
//         <div>
//         Home
//         </div>
//       </Link>
//     </li>
//     <li>
//       <Link to='/About'>
//         <div>
//         About
//         </div>
//       </Link>
//     </li>
//     <li>
//       <Link to='/Contact'>
//         <div>
//      Contact
//         </div>
//       </Link>
//     </li>
//     <li>
//       <Link to='/Contact'>
//         <div>
//     PostYourBlogs
//         </div>
//       </Link>
//     </li>
//    </ul>

//    </div>
// </div>

//     </nav>
//     </>
//   )
// }

// export default Navbar





import React from 'react'
import Logo from '../Assets/Logo.png'
import {Link} from 'react-router-dom'
import { BiAlignRight } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#212121] text-[#EEEEEE] md:px-[20px] px-[20px] py-2 w-full absolute'>
      <div>
      {/* <img src={Logo} width={20}  height={20} alt='logo'/> */}
      </div>
      <div>
        <ul className='hidden md:flex space-x-[60px] text-lg font-semibold'>
          <li className='hover:text-blue-500 pt-[80px]'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:text-blue-500 pt-[80px]'>
            <Link to='/about'>About</Link>
          </li>
          <li className='hover:text-blue-500 pt-[80px]'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='hover:text-blue-500 pt-[80px]'>
            <Link to='/postblogs'>PostYourBlog</Link>
          </li>
          <div>
            <button className='m-16 bg-blue-600 px-6 py-2 text-white rounded-xl text-xl font-semibold hover:bg-blue-900 hover:animate-bounce'>SignIn</button>
          </div>
          </ul>
      </div>
      <div className='static md:hidden text-3xl lg:hidden'><BiAlignRight /></div>
    </div>
  )
}

export default Navbar