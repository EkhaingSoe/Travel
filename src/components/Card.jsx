import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Card = ({ beachName ,location}) => {
  return (
    <div className="border shadow-md rounded-xl overflow-hidden p-2">
      <div >
        <div className="object-cover">
          <img
            src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D" className="rounded-xl  "
            alt=""
          />
        </div>
        <div className="px-5 py-3"> 
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-semibold text-lg">{beachName}</h1>
            <div>
              <MdOutlineStar className="text-orange-400" />
            </div>
          </div>
          <div className="flex items-center gap-3">
          <CiLocationOn className="text-cyan-500" />
          <h1 className="text-gray-500 text-sm">{location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
