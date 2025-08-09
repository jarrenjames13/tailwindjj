import React, { useState, useEffect, useRef } from "react"; 

const Projects = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  
  // Images for the Language Loop carousel
  const languageLoopImages = [
    { src: "homepage.png", alt: "Language Loop App Preview" },
    { src: "login.png", alt: "Login page" },
    { src: "signup.png", alt: "Signup page" }
  ];
  
  // Navigation functions with sliding effect
  const goToPrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newIndex = currentImageIndex === 0 ? languageLoopImages.length - 1 : currentImageIndex - 1;
    
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };
  
  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newIndex = currentImageIndex === languageLoopImages.length - 1 ? 0 : currentImageIndex + 1;
    
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };
  
  // Function to go to a specific slide
  const goToSlide = (index) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-cycle images every 2 seconds
  useEffect(() => {
    let interval;
    if (!isPaused && !isTransitioning) {
      interval = setInterval(() => {
        goToNext();
      }, 2000); 
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentImageIndex, isPaused, isTransitioning]);

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

            <li>
              <h3 className="text-xl font-bold py-2 ">
                Language Loop - MERN STACK SOCIAL MEDIA APP
              </h3>
              
              {/* Replace multiple image tags with carousel */}
              <div 
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <img
                  src={languageLoopImages[currentImageIndex].src}
                  alt={languageLoopImages[currentImageIndex].alt}
                  className={`w-full h-auto object-contain mx-auto transition-transform duration-300 ${isTransitioning ? "scale-95" : "scale-100"}`}
                />
                
                {/* Navigation buttons */}
                <button 
                  onClick={goToPrevious}
                  className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md hover:bg-opacity-75"
                  aria-label="Previous image"
                >
                  &#10094;
                </button>
                
                <button 
                  onClick={goToNext}
                  className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md hover:bg-opacity-75"
                  aria-label="Next image"
                >
                  &#10095;
                </button>
                
                {/* Optional: Add dots indicator */}
                <div className="flex justify-center mt-2">
                  {languageLoopImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
                        index === currentImageIndex ? "bg-white" : "bg-gray-500"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 py-5 text-justify">
                A full-stack social media platform designed specifically for
                language learning and cultural exchange. Built with the MERN
                stack (MongoDB, Express.js, React, Node.js) and enhanced with
                TailwindCSS. Features include real-time messaging with typing
                indicators, comprehensive notification system, 1-on-1 and group
                video conferencing, screen sharing, JWT authentication, and 32
                customizable UI themes. The application implements robust error
                handling and is optimized for deployment on cloud platforms with
                Stream for enterprise-level scalability.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
