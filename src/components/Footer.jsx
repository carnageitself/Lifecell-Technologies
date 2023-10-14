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
    <div className="relative bg-black min-h-[200px] text-blue-300 text-[15px] p-[20px] py-[50px] justify-between  m-auto flex flex-col md:flex-row items-center gap-[30px] md:items-start w-full border-t border-t-gray-900 shadow-card">
      <div className=" flex flex-col items-center md:items-start gap-[5px]">
        <span className="logo">
          <img src={Img} className="w-36 h-12" alt="logo" />
        </span>
        <a href="https://www.google.com/maps/search/Shendra,+Aurangabad+Head+office-Mumbai/@19.8786019,75.3410362,12z/data=!3m1!4b1?entry=ttu" className="flex gap-[10px] items-center text-[15px]">
          <MdOutlineLocationOn size={21} />
          <span  className="">Shendra, Aurangabad Head office-Mumbai</span>
        </a>
        <a href="mailto:sales@lifecelltechnologies.co.in" className="flex gap-[10px] items-center text-[15px]">
          <HiOutlineMail size={21} />
          <span className="">sales@lifecelltechnologies.co.in</span>
        </a>

        <a href="https://wa.me/+918828825966" className="flex gap-[10px] items-center text-[15px]">
          <TbPhone size={21} />
          <span>+91 88288 25966</span>
        </a>
      </div>
      <div className="flex items-center md:items-end flex-col gap-[25px]">
        <div className="flex gap-[25px]">
          <Link to="/">
            <span className="cursor-pointer hover:opacity-80 bg-[#202020] text-blue-300 px-3 py-2 rounded-2xl">
              Home
            </span>
          </Link>
          <Link to="/products">
            {" "}
            <span className="cursor-pointer hover:opacity-80 bg-[#202020] text-blue-300 px-3 py-2 rounded-2xl">
              Products
            </span>
          </Link>
          <Link to="/aboutus">
            {" "}
            <span className="cursor-pointer hover:opacity-80 bg-[#202020] text-blue-300 px-3 py-2 rounded-2xl">
              About
            </span>
          </Link>
          <Link to="/contactus">
            {" "}
            <span className="cursor-pointer hover:opacity-80 bg-[#202020] text-blue-300 px-3 py-2 rounded-2xl">
              Contact
            </span>
          </Link>
        </div>
        <div className="flex gap-[25px] justify-end items-center">
          <BsYoutube size={28} className="cursor-pointer hover:opacity-80" />
          <AiOutlineTwitter
            size={29}
            className="cursor-pointer hover:opacity-80"
          />
          <GrInstagram size={25} className="cursor-pointer hover:opacity-80" />
          <BsFacebook size={25} className="cursor-pointer hover:opacity-80" />
        </div>
      </div>
      <span className="text-center bottom-[10px] absolute left-0 right-0 mx-auto">
        Copyright 2023. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
