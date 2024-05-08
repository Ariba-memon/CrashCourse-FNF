import React from 'react'

const ContactSection = () => {
  return (
    <div className='flex'>
               <h1 className='m-10 font-bold text-3xl font-Roboto sm:text-sm md:text-lg lg:text-3xl text-[#212121]'>Contact Us</h1>
       <div className='rounded-xl bg-black m-40 border-2 border-blue-500'>
       <form className='m-20 p-10 '>
            <label className='font-Montserrat text-[#EEF7FF]
 '>Full Name</label>
            <input className='m-2 border-2 border-black rounded-md' placeholder=' Your FullName'></input>
            <br />
            <label className='font-Montserrat text-[#EEF7FF]'>Email Adress</label>
            <input className='m-2 border-2 border-black rounded-md
border-solid' placeholder=' Your Email'></input>
            <br />
            <label className='font-Montserrat text-[#EEF7FF]'>Contact Number</label>
            <input required className='m-2 border-2 rounded-md border-rose-600 ' placeholder=' Your Contact '></input>
            <br />
            <button className='bg-[#EEF7FF] text-[#000000] rounded-full m-2 p-2 mt-4 py-3 px-9 '>Submit</button>
        </form>
       </div>
    </div>
  )
}

export default ContactSection