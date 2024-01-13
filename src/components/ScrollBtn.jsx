import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollBtn = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      // console.log(document.documentElement.scrollHeight);
      // console.log(document.documentElement.clientHeight);
      const scrolled = window.scrollY;
      console.log(scrolled);
      const percentage = (scrolled / windowHeight) * 100;
      setScrollPercentage(percentage);
      if (!showProgressBar && percentage > 0) {
        setShowProgressBar(true);
      } else if (showProgressBar && percentage === 0) {
        setShowProgressBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showProgressBar]);
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // setShowProgressBar(false);
  };

  return (
    <div
      onClick={handleOnClick}
      className={`first-letter:scroll-progress  ${
        showProgressBar
          ? " animate__animated animate__fadeInUp"
          : " animate__animated animate__fadeOutDown transition-all duration-1000 transform -translate-y-5"
      }  cursor-pointer fixed w-12 h-12  bottom-6 right-4`}
    >
      {showProgressBar && (
        <>
          <CircularProgressbar
            value={scrollPercentage}
            styles={{
              path: {
                stroke: "#F97316",
                transition: "stroke-dashoffset 0.5s linear 0s",
                strokeWidth: 2,
              },
              trail: {
                stroke: `rgba(249, 115, 22, 0.26)`,
                strokeWidth: 2,
              },
            }}
          />
          <span className="children absolute bottom-[25%] left-[23%]">
            
            <IoIosArrowRoundUp className="text-2xl text-orange-600" />
            {/* <i className=" ti-angle-up text-[11px] font-light text-orange-600" /> */}
          </span>
        </>
      )}
    </div>
  );
};

export default ScrollBtn;

