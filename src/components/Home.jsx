import React from "react";
import { ReactTyped } from "react-typed";
import Portf from "../assets/portf.png";

const Home = () => {
  return (
    <div className="text-white flex flex-col items-center" id="home">
      <img
        className="mx-auto px-1.5 py-1.5 h-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] mb-2 sm:mb-4"
        src={Portf}
        alt="Jarren James Parungao's Portfolio Logo"
      />

      <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center px-4 h-auto">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold p-2">
          I am
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#44d644] font-bold md:py-4">
          Jarren James Parungao
        </h1>

        <div className="text-white flex flex-col sm:flex-row justify-center items-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold py-2 sm:py-4 p-2">
            an aspiring
          </p>
          <ReactTyped
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:pl-4 py-2 sm:py-4 p-2"
            strings={["Programmer", "Fullstack Developer", "Game Developer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            aria-label="Aspiring roles: Programmer, Fullstack Developer, Game Developer"
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-300 mt-2 sm:mt-4">
          For more information, click the link below.
        </p>

        <button
          className="bg-green-500 w-[140px] sm:w-[160px] rounded-md mx-auto my-4 sm:my-6 px-3 py-1.5 text-sm sm:text-base text-black hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Connect with me"
        >
          <a
            href="https://jjparungao.site"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            Connect with me
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
