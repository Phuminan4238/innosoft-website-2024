// projects.jsx
import React, { useState, useEffect } from "react";
import Container from "./container";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Category 1");

  useEffect(() => {
    setSelectedCategory("Category 1");
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <div className="flex justify-between items-center">
        <div className="text-start text-gray-300 dark:text-white">
          <h1 className="font-bold text-4xl tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Projects
          </h1>
        </div>
        <div className="text-2xl text-end font-light text-gray-500 dark:text-white">
          <p>
            Take a look at our recent <br /> best projects {">> "}
          </p>
        </div>
      </div>

      <div className="grid mt-5 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        {["Category 1", "Category 2", "Category 3", "Category 4"].map(
          (category) => (
            <div
              key={category}
              className={`text-2xl font-medium p-4 rounded-lg cursor-pointer ${
                selectedCategory === category
                  ? "bg-white text-blue-500 dark:bg-inherit"
                  : "text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          )
        )}
      </div>

      <div className="mr-36">
        <div className="grid gap-10 mt-5 lg:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProjectCard key={index} selectedCategory={selectedCategory} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const ProjectCard = ({ selectedCategory }) => (
  <div
    className="lg:col-span-2 xl:col-auto"
    style={{ height: "300px", flexShrink: 0 }}
  >
    <div
      suppressHydrationWarning={true}
      className="flex flex-col justify-start w-full h-full bg-white border-solid border-2 border-gray-100 px-14 rounded-lg pt-14 dark:bg-trueGray-800"
    >
      {/* <p className="text-2xl leading-normal">{selectedCategory}</p> */}
    </div>
  </div>
);

export default Projects;
