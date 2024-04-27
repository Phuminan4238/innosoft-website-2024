import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Services = () => {
  return (
    <Container>
      <div className="flex justify-between items-end">
        <div className="text-xl text-start text-gray-300 dark:text-white">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-200 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Services
          </h1>
        </div>
        <div className="text-2xl text-end font-light text-gray-500 dark:text-white">
          <p>Services we offer</p>
        </div>
      </div>

      <div className="grid gap-10 mt-10 lg:grid-cols-2 xl:grid-cols-3">
        <div
          className="lg:col-span-2 xl:col-auto"
          style={{ height: "300px", flexShrink: 0 }}
        >
          <div className="flex flex-col justify-between w-full h-full bg-white border-solid border-2 border-gray-100 px-14 rounded-lg py-14 dark:bg-trueGray-800 relative">
            <p className="text-2xl leading-normal text-gray-500 font-medium">
              Data
            </p>
            {/* <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            /> */}
          </div>
        </div>
        <div
          className="lg:col-span-2 xl:col-auto"
          style={{ height: "300px", flexShrink: 0 }}
        >
          <div className="flex flex-col justify-between w-full h-full bg-white border-solid border-2 border-gray-100 px-14 rounded-lg py-14 dark:bg-trueGray-800 relative">
            <p className="text-2xl leading-normal text-gray-500 font-medium">
              Design
            </p>

            {/* <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            /> */}
          </div>
        </div>
        <div
          className="lg:col-span-2 xl:col-auto relative"
          style={{ height: "300px", flexShrink: 0 }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg blur"
            style={{
              borderRadius: "441px",
              background: "rgba(81, 132, 250, 0.60)",
              filter: "blur(160px)",
              zIndex: "-2", // Ensure background is behind content
              right: "-100px", // Adjusted right offset
              left: "120px",
              top: "60px",
              width: "320px",
              height: "420px",
            }}
          ></div>
          <div className="flex flex-col justify-between w-full h-full bg-white border-solid border-2 border-gray-100 px-14 rounded-lg py-14 dark:bg-trueGray-800 relative">
            <p className="text-2xl leading-normal text-gray-500 font-medium">
              Development
            </p>
            {/* Your content here */}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-1 xl:grid-cols-1">
        <div
          className="lg:col-span-2 xl:col-auto"
          style={{ height: "200px", flexShrink: 0 }}
        >
          <div className="flex flex-col justify-between w-full h-full bg-white border-solid border-2 border-gray-100 px-14 rounded-lg py-14 dark:bg-trueGray-800 relative">
            <p className="text-2xl leading-normal text-gray-500 font-medium">
              Training
            </p>
            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-500 to-purple-500 rounded-lg blur"
              style={{
                borderRadius: "441px",
                background: "#FCDCC7", // Updated background color
                filter: "blur(140px)",
                zIndex: "-20", // Ensure background is behind content
                right: "-100px", // Adjusted right offset
                left: "620px",
                top: "60px",
                width: "600px",
                height: "600px",
              }}
            ></div>
            {/* <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            /> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
