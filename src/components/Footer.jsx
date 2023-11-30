import React from "react";
import Img from "../assets/companylogo.png";
import { TbPhone } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-t from-gray-900 to-indigo-900 min-h-[200px] text-[#ffffff] text-[15px] pt-5 sm:p-[20px] sm:py-[50px] justify-between  m-auto flex flex-col  md:flex-row items-center gap-[30px] md:items-start w-full">
      <div className=" flex flex-col items-center md:items-start gap-[5px]">
        <span className="logo">
          <img src={Img} className="w-40 h-16 mb-4" alt="logo" />
        </span>
        <a href="https://www.google.com/maps/search/Shendra,+Aurangabad+Head+office-Mumbai/@19.8786019,75.3410362,12z/data=!3m1!4b1?entry=ttu" className="flex gap-[10px] items-center text-[15px]">
          <MdOutlineLocationOn size={21} />
          <span  className="">Shendra, Aurangabad Head office-Mumbai</span>
        </a>
        <a href="mailto:sales@lifecelltechnologies.co.in" className="flex gap-[10px] items-center text-[15px]">
          <HiOutlineMail size={21} />
          <span className="">sales@lifecelltechnologies.co.in</span>
        </a>

        <a href="tel:+918828825966" className="flex gap-[10px] items-center text-[15px]">
          <TbPhone size={21} />
          <span>+91 88288 25966</span>
        </a>
      </div>
      <div className="flex items-center md:items-end flex-col gap-[25px]">
        <div className="flex gap-[25px]">
          <Link to="/#">
            <span className="cursor-pointer hover:opacity-80 hometag text-white px-3 py-2 rounded-2xl">
              Home
            </span>
          </Link>
          <Link to="/products/#">
            {" "}
            <span className="cursor-pointer hover:opacity-80 producttag text-white px-3 py-2 rounded-2xl">
              Products
            </span>
          </Link>
          <Link to="/aboutus/#">
            {" "}
            <span className="cursor-pointer hover:opacity-80 abouttag text-white px-3 py-2 rounded-2xl">
              About
            </span>
          </Link>
          <Link to="/contactus/#">
            {" "}
            <span className="cursor-pointer hover:opacity-80 contacttag text-white px-3 py-2 rounded-2xl">
              Contact
            </span>
          </Link>
        </div>
        <div className="flex gap-[25px] justify-end items-center">
          <BsYoutube size={40} className="cursor-pointer hover:opacity-80 p-2 rounded-full bg-blue-500" />
          <AiOutlineTwitter
            size={40}
            className="cursor-pointer hover:opacity-80 p-2 rounded-full bg-blue-500"
          />
          <GrInstagram size={40} className="cursor-pointer hover:opacity-80 p-2 rounded-full bg-blue-500" />
          <BsFacebook size={40} className="cursor-pointer hover:opacity-80 p-2 rounded-full bg-blue-500" />
        </div>
      </div>
      <div className=" text-center px-5 py-3 bottom-0 bg-white text-[#021943] text-base font-medium rounded-t-3xl sm:-bottom-0 sm:absolute sm:left-80 sm:right-80 sm:py-3">
        Copyright 2023. All Rights Reserved.
      </div>
      </div>
  );
};

export default Footer;
