import React from 'react'
import HeroImage from '../Assets/heroimage.png'
const Hero = () => {
  return (
    <div className='flex '>
     <h1 className='text-center m-24 text-3xl'>Welcome to Blog Website</h1>
     {/* <p>When blogs first appeared on the world wide web, their goal was mainly personal use, such as sharing stories, interests, and thoughts. We will take a look at the most common uses for a blog</p> */}
<div>
<img className='m-10' src={HeroImage} />
</div>
    </div>
  )
}

export default Hero
