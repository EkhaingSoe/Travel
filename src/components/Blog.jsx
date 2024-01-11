import React from "react";
import Title from "../Title";
import { MdTravelExplore } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { MdHotel } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";


const Blog = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-5 ">
      <div className="relative flex items-center  ">
        <img
          src="https://plus.unsplash.com/premium_photo-1670002480903-d85334e39d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwcGVvcGxlfGVufDB8fDB8fHww"
          className="mx-auto w-full "
          alt=""
        />
        {/* <div className="px-3 py-3 shadow-lg w-[300px] rounded-md absolute bottom-10 left-32 bg-white">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D0"
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <div>
              <h1 className="text-gray-500 text-sm mb-2">
                World of the best Agency
              </h1>
              <div className="flex items-center gap-2 text-orange-500">
                <MdTravelExplore />
                <MdTravelExplore />
                <MdTravelExplore />
                <MdTravelExplore />
                <MdTravelExplore />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="flex items-center justify-center  ">
        <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-5 ">
          <div className="flex items-center justify-center">
            <div >
              <div className="mb-6 flex flex-col gap-2">
                <Title title="Explore all corners of" />
                <Title title="The world with us" />
              </div>

              <p className="text-gray-500 text-xs lg:text-sm mb-2">
                Travel is fatal to prejuice, and narrows mindedness,
              </p>
              <p className="text-gray-500 text-xs lg:text-sm mb-2">
                Travel is fatal to prejuice, and narrows mindedness,
              </p>
              <p className="text-gray-500 text-xs lg:text-sm mb-2">
                Travel is fatal to prejuice, and narrows mindedness,
              </p>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-2 gap-y-10 mt-10">
              <div className="flex items-center gap-3 ">
                <div className="shadow-md w-12 h-12 flex items-center justify-center">
                  <SiYourtraveldottv className="text-orange-500 text-xl" />
                </div>
                <h1 className="font-medium ">Flight</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="shadow-md w-12 h-12 flex items-center justify-center">
                  <MdHotel className="text-orange-500 text-xl" />
                </div>
                <h1 className="font-medium ">Hotel</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="shadow-md w-12 h-12 flex items-center justify-center">
                  <FaWifi className="text-orange-500 text-xl" />
                </div>
                <h1 className="font-medium ">Wifi</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="shadow-md w-12 h-12 flex items-center justify-center">
                  <IoFastFoodOutline className="text-orange-500 text-xl" />
                </div>
                <h1 className="font-medium ">Food</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
