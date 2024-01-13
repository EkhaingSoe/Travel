import React, { useEffect, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import Typed from "typed.js";

const Home = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (dates) => {
    // Handle the date change event
    setSelectedDate(dates[0]);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: state.isFocused ? "0 0 10px rgba(0, 0, 0, 0.2)" : "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#F97316" : "white",
      color: state.isSelected ? "white" : "black",
    }),
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const options2 = [
    { value: "$400-$700", label: "$400 - $700" },
    { value: "$500-$700", label: "$500 - $700" },
    { value: "$600-$700", label: "$600 - $700" },
  ];

  const handleMultiSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  useEffect(() => {
    const options = {
      strings: ["Exporse", "Beautiful", "World"],
      typeSpeed: 200,
      backSpeed: 200,
      showCursor: false,
      loop: true,
    };

    const typed = new Typed(".heading_type", options);

    return () => {
      typed.destroy();
    };

  }, []);

  return (
    <div className=" my-10 md:my-20">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 mt-6">
        <div className="col-span-1 xl:col-span-3 flex items-center justify-center xl:justify-start">
          <div className="">
            <div className=" ">
              <h1 className="text-4xl heading_type xl:text-6xl font-semibold mb-3 text-center xl:text-left">
                Explore Beautiful World
              </h1>
              <div className="flex items-center gap-10 justify-center xl:justify-start">
                <h1 className="text-4xl heading_type2 xl:text-6xl font-semibold mb-3 ">
                  Beautiful
                </h1>
                <PiStarFourFill className="text-5xl " />
              </div>
              <h1 className="text-4xl heading_type3 xl:text-6xl font-semibold mb-3 text-center xl:text-left">
                World
              </h1>
            </div>

            {/* search  */}

            <div className="grid  grid-cols-1 md:grid-cols-4 shadow-lg text-sm lg:text-base  gap-x-12">
              <div className="flex flex-col gap-2 px-4 py-2">
                <label htmlFor="" className="text-cyan-500 text-[13px]  ">
                  Located in
                </label>

                <Select
                  options={options}
                  className="w-full md:w-[150px] text-xs"
                  styles={customStyles}
                />
              </div>
              <div>
                <div className="flex flex-col gap-2 px-4 py-2">
                  <label htmlFor="" className="text-cyan-500 text-[13px]  ">
                    Date
                  </label>
                  <Flatpickr
                    className="outline-none border rounded-[8px] text-[13px] w-full px-3 py-[8px]  md:w-[150px]"
                    placeholder="12/2/2023"
                    value={selectedDate}
                    onChange={handleDateChange}
                    options={{
                      dateFormat: "Y-m-d",
                      enableTime: false,
                      // Add more Flatpickr options as needed
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 px-4 py-2">
                <label htmlFor="" className="text-cyan-500 text-[13px]  ">
                  Price range
                </label>

                <Select
                  options={options2}
                  className="w-full md:w-[150px] text-xs"
                  styles={customStyles}
                />
              </div>

              <div className="bg-cyan-400 py-4 md:rounded-r-lg flex items-center justify-center text-white">
                <h1>Search</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1679830513869-cd3648acb1db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlycGxhbmV8ZW58MHx8MHx8fDA%3D"
            className=" mx-auto h-[400px] object-cover w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
