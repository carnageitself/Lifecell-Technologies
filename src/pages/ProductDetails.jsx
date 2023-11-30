import React from 'react'
import arrows from "../assets/arrows.png"
import arrows2 from "../assets/arrows2.png"

const ProductDetails = () => {
  return (
    <div className='h-screen w-full'>
        <div className="flex items-center flex-col justify-center text-center py-20 bg-gradient-to-b from-gray-900 to-indigo-900 relative">
         <img src={arrows} alt="" className="absolute top-0 right-2 object-contain"/>
         <img src={arrows2} alt="" className="absolute bottom-0 left-2 object-contain"/>
          <h2 className="text-3xl tracking-tight sm:text-4xl uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
            Product Details
          </h2>
          <p className="mt-2 text-lg leading-8 text-blue-300">
          "Elevating Health, Empowering Lives: Our Commitment to a Better Tomorrow."
          </p>
        </div>
    </div>
  )
}

export default ProductDetails