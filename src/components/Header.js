import React, { useEffect, useState } from "react";

// import { motion } from "framer-motion";
import { SlHome, SlBriefcase, SlUser, SlEnvolope } from "react-icons/sl";
import { MdOutlineBrightness4, MdOutlineBrightness5 } from "react-icons/md";

const Header = ({
  scrollToSection,
  homeRef,
  portfolioRef,
  aboutRef,
  contactRef,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Thêm nửa chiều cao màn hình
      const sections = [
        { ref: homeRef, id: "home" },
        { ref: portfolioRef, id: "portfolio" },
        { ref: aboutRef, id: "about" },
        { ref: contactRef, id: "contact" },
      ];

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeRef, portfolioRef, aboutRef, contactRef]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <>
      {/* Header cho màn hình lớn */}
      <nav
        className={`fixed top-0 left-0 right-0 p-2 shadow-md hidden md:block ${
          darkMode ? "bg-white" : "bg-black"
        } z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div
            className={`text-${
              darkMode ? "black" : "yellow-400"
            } font-bold text-lg`}>
            My Portfolio
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => scrollToSection(homeRef)}
              className={`relative px-4 py-2 rounded-lg transition duration-200 ${
                activeSection === "home"
                  ? darkMode
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400 text-black"
                  : `text-${
                      darkMode ? "black" : "yellow-400"
                    } hover:text-yellow-300`
              }`}>
              Home
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className={`relative px-4 py-2 rounded-lg transition duration-200 ${
                activeSection === "portfolio"
                  ? darkMode
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400 text-black"
                  : `text-${
                      darkMode ? "black" : "yellow-400"
                    } hover:text-yellow-300`
              }`}>
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className={`relative px-4 py-2 rounded-lg transition duration-200 ${
                activeSection === "about"
                  ? darkMode
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400 text-black"
                  : `text-${
                      darkMode ? "black" : "yellow-400"
                    } hover:text-yellow-300`
              }`}>
              About
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`relative px-4 py-2 rounded-lg transition duration-200 ${
                activeSection === "contact"
                  ? darkMode
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400 text-black"
                  : `text-${
                      darkMode ? "black" : "yellow-400"
                    } hover:text-yellow-300`
              }`}>
              Contact
            </button>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`ml-4 p-2 rounded transition duration-200 ${
              darkMode ? "bg-yellow-400 text-black" : "bg-white text-black"
            }`}>
            <span className="text-lg">
              {darkMode ? <MdOutlineBrightness5 /> : <MdOutlineBrightness4 />}
            </span>
          </button>
        </div>
      </nav>

      {/* Header cho màn hình nhỏ - fixed bottom */}
      <nav
        className={`fixed bottom-0 space-x-6 left-0 right-0 md:hidden ${
          darkMode ? "bg-white" : "bg-black"
        } shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50`}>
        <div className="grid grid-cols-5 gap-1">
          <button
            onClick={() => scrollToSection(homeRef)}
            className={`p-4 flex flex-col items-center justify-center ${
              activeSection === "home"
                ? "bg-yellow-400 text-black rounded-lg my-2"
                : `text-${darkMode ? "black" : "yellow-400"}`
            }`}>
            <span className="text-sm">
              <SlHome />
            </span>
            {/* <span className="text-xs mt-1">Home</span> */}
          </button>
          <button
            onClick={() => scrollToSection(portfolioRef)}
            className={`p-4 flex flex-col items-center justify-center ${
              activeSection === "portfolio"
                ? "bg-yellow-400 text-black rounded-lg my-2"
                : `text-${darkMode ? "black" : "yellow-400"}`
            }`}>
            <span className="text-sm">
              <SlBriefcase />
            </span>
            {/* <span className="text-xs mt-1">Portfolio</span> */}
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className={`p-4 flex flex-col items-center justify-center ${
              activeSection === "about"
                ? "bg-yellow-400 text-black rounded-lg my-2"
                : `text-${darkMode ? "black" : "yellow-400"}`
            }`}>
            <span className="text-sm">
              <SlUser />
            </span>
            {/* <span className="text-xs mt-1">About</span> */}
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className={`p-4 flex flex-col items-center justify-center ${
              activeSection === "contact"
                ? "bg-yellow-400 text-black rounded-lg my-2"
                : `text-${darkMode ? "black" : "yellow-400"}`
            }`}>
            <span className="text-sm">
              <SlEnvolope />
            </span>
            {/* <span className="text-xs mt-1">Contact</span> */}
          </button>
          <button
            onClick={toggleDarkMode}
            className={`mx-1 flex flex-col items-center justify-center transition duration-200 ${
              darkMode
                ? "bg-white text-black rounded-lg"
                : `text-${darkMode ? "black" : "yellow-white"}`
            }`}>
            <span className="text-lg">
              {darkMode ? (
                <MdOutlineBrightness5 />
              ) : (
                <MdOutlineBrightness4 className="text-yellow-400" />
              )}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
