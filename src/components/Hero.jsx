import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  EffectCards,
  Pagination,
  Navigation,
} from "swiper/modules";
import company from "../assets/company.jpeg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className="container w-full sm:h-screen hero flex xl:flex-row flex-col-reverse overflow-hidden relative">
        <div className="absolute bg-black opacity-60 inset-0"></div>
        <div className="flex-1 relative">
          <div className="absolute w-[70%] bg-blue-600 h-[100vh] right-0"></div>
          <div className="slider absolute z-20 top-64 w-[500px] h-72 rounded-xl left-28">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              modules={[Autoplay, EffectFade, EffectCards, Pagination]}
              autoplay={{ delay: 2000 }}
              fadeEffect={true}
              cardsEffect={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                  <img  src={company} alt="" className="sliderimg object-cover w-[500px] rounded-xl h-[285px]"/>
              </SwiperSlide>
              <SwiperSlide>
                  <img  src={company} alt="" className="sliderimg object-cover w-[500px] rounded-xl h-[285px]"/>
              </SwiperSlide> <SwiperSlide>
                  <img  src={company} alt="" className="sliderimg object-cover w-[500px] rounded-xl h-[285px]"/>
              </SwiperSlide> <SwiperSlide>
                  <img  src={company} alt="" className="sliderimg object-cover w-[500px] rounded-xl h-[285px]"/>
              </SwiperSlide> <SwiperSlide>
                  <img  src={company} alt="" className="sliderimg object-cover w-[500px] rounded-xl h-[285px]"/>
              </SwiperSlide> <SwiperSlide>
                  <img  src={company} alt="" className="sliderimg object-cover w-[500px] rounded-xl h-[285px]"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex-[1.25] relative">
          <div className="absolute mx-auto max-w-md md:max-w-[100%] lg:max-w-[100%] text-center lg:mx-0 lg:flex-auto lg:py-40 lg:text-left mt-28 md:mt-5 lg:mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-6xl px-10">
              Empowering Communities 
              <br />
             with Accessible Healthcare!
            </h2>
            <p className="mt-6 text-lg leading-8 flex flex-col items-start text-left px-10 text-gray-100 sm:text-lg gap-3">
              <li>
                Located in major production center of Maharashtra(Aurangabad).
              </li>
              <li>Well connected through Highways,Airport,Railway station.</li>
              <li>Surrounded by the Big Pharma Companies.</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
