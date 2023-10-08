import React from 'react'
import Goals from '../components/Goals'
import Partners from '../components/Partners'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import AboutHero from '../components/AboutHero'

const About = () => {
  return (
    <div className='w-full h-full bg-[#202020]'>
      <Team/>
      <Goals/>
      <Partners/>
    </div>
  )
}

export default About