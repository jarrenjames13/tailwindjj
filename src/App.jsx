import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
 
  return (
    <>
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
