import React from 'react'

const HomeSection = () => {
  return (
    <div>
             <h1 className='m-20 font-bold text-3xl font-Roboto sm:text-sm md:text-lg lg:text-3xl text-[#212121] text-center'>Easy Your Life</h1>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 max-w-6xl mx-auto">
       
  <img  className="w-full max-w-md m-auto"src="https://res.cloudinary.com/thirus/image/upload/v1635003545/images/mobile-ux_yc0c3w.png" alt=""/>
  <div>
    <h3 className='font-bold text-xl mt-4 text-blue-800'>List Building</h3>
    <p className='mt-1'>It's very easy to start creating email lists for your marketing actions, give it a try</p>
    <h3 className='font-bold text-xl mt-4 text-blue-800'>Campaign Tracker</h3>
    <p className='mt-1'>Campaigns is a feature we've created since the beginning and it's at the core of Lomar</p>
    <h3 className='font-bold text-xl mt-4 text-blue-800'>Analytics Tool</h3>
    <p>Lomar collects all the necessary data to help you analyse different situations</p>
  </div>
  <div>
    <h3 className='font-bold text-xl mt-4 text-blue-800'>Admin Control</h3>
    <p className='mt-1'>Rights of users and admins can easily be managed through the control panel</p>
    <h3 className='font-bold text-xl mt-4 text-blue-800'>Integration Setup</h3>
    <p className='mt-1'>We're providing a step-by-step integration session to implement automation</p>
    <h3 className='font-bold text-xl mt-4 text-blue-800'>Help Line Support</h3>
    <p className='mt-1'>Quality support is our top priority so please contact us for any problem you encounter</p>
  </div>
</section>
    </div>
  )
}

export default HomeSection
