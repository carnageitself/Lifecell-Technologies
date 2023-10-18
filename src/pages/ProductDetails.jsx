import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import logo from "../assets/product.png";
import logo2 from "../assets/product2.png";
import logo3 from "../assets/product3.png";

const ProductDetails = () => {
  return (
    <div className="w-full h-full bg-gray-300 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl leading-8 uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
          Product Details
        </h2>
        <div className="bg-gray-200 content-center p-10 lg:mx-24 shadow-card rounded-xl mt-10">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={true}
            showStatus={false}
            stopOnHover={true}
            useKeyboardArrows={true}
          >
            <div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white/5 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={logo}
                  alt="logo"
                  className="h-full w-full object-contain p-2 object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
            <div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white/5 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={logo2}
                  alt="logo"
                  className="h-full w-full object-contain p-2 object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
            <div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white/5 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={logo3}
                  alt="logo"
                  className="h-full w-full object-contain p-2 object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          </Carousel>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-center mt-2tracking-tight sm:text-xl text-xl leading-8 uppercase bg-transparent text-black mb-2">
              Sizes Available
            </p>
            <p className="text-center mt-2tracking-tight sm:text-xl text-sm leading-8 bg-transparent text-black flex flex-col jusity-center items-start">
              <div className="flex text-left gap-6">
                <div className="span">LF1075B{""}{""}{""}</div>
                <div className="span">
                  10X75mm Pyrogen Free Sodalime Assay Tubes
                </div>
              </div>
              <div className="flex text-left gap-5">
                <div className="span">LF1075S{""}{""}{""}</div>
                <div className="span">
                  10X75mm Pyrogen Free Borosilicate Assay Tubes
                </div>
              </div>
              <div className="flex text-left gap-5">
                <div className="span">LF1275B{""}{""}{""}</div>
                <div className="span">
                  12X75mm Pyrogen Free Borosilicate Dilution Tube
                </div>
              </div>
              <div className="flex text-left gap-5">
                <div className="span">LF13100B</div>
                <div className="span">
                  13X100mm Pyrogen Free Borosilicate Dilution Tube
                </div>
              </div>
              <div className="flex text-left gap-5">
                <div className="span">LF16100B</div>
                <div className="span">
                  16X100mm Pyrogen Free Borosilicate Dilution Tube
                </div>
              </div>
              <div className="flex text-left gap-5">
                <div className="span">LF16125B</div>
                <div className="span">
                  16X125mm Pyrogen Free Borosilicate Dilution Tube
                </div>
              </div>
              <div className="flex text-left gap-5">
                <div className="span">LF18150B</div>
                <div className="span">
                  18X150mm Pyrogen Free Borosilicate Dilution Tube
                </div>
              </div>
              <div className="flex text-left gap-5">
                <div className="span">LF28200B</div>
                <div className="span">
                  28X200mm Pyrogen Free Borosilicate Dilution Tube
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
