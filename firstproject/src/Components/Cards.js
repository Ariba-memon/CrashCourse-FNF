import React from 'react'
import { Link } from 'react-router-dom'
const Cards = () => {
  return (
    <div>
             <h1 className='m-20 font-bold text-3xl font-Roboto sm:text-sm md:text-lg lg:text-3xl text-[#212121] text-center'>Read Our Blogs</h1>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 m-10'>

   <div className='bg-white rounded-lg '>
   <img className='w-full h-48 object-cover rounded-t-lg' src="https://picsum.photos/400/300" alt="" />
   <div className='p-6'>
      <h2 className='font-bold text-2xl'>Blog title 1</h2>
      <p className='mt-4 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo assumenda porro inventore repellendus ipsum.</p>
      <Link className='text-lg font-bold text-purple-600' to="#">ReadMore</Link>
    </div>
   </div>
   <div className=''>
   <img className='w-full h-48 object-cover rounded-t-lg' src="https://picsum.photos/400/300?1" alt="" />
   <div className='p-6'>
      <h2 className='font-bold text-2xl'>Blog title 1</h2>
      <p className='mt-4 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo assumenda porro inventore repellendus ipsum.</p>
      <Link className='text-lg font-bold text-purple-600' to="#">ReadMore</Link>
    </div>
   </div>
   <div className=''>
   <img className='w-full h-48 object-cover rounded-t-lg' src="https://picsum.photos/400/300" alt="" />
   <div className='p-6'>
      <h2 className='font-bold text-2xl'>Blog title 1</h2>
      <p className='mt-4 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo assumenda porro inventore repellendus ipsum.</p>
      <Link className='text-lg font-bold text-purple-600' to="#">ReadMore</Link>
    </div>
   </div>
    </div>
    </div>
  )
}

export default Cards