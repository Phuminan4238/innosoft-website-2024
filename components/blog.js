import React, { useState } from "react";
import Container from "./container";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Blogs = () => {
  const [sliderActive, setSliderActive] = useState(false);

  const handleSliderClick = () => {
    setSliderActive(!sliderActive);
  };

  return (
    <Container>
      <div className="flex justify-between items-end">
        <div className="text-xl text-start text-gray-300 dark:text-white">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Blog
          </h1>
        </div>
        <div className="text-2xl text-end font-light text-gray-500 dark:text-white">
          <p>
            Knowledge sharing <br></br>from our team {">>"}
          </p>
        </div>
      </div>

      <div className="grid gap-10 mt-10 lg:grid-cols-2 xl:grid-cols-5 relative">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-500 rounded-lg blur"
          style={{
            borderRadius: "1000px",
            background: "#FCDCC7", // Updated background color
            filter: "blur(120px)",
            zIndex: "-2", // Ensure background is behind content
            left: "10px", // Snap to left side
            top: "20px",
            width: "680px",
            height: "440px",
          }}
        ></div>

        {/* First Column */}
        <div
          className={`lg:col-span-2 xl:col-span-2 ${
            sliderActive
              ? "transform -translate-x-full"
              : "transform translate-x-0"
          } transition-transform ease-in-out duration-500`}
          style={{ flexShrink: 0 }}
        >
          <div className="flex flex-col justify-between w-full h-full bg-white border-solid border-2 border-gray-100 rounded-lg shadow-md px-14 py-14 dark:bg-trueGray-800 relative">
            {/* Placeholder content */}
          </div>
        </div>
        {/* Second Column */}
        <div
          className={`lg:col-span-2 xl:col-span-2 h-[300px] ${
            sliderActive
              ? "transform -translate-x-full"
              : "transform translate-x-0"
          } transition-transform ease-in-out duration-500`}
          style={{ flexShrink: 0 }}
        >
          <div className="flex flex-col justify-between w-full h-full bg-white border-solid border-2 border-gray-100 rounded-lg shadow-md px-14 py-14 dark:bg-trueGray-800 relative">
            {/* Placeholder content */}
          </div>
        </div>
        {/* Third Column (Button Slider) */}
        <div
          className="lg:col-span-2 xl:col-auto relative cursor-pointer flex items-center justify-center"
          style={{ flexShrink: 0 }}
          onClick={handleSliderClick}
        >
          {/* Third Column Content */}
          <div className="flex flex-col justify-center items-center w-full h-full bg-gray-300 border border-gray-300 rounded-lg shadow-md px-14 py-14 dark:bg-trueGray-800 relative">
            {/* Arrow Icon */}
            <ChevronRightIcon className="h-10 w-10 text-white" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
