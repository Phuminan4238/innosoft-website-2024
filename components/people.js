import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";
import userOneImg from "../public/img/user1.jpg";

const Peoples = () => {
  const [selectedCategory, setSelectedCategory] = useState("Category 1");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <div className="flex justify-between items-center">
        <div className="text-xl text-start text-gray-300 dark:text-white">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Peoples
          </h1>
        </div>
        <div className="text-2xl text-end font-light text-gray-500 dark:text-white">
          <p>All {">>"}</p>
        </div>
      </div>

      <div className="grid gap-10 mt-10 lg:grid-cols-2 xl:grid-cols-4 relative">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg blur"
          style={{
            borderRadius: "441px",
            background: "rgba(81, 132, 250, 0.60)",
            filter: "blur(200px)",
            zIndex: "-2", // Ensure background is behind content
            right: "-100px", // Adjusted right offset
            left: "520px", // Adjusted left offset
            top: "60px", // Adjusted top offset
            width: "420px",
            height: "420px",
          }}
        ></div>

        {/* First Column */}
        <div
          className="lg:col-span-2 xl:col-auto shadow-md"
          style={{ height: "440px", flexShrink: 0 }}
        >
          <div className="flex flex-col justify-start w-full h-full bg-white border-solid border-2 border-gray-100 px-14 rounded-lg pt-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal "></p>
          </div>
        </div>
        {/* Second Column */}
        <div
          className="lg:col-span-2 xl:col-auto"
          style={{ height: "440px", flexShrink: 0 }}
        >
          <div className="flex flex-col justify-start w-full h-full  bg-white border-solid border-2 border-gray-100 px-14 rounded-lg pt-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal "></p>
          </div>
        </div>

        {/* Third Column */}
        <div
          className="lg:col-span-2 xl:col-auto"
          style={{ height: "440px", flexShrink: 0 }}
        >
          <div className="flex flex-col justify-start w-full h-full bg-white border-solid border-2 border-gray-100 px-14 rounded-lg pt-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal "></p>
          </div>
        </div>
        {/* Fourth Column */}
        <div
          className="lg:col-span-2 xl:col-auto"
          style={{ height: "440px", flexShrink: 0 }}
        >
          <div className="flex flex-col justify-start w-full h-full bg-white border-solid border-2 border-gray-100 px-14 rounded-lg pt-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal "></p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Peoples;
