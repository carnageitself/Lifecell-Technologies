import React from 'react'
import product1 from "../assets/pro1.png"
import product2 from "../assets/pro2.png"
import product3 from "../assets/pro3.png"
import product4 from "../assets/pro4.png"
import product5 from "../assets/pro5.png"

const ProductProduction = () => {

  const client = [
    {
      id: 1,
      imageSrc: product1,
      imageAlt: "Front of men's Basic Tee in black.",
      desc: "Raw material import."
    },
    {
      id: 2,
      imageSrc: product2,
      imageAlt: "Front of men's Basic Tee in black.",
      desc: "Producton as per FDA norms."
    },
    {
      id: 3,
      imageSrc: product3,
      imageAlt: "Front of men's Basic Tee in black.",
      desc: "Quality Control."
    },
    {
      id: 4,
      imageSrc: product4,
      imageAlt: "Front of men's Basic Tee in black.",
      desc: "Testing evaluation as per FDA."
    },
    {
      id: 5,
      imageSrc: product5,
      imageAlt: "Front of men's Basic Tee in black.",
      desc: "Packing and Delivery."
    },
  ];

  return (
    <div className='pt-28'>
        <h2 className="text-3xl text-center tracking-tight uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
         Product Production
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 p-10">
          {client.map((client) => (
            
            <div key={client.id} className="group relative">
              <h1  className='text-base text-center mb-5 text-blue-300'>{client.desc}</h1>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white/5 p-5 lg:aspect-none group-hover:opacity-75 lg:h-40 shadow-card">
                
                <img
                  src={client.imageSrc}
                  alt={client.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ProductProduction