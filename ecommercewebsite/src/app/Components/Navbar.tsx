'use client'

import Link from 'next/link'
import React from 'react'
import { useAuth } from "@clerk/nextjs";
import { SignInButton, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  const { isSignedIn } = useAuth()
  return (
    <div>
     <div className="navbar bg-[#000000] text-yellow-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'}>Home</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link href='/' className="btn btn-ghost text-xl">DevStore</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/about-us'}>About</Link></li>
      <li>
        <details>
          <summary>Laptop Accessories</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><Link href={'/contact-us'}>Contact Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  {/* <input type="checkbox" value="synthwave" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/> */}
    {/* <a className="btn">SignIn</a> */}
    {!isSignedIn && (
                  <SignInButton mode="modal">
                    <button>
                      Signin

                    </button>

                  </SignInButton>
                )}

                <UserButton afterSignOutUrl="/" />
  </div>
</div>
    </div>
  )
}

export default Navbar
