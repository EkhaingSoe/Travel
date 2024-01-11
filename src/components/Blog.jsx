import React from "react";
import Title from "../Title";
import { MdTravelExplore } from "react-icons/md";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 mx-10">
      <div className="relative flex items-center  ">
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          className="mx-auto w-full lg:mx-0"
          alt=""
        />
        <div className="px-3 py-3 shadow-lg w-[300px] rounded-md absolute bottom-10 left-32 bg-white">
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
        </div>
      </div>
      <div className="flex items-center justify-center  ">
        <div className="">
          <div>
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

          <div className="grid grid-cols-2 gap-y-10 mt-10">
            <div className="flex items-center gap-3 ">
              <div className="shadow-md w-12 h-12 flex items-center justify-center">
                <MdTravelExplore className="text-orange-500 text-xl" />
              </div>
              <h1 className="font-medium ">Flight</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="shadow-md w-12 h-12 flex items-center justify-center">
                <MdTravelExplore className="text-orange-500 text-xl" />
              </div>
              <h1 className="font-medium ">Hotel</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="shadow-md w-12 h-12 flex items-center justify-center">
                <MdTravelExplore className="text-orange-500 text-xl" />
              </div>
              <h1 className="font-medium ">Wifi</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="shadow-md w-12 h-12 flex items-center justify-center">
                <MdTravelExplore className="text-orange-500 text-xl" />
              </div>
              <h1 className="font-medium ">Food</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
