import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { navs, quickLinks } from "../data";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-semibold text-xl md:text-2xl mb-7">
          Sign up to our newsletter
        </h1>
        <div className="  text-center mb-20 ">
          <input
            type="email"
            className="outline-none shadow-md py-3 text-sm md:text-base md:py-4 px-4 w-[200px] md:w-[300px]"
            placeholder="Enter Your Email Here"
          />
          <button className="bg-cyan-600 text-white rounded-r-lg px-7 py-3 md:py-4 text-sm md:text-base">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10 border-b">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <MdTravelExplore className="text-2xl text-orange-700" />
            <h1 className="font-semibold text-lg">Touro</h1>
          </div>
          <h1 className="text-[13px] text-gray-500 leading-8 mb-3">
            Travel is fatal to prejudice and narrow mindsetness. And many of our
            people
          </h1>
          <div className="flex items-center gap-8 text-gray-500 ">
            <FaFacebook className="hover:text-orange-600 transition-all duration-500 cursor-pointer text-xl" />
            <FaTwitter className="hover:text-orange-600 transition-all duration-500 cursor-pointer text-xl" />
            <FaInstagram className="hover:text-orange-600 transition-all duration-500 cursor-pointer text-xl" />
            <FaLinkedin className="hover:text-orange-600 transition-all duration-500 cursor-pointer text-xl" />
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-lg mb-3">Quick Link</h1>
          {navs.map((nav) => {
            return <h1 className="text-gray-500  text-xs md:text-[13px] mb-2">{nav}</h1>;
          })}
        </div>
        <div>
          <h1 className="font-semibold text-lg mb-3">Quick Link</h1>
          {quickLinks.map((ql) => {
            return <h1 className="text-gray-500 text-xs md:text-[13px] mb-2">{ql}</h1>;
          })}
        </div>
        <div>
          <h1 className="font-semibold text-lg mb-3">Contact Us</h1>
          <div className="flex items-start  gap-2 cursor-pointer mb-3">
            <IoLocationOutline className="text-2xl text-orange-600 " />
            <h1 className="text-gray-500 text-xs md:text-[13px] leading-5">
              San Yeik Nyein 2nd Street, Kamaryut Town, Yangon
            </h1>
          </div>
          <div className="flex items-start  gap-2 cursor-pointer mb-3">
            <FiPhone  className=" text-orange-600 " />
            <h1 className="text-gray-500 text-xs md:text-[13px] leading-5">
              +95 9456639939
            </h1>
          </div>
          <div className="flex items-start  gap-2 cursor-pointer">
            <MdOutlineEmail  className=" text-orange-600 " />
            <h1 className="text-gray-500 text-xs md:text-[13px] leading-5">
              eikhaingsoe.ycc@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-center text-xs md:text-[13px] text-gray-500 ">Copyright @ <span className="text-orange-600"> touroagency.com </span> touroagency.com by noise </h1>
      </div>
    </div>
  );
};

export default Contact;
