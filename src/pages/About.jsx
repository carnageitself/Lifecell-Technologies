import React from 'react'
import Goals from '../components/Goals'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Accreditation from '../components/Accreditations'
import Certificates from '../components/Certificates'
import AboutHero from '../components/AboutHero'
import arrows from "../assets/arrows.png"
import arrows2 from "../assets/arrows2.png"

const About = () => {
  return (
    <div className='w-full h-full bg-white'>
         <div className="flex items-center flex-col justify-center text-center py-20 bg-gradient-to-b from-gray-900 to-indigo-900 relative">
         <img src={arrows} alt="" className="absolute top-0 right-2 object-contain"/>
         <img src={arrows2} alt="" className="absolute bottom-0 left-2 object-contain"/>
          <h2 className="text-3xl tracking-tight sm:text-4xl uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
            About Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-blue-300">
          "Elevating Health, Empowering Lives: Our Commitment to a Better Tomorrow."
          </p>
        </div>
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