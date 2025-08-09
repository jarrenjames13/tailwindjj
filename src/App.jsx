import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Jarren James Parungao | Fullstack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Jarren James Parungao, a full-stack developer specializing in React, Node.js, and modern web technologies. Explore projects, expertise, and contact information." />
        <meta name="keywords" content="Jarren James Parungao, fullstack developer, React, Node.js, portfolio, web development, MERN, TailwindCSS, programmer, game developer" />
        <meta name="author" content="Jarren James Parungao" />
        <meta property="og:title" content="Jarren James Parungao | Fullstack Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Jarren James Parungao, a full-stack developer specializing in React, Node.js, and modern web technologies." />
        <meta property="og:image" content="/homepage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jarren James Parungao | Fullstack Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio of Jarren James Parungao, a full-stack developer specializing in React, Node.js, and modern web technologies." />
        <meta name="twitter:image" content="/homepage.png" />
      </Helmet>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Expertise/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}


export default App;
