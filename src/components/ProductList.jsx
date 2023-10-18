import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import logo from "../assets/product.png";

const products = [
  {
    id: 1,
    name: "Pyrogen free test tube for bet",
    link: "/products/productdetails",
    imageSrc: logo,
    imageAlt: "Test tubes",
  },

  // More products...
];

export default function ProductList() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-2xl px-4 py-28 sm:px-6 sm:py-28 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center tracking-tight uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
          Our Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={product.link}>
                <div className="productcard aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80 shadow-card">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-contain p-2 object-center lg:h-full lg:w-full"
                  />
                </div>
              </Link>
              <div className="mt-4 flex">
                <div>
                  <h3 className="text-blue-300 text-xl">
                    <h1 className="absolute inset-o" />
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
