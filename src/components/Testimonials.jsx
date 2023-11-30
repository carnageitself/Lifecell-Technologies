import React from 'react'
import Slider from './Slider'

const Testimonials = () => {
  return (
    <div className="testimonials bg-slate-50 py-20">
      <h1 className='text-center text-3xl leading-8 uppercase bg-gradient-to-r  from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black'>Testimonials</h1>
   
   <div className="mx-32 py-10">
    <Slider/>
   </div>
    </div>
  )
}

export default Testimonials