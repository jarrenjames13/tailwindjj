import React from "react";
import { ReactTyped } from "react-typed";
import Portf from "../assets/portf.png";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf"; 
    link.download = "Jarren_James_Parungao_CV.pdf";
    link.click();
  };

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
            a
          </p>
          <ReactTyped
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:pl-4 py-2 sm:py-4 p-2"
            strings={[" Fullstack Developer", "Software Engineer",  "Computer Engineer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            aria-label="roles: Software Engineer, Computer Engineer, Fullstack Developer"
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-300 mt-2 sm:mt-4">
          For more information, click the link below.
        </p>
<div className="flex items-center justify-center">
        <button
          className="bg-green-500 w-[140px] sm:w-[160px] rounded-md mx-2  my-4 sm:my-6 px-3 py-1.5 text-sm sm:text-base text-black hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Connect with me"
        >
          <a
            href="https://www.linkedin.com/in/jarrenjames"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            Connect with me
          </a>
        </button >

        <button   className="bg-green-500 w-[140px] sm:w-[160px] rounded-md mx-2  my-4 sm:my-6 px-3 py-1.5 text-sm sm:text-base text-black hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
          aria-label="download cv"
          onClick={handleDownloadCV}>

              Download my CV

        </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
