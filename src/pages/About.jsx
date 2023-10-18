import React from 'react'
import Goals from '../components/Goals'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Accreditation from '../components/Accreditations'
import Certificates from '../components/Certificates'
import AboutHero from '../components/AboutHero'

const About = () => {
  return (
    <div className='w-full h-full bg-gradient'>
      <AboutHero/>
      <Accreditation/>
      <Certificates/>
      <Goals/>
      <Partners/>
      <Testimonials/>
    </div>
  )
}

export default About