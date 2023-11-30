import React from 'react'
import certificate1 from "../assets/certificate.jpeg"
import certificate2 from "../assets/certificate2.png"

const Certificates = () => {

  const client = [
    {
      id: 1,
      imageSrc: certificate1,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      imageSrc: certificate2,
      imageAlt: "Front of men's Basic Tee in black.",
    },
  ];


  return (
   <div className="certificates bg-transparent flex flex-col items-center">
    <h1 className='text-center text-3xl leading-8 uppercase bg-gradient-to-r  from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black'>Certifications</h1>
    <div className="mt-10 h-full grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 p-10">
          {client.map((client) => (
            <div key={client.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white/5 p-5 lg:aspect-none group-hover:opacity-75 lg:h-96 border">
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

export default Certificates