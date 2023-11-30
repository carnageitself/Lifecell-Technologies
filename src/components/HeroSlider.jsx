import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, EffectCards, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay, EffectFade, EffectCards, Pagination]}
      autoplay={{ delay: 4000 }}
      fadeEffect={true}
      cardsEffect={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-fit flex flex-col items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-20 w-20 object-contain rounded-full"
          />
          <h1 className="p-2 w-full max-h-52">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 flex flex-col items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-20 w-20 object-contain rounded-full"
          />
          <h1 className="p-2 w-full">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 flex flex-col items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-20 w-20 object-contain rounded-full"
          />
          <h1 className="p-2 w-full max-h-52">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 flex flex-col items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-20 w-20 object-contain rounded-full"
          />
          <h1 className="p-2 w-full max-h-52">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 border rounded-lg aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 flex flex-col items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-20 w-20 object-contain rounded-full"
          />
          <h1 className="p-2 w-full max-h-52">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.”
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
