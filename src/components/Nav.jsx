import React, { useState } from "react";
import { MdTravelExplore } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (

    <>
      <nav class=" py-2 px-4 md:px-20 shadow-md bg-white text-sm sticky top-0  z-[99999] font-poppins ">
        <div class="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MdTravelExplore className="text-2xl text-orange-700" />
            <h1 className="font-semibold text-lg">Touro</h1>
          </div>
         
           <div className="hidden sm:block">
           <ul class="flex items-center gap-10 text-primary font-semibold ">
                <li>
                  <a href="" className="cursor-pointer hover:underline hover:underline-offset-2 hover:text-orange-700">Home</a>
                </li>
                <li>
                  <a href="" className="cursor-pointer hover:underline hover:underline-offset-2 hover:text-orange-700">Category</a>
                </li>
                <li>
                  <a href="" className="cursor-pointer hover:underline hover:underline-offset-2 hover:text-orange-700">Blog</a>
                </li> 
                <li>
                  <a href="" className="cursor-pointer hover:underline hover:underline-offset-2 hover:text-orange-700">Contact Us</a>
                </li>
              </ul>
           </div>
              
              <button className="bg-orange-500 text-white px-10 py-2 rounded-md hidden sm:block">
                Login
              </button>
           
          <div class="sm:hidden" onClick={()=>setToggle(!toggle)} >
            <CiMenuBurger className="cursor-pointer" />
          </div>
        </div>
        <div
          class={`${toggle ?"": "hidden"}  absolute top-[100%] w-[100%] left-0 z-[9999] bg-white border-b`}
          
        >
          <div class=" mt-5 gap-5 px-3 pb-6">
            <ul class="flex flex-col  gap-10 text-primary font-semibold">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Category</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
            <button className="bg-orange-500 mt-5 text-white px-10 py-2 rounded-md">
              Login
            </button>
          </div>
        </div>
      </nav>

      <div class=" absolute top-16   right-5">
        <div
          id="language-menu"
          class="bg-white hidden   text-sm rounded-lg text-paraColor md:text-base  py-2 shadow-md w-[150px]"
        >
          <div class="px-3  border-b py-2">
            <input type="radio" name="" class="hidden" id="" />
            <label for="" class="font-semibold">
              English
            </label>
          </div>
          <div class="px-3 py-2">
            <input type="radio" name="" class="hidden" id="" />
            <label for="" class="font-semibold">
              Myanmar
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
