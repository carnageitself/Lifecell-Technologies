import React from 'react'
import Goals from '../components/Goals'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import ProductProduction from '../components/ProductProduction'
import Accreditation from '../components/Accreditations'

const About = () => {
  return (
    <div className='w-full h-full bg-white'>
      <ProductProduction/>
      <Testimonials/>
      <Accreditation/>
      <Goals/>
      <Partners/>
    </div>
  )
}

export default About