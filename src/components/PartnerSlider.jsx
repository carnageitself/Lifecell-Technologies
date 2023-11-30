import { Swiper, SwiperSlide } from "swiper/react";
import biocon from "../assets/biocon.png";
import cipla from "../assets/cipla.png";
import fdc from "../assets/fdc.png";
import ipca from "../assets/ipca.png";
import kabi from "../assets/kabi.png";
import lupin from "../assets/lupin.png";
import microlabs from "../assets/microlabs.png";
import { Autoplay, EffectFade, EffectCards, Keyboard } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"

const PartnerSLider = () => {

  return (
    <Swiper spaceBetween={50} slidesPerView={5} loop={true} modules={[Autoplay, EffectFade, EffectCards, Keyboard]} autoplay={{delay: 2000}} fadeEffect={true} cardsEffect={true} keyboard={true}>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img src={lupin} alt="" className="h-full w-full object-contain object-center lg:h-full lg:w-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img src={biocon} alt="" className="h-full w-full object-contain object-center lg:h-full lg:w-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img src={cipla} alt="" className="h-full w-full object-contain object-center lg:h-full lg:w-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img src={fdc} alt="" className="h-full w-full object-contain object-center lg:h-full lg:w-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img src={ipca} alt="" className="h-full w-full object-contain object-center lg:h-full lg:w-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img src={kabi} alt="" className="h-full w-full object-contain object-center lg:h-full lg:w-full"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white lg:aspect-none group-hover:opacity-75 lg:h-40">
          <img src={microlabs} alt="" className="h-full w-full object-contain object-center lg:h-full lg:w-full"/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PartnerSLider;
