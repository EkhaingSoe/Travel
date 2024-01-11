import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Card = ({beach}) => {
  return (
    <div className="">
      <div className="border shadow-md rounded-xl overflow-hidden p-2">
      <div >
        <div className="object-cover">
          <img
            src={beach.href} className="rounded-xl h-[300px] object-cover w-full  "
            alt=""
          />
        </div>
        <div className="px-5 py-3"> 
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-semibold text-lg">{beach.text}</h1>
            <div className="flex items-center gap-3">
              <MdOutlineStar className="text-orange-400" />
              <h1 className="text-orange-400">{beach.range}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
          <CiLocationOn className="text-cyan-500" />
          <h1 className="text-gray-500 text-sm">{beach.location}</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Card;
