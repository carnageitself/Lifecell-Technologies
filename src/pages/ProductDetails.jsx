import React from 'react'
import arrows from "../assets/arrows.png"
import arrows2 from "../assets/arrows2.png"
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  EffectCards,
  Pagination,
  Navigation,
} from "swiper/modules";
import product from "../assets/product.png"
import { DataGrid } from '@mui/x-data-grid';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { rows } from '../data,jsx';
import { columns } from '../data,jsx';
import { title } from '../data,jsx';
import { description } from '../data,jsx';

const ProductDetails = () => {
  return (
    <div className='h-full w-full flex flex-col bg-slate-50'>
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
        <div className="details w-full h-96 my-20 flex justify-center">
          <div className="left flex-1 flex items-center justify-center">
          <div className="z-20 w-[30vw] h-[50vh] flex rounded-xl">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              modules={[Autoplay, EffectFade, EffectCards]}
              autoplay={{ delay: 2000 }}
              fadeEffect={true}
              cardsEffect={true}
            >
              <SwiperSlide>
                  <img  src={product} alt="" className="sliderimg object-cover w-full rounded-xl h-full"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img  src={product} alt="" className="sliderimg object-cover w-full rounded-xl h-full"/>
              </SwiperSlide> <SwiperSlide>
                  <img  src={product} alt="" className="sliderimg object-cover w-full rounded-xl h-full"/>
              </SwiperSlide> <SwiperSlide>
                  <img  src={product} alt="" className="sliderimg object-cover w-full rounded-xl h-full"/>
              </SwiperSlide> <SwiperSlide>
                  <img  src={product} alt="" className="sliderimg object-cover w-full rounded-xl h-full"/>
              </SwiperSlide> <SwiperSlide>
                  <img  src={product} alt="" className="sliderimg object-cover w-full rounded-xl h-full"/>
              </SwiperSlide>
            </Swiper>
          </div>
          </div>
          <div className="right flex-1">
            <h1 className='text-3xl font-semibold mr-10 p-2 mt-10 font-sans'>{title}</h1>
            <p className='text-xl font-medium my-10 mr-10 p-2'>{description}</p>
          </div>
        </div>
        <div className="bottom w-full mb-20 p-10">
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
      />
    </div>
        </div>
    </div>
  )
}

export default ProductDetails