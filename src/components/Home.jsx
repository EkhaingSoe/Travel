import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const Home = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 mt-6">
      <div className="col-span-1 xl:col-span-3 flex items-center justify-center xl:justify-start">
        <div className="">
          <h1 className="text-6xl font-semibold mb-3 text-center xl:text-left">Explore</h1>
          <div className="flex items-center gap-10 justify-center xl:justify-start">
            <h1 className="text-6xl font-semibold mb-3 ">Beautiful</h1>
            <PiStarFourFill className="text-5xl " />
          </div>
          <h1 className="text-6xl font-semibold mb-3 text-center xl:text-left">World</h1>
          {/* search  */}

          <div className="grid grid-cols-1 lg:grid-cols-4 shadow-lg gap-10  ">
            <div className="flex flex-col gap-2 px-6 py-4">
              <label htmlFor="" className="text-cyan-500  ">
                Located in
              </label>
              <select name="" id="" className="bg-transparent outline-none">
                <option value="">Myanamr</option>
                <option value="">Myanamr</option>
                <option value="">Myanamr</option>
              </select>
            </div>
            <div>
              <div className="flex flex-col gap-2 px-6 py-4">
                <label htmlFor="" className="text-cyan-500  ">
                  Date
                </label>
                <select name="" id="" className="bg-transparent outline-none">
                  <option value="">Myanamr</option>
                  <option value="">Myanamr</option>
                  <option value="">Myanamr</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 px-6 py-4">
                <label htmlFor="" className="text-cyan-500  ">
                  Price Range
                </label>
                <select name="" id="" className="bg-transparent outline-none">
                  <option value="">Myanamr</option>
                  <option value="">Myanamr</option>
                  <option value="">Myanamr</option>
                </select>
              </div>
            </div>
           
            <div className="bg-cyan-400 rounded-r-lg flex items-center justify-center text-white">
                <h1>Search</h1>
               
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 xl:col-span-2">
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          className=" mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
