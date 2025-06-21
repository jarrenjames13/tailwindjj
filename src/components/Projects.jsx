import React from "react";

const Projects = () => {
  return (
    <section
      className="text-white flex flex-col items-center text-center bg-[#2d2e2d] py-6 px-4 h-auto"
      id="projects"
    >
      <h1 className="text-[#c4fcc4] font-bold text-3xl sm:text-4xl md:text-5xl border-hidden rounded-2xl px-2 py-2">
        My Projects
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-[1200px] mt-4 md:space-x-6">
        <div className="flex-1 mt-4 md:mt-0">
          <p className="border-hidden rounded-xl mx-auto w-full text-sm sm:text-base md:text-lg leading-relaxed text-left">
            Here are some of the project/s I have worked on. Each project
            showcases my skills in full-stack development, from frontend design
            to backend functionality.
          </p>

          <ul className="mt-8 space-y-3 w-full">
            <li>
              <h3 className="text-xl font-bold py-2 ">Office Sales System</h3>
              <img
                src="os-login-page.png"
                alt="Office Sales System Login Page"
              />
              <p className="text-gray-300 py-5 text-justify">
                A custom internal e-commerce platform for Monheim Distributors
                Inc., built with React, Node.js, Express.js, and MSSQL. The
                system allows employees to browse and manage purchases, with a
                dedicated module for order approval and receiving, including CSV
                export functionality for streamlined reporting.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
