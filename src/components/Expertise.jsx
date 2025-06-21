import React from "react";

const Expertise = () => {
  return (
    <div className="flex flex-col text-white items-center text-center py-6 gap-6 px-4" id="expertise">
      <h1 className="font-bold text-2xl sm:text-3xl">Expertise and Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="bg-green-700 px-4 py-5 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-left">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#eeeb52] to-[#fbfcf3]">
            Frontend Development
          </h3>
          <p className="mt-2 text-gray-300">
            Building dynamic and responsive interfaces for seamless user
            experiences.
          </p>
          <p className="mt-2">
            <a href="#" className="text-gray-300 hover:text-white hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="bg-green-700 px-4 py-5 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-left">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#eeeb52] to-[#fbfcf3]">
            Backend Development
          </h3>
          <p className="mt-2 text-gray-300">
            Creating robust server-side solutions for efficient data management.
          </p>
          <p className="mt-2">
            <a href="#" className="text-gray-300 hover:text-white hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="bg-green-700 px-4 py-5 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-left">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#eeeb52] to-[#fbfcf3]">
            UI/UX Design
          </h3>
          <p className="mt-2 text-gray-300">
            Designing user-centric interfaces that are both aesthetically pleasing and highly functional.
          </p>
          <p className="mt-2">
            <a href="#" className="text-gray-300 hover:text-white hover:underline">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
