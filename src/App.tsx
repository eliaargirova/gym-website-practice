import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Footer from "@/scenes/footer";
import { SelectedPage } from "@/shared/types";
import AboutMe from "@/pages/AboutMe";
import Benefits from "./pages/Benefits";
import Classes from "./pages/Classes"
import ContactMe from "./pages/ContactMe"
import ScrollToTop from "./Components/sctollToTop";
import useMediaQuery from "@/hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
     <ScrollToTop />
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="main-content">
        {/* <Routes>
        <Route path="/about-me" element={<AboutMe/>} />
        </Routes>
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} /> */}
        <Routes>
        <Route path="/" element={<Home setSelectedPage={setSelectedPage} />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contactme" element={<ContactMe />} />

        {/* Other routes as needed */}
      </Routes>
      </div>
      <Footer/>
      </div>
      <div></div>
              
    </BrowserRouter>
  );
}

export default App;
