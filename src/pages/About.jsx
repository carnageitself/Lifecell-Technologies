import React from 'react'
import Goals from '../components/Goals'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import ProductProduction from '../components/ProductProduction'
import Accreditation from '../components/Accreditations'
import Certificates from '../components/Certificates'
import AboutHero from '../components/AboutHero'

const About = () => {
  return (
    <div className='w-full h-full bg-gradient'>
      <AboutHero/>
      <Accreditation/>
      <ProductProduction/>
      <Goals/>
      <Partners/>
      <Certificates/>
      <Testimonials/>
    </div>
  )
}

export default About