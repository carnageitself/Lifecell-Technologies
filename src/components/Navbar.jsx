import React, { useState } from "react";
import Img from "../assets/companylogo.png";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import ProductDropdown from "./ProductDropDown";

const Navbar = () => {
  // const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full md:w-full sm:w-full bg-[#ffffff] text-blue-400 sticky top-0 border-b border-b-white/5 z-50 shadow-sm h-20">
        <div className="justify-between px-4 mx-auto md:w-full lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <img src={Img} alt="logo" className="w-36 h-12" />
              </a>
              <div className="md:hidden">
                <div
                  className="p-2 text-blue-500 rounded-md outline-none :border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  <Hamburger />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-base uppercase font-medium text-center">
                <li className="px-3 py-2 text-[#021943] hover:text-[#08a4ff] hometag cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="">
                  <ProductDropdown/>
                </li>
                <li className="px-3 py-2 text-[#021943] hover:text-[#08a4ff] abouttag cursor-pointer">
                <Link to="/aboutus">About</Link>
                </li>
                <li className="px-3 py-2 text-[#021943] hover:text-[#08a4ff] contacttag cursor-pointer">
                <Link to="/contactus">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
