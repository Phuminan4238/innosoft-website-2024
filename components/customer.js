import React, { useState } from "react";
import Container from "./container";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const Customers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalColumns = 3; // Assuming 3 columns

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalColumns);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + totalColumns) % totalColumns
    );
  };

  return (
    <Container>
      <div className="text-xl text-start text-gray-300 dark:text-white">
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
          What’s our customer say
        </h1>
      </div>
      <div className="mt-10 relative">
        <div
          className="grid grid-flow-col gap-10"
          style={{
            transform: `translateX(-${currentSlide * (100 / totalColumns)}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {/* User 1 Column */}
          <div className="lg:col-span-1 xl:col-span-3 h-[220px]">
            <div className="flex flex-col justify-start w-full h-full  bg-white border-solid border-2 border-gray-100 px-14 rounded-lg pt-14 dark:bg-trueGray-800">
              {/* Placeholder content */}
            </div>
          </div>
          {/* User 2 Column */}
          <div className="lg:col-span-1 xl:col-span-4 h-[220px]">
            <div className="flex flex-col justify-between w-full h-full  bg-white border-solid border-2 border-gray-100 px-14 rounded-lg py-14 dark:bg-trueGray-800">
              {/* Placeholder content */}
            </div>
          </div>
          {/* User 3 Column */}
          <div className="lg:col-span-1 xl:col-span-3 h-[220px]">
            <div className="flex flex-col justify-between w-full h-full  bg-white border-solid border-2 border-gray-100 px-14 rounded-lg py-14 dark:bg-trueGray-800">
              {/* Placeholder content */}
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-4">
          {/* Previous Slide Arrow */}
          <button
            className="text-4xl text-gray-500 dark:text-white mr-2"
            onClick={goToPrevSlide}
          >
            {/* Arrow Icon */}
            <ChevronLeftIcon className="h-10 w-10 text-gray-500" />
          </button>
          {/* Next Slide Arrow */}
          <button
            className="text-4xl text-gray-500 dark:text-white ml-2"
            onClick={goToNextSlide}
          >
            {/* Arrow Icon */}
            <ChevronRightIcon className="h-10 w-10 text-gray-500" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Customers;
