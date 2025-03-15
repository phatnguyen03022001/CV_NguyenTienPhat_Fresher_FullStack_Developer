import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbPlayerSkipBack, TbPlayerSkipForward, TbLink } from "react-icons/tb";

// import { Link } from "react-router-dom";

import M1 from "../images/project_EEB/M.jpg";
import H_1 from "../images/project_EEB/H_1.jpg";
import H_2 from "../images/project_EEB/H_2.jpg";
import H_3 from "../images/project_EEB/H_3.jpg";
import H_4 from "../images/project_EEB/H_4.jpg";
import H_5 from "../images/project_EEB/H_5.jpg";
import H_6 from "../images/project_EEB/H_6.jpg";
import S_1 from "../images/project_EEB/S_1.jpg";
import S_2 from "../images/project_EEB/S_2.jpg";
import S_3 from "../images/project_EEB/S_3.jpg";
import T_1 from "../images/project_EEB/T_1.jpg";
import T_2 from "../images/project_EEB/T_2.jpg";
import T_3 from "../images/project_EEB/T_3.jpg";

// project 2
import M2 from "../images/project_Hotel/M2.jpg";
import A_1 from "../images/project_Hotel/A_1.jpg";
import A_2 from "../images/project_Hotel/A_2.jpg";
import A_3 from "../images/project_Hotel/A_3.jpg";
import A_4 from "../images/project_Hotel/A_4.jpg";
import A_5 from "../images/project_Hotel/A_5.jpg";
import A_6 from "../images/project_Hotel/A_6.jpg";
import C_1 from "../images/project_Hotel/C_1.jpg";
import C_2 from "../images/project_Hotel/C_2.jpg";
import C_3 from "../images/project_Hotel/C_3.jpg";

// project 3
import M3 from "../images/project_Chat/M3.jpg";
import U_1 from "../images/project_Chat/U_1.jpg";
import U_2 from "../images/project_Chat/U_2.jpg";
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Current image index

  // Mô tả chi tiết cho các dự án
  const projectDetails = [
    {
      title: "English Exam Bank",
      time: "06-08/2024",
      description:
        "The website serves 3 types of users: Heads, Teachers and Students. English Exam Bank offers a comprehensive exam management solution with features like custom exam creation, vast question banks, and detailed analytics.",
      images: [H_1, H_2, H_3, H_4, H_5, H_6, S_1, S_2, S_3, T_1, T_2, T_3],
      technologies: "ReactJS, NodeJS, ExpressJS MongoDB, ... ",
      members: 2,
      links: "https://github.com/phatnguyen03022001/ExamBankEnglish",
      demo_link: "https://englishexambank.vercel.app/",
      image: M1,
      tag: "Graduation Project",
      score: "8.2",
    },
    {
      title: "Hotel Management",
      time: "02 - 05/2023",
      description:
        "Experience seamless hotel management with our intuitive platform. Designed for both Administrators and Guests, our system streamlines operations and enhances the guest experience. From check-in to check-out, we provide a smooth journey for every visitor.",
      images: [A_1, A_2, A_3, A_4, A_5, A_6, C_1, C_2, C_3],
      technologies: "EJS, NodeJS, ExpressJS, MySQL, ... ",
      members: 4,
      links: "https://github.com/phatnguyen03022001/hotel",
      demo_link: "https://hotel-management-system-fytd.onrender.com/",
      image: M2,
      tag: "Final Project",
      score: "9",
    },
    {
      title: "RealChat",
      time: "03/2024",
      description:
        "This project is an application that allows users to chat in real time.",
      images: [U_1, U_2],
      technologies: "Nodejs, Express, Socket.io",
      members: 1,
      links: "https://github.com/phatnguyen03022001/ChatAppSocket/",
      demo_link: "https://chatappsocket-y9ya.onrender.com/",
      image: M3,
      tag: "Midterm Project",
      score: "9",
    },
  ];

  useEffect(() => {
    const getDarkMode = () => {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode === "true";
    };

    setDarkMode(getDarkMode());

    const handleStorageChange = () => {
      setDarkMode(getDarkMode());
    };

    window.addEventListener("storage", handleStorageChange);

    const observer = new MutationObserver(() => {
      setDarkMode(getDarkMode());
    });

    observer.observe(document, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  const bgClass = darkMode
    ? "from-white to-gray-300 text-gray-950"
    : "from-black to-gray-700 text-yellow-600";

  const textClass = darkMode ? "text-black" : "text-yellow-500";

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) % projectDetails[currentProjectIndex].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + projectDetails[currentProjectIndex].images.length) %
        projectDetails[currentProjectIndex].images.length
    );
  };

  return (
    <motion.div
      className={`bg-gradient-to-tr ${bgClass} min-h-screen flex flex-col justify-center items-center text-center p-8`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="relative flex flex-col items-center mb-6">
        <motion.h1
          className={`text-4xl mt-2 z-10 font-extrabold ${textClass}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}>
          PORT
          <span className={`${darkMode ? "text-yellow-500" : "text-white"}`}>
            FOLIO
          </span>
        </motion.h1>
        <span
          className={`absolute text-7xl z-0 whitespace-nowrap font-extrabold opacity-20 transform -translate-y-2 ${
            darkMode ? "text-gray-400 opacity-20" : "text-gray-300"
          }`}>
          WORKS
        </span>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-8">
        <p
          className={`text-center ${
            darkMode ? "text-gray-800" : "text-white"
          }`}>
          Here are some of my projects about:{" "}
        </p>

        <motion.div
          className="flex justify-center text-sm space-x-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          exit={{ opacity: 0, x: 100 }}>
          {["NodeJS", "ExpressJS", "ReactJS", "MongoDB", "MySQL"].map(
            (tech) => (
              <div
                key={tech}
                className={`p-2 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                  darkMode ? "bg-gray-300 text-black" : "bg-gray-600 text-white"
                }`}>
                {tech}
              </div>
            )
          )}
        </motion.div>

        {/* Project list with motion effects */}

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectDetails.map((project, index) => (
            <motion.div
              key={index}
              className="relative group transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg h-full"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for each project
            >
              <img
                src={project.image}
                alt={`Dự Án ${index + 1}`}
                className="rounded-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="font-semibold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setCurrentProjectIndex(index);
                      setCurrentImageIndex(0);
                    }}
                    className="bg-yellow-400 text-black px-4 py-2 text-sm rounded hover:bg-yellow-300 transition">
                    See detail
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for project details */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setModalOpen(false)}>
            <div
              className="bg-white rounded-lg p-6 shadow-lg transition-transform transform scale-105 max-w-5xl w-full mx-4 my-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              <h2 className="relative font-semibold text-2xl mb-4 text-gray-800 text-center">
                {projectDetails[currentProjectIndex].title}
                <span className="absolute right-0 text-xs text-gray-500">
                  {projectDetails[currentProjectIndex].time}
                </span>
              </h2>

              <p className="text-gray-800 text-xs mb-4">
                {projectDetails[currentProjectIndex].description}
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-xs text-gray-900">
                  <span className="font-semibold">Technologies:</span>{" "}
                  {projectDetails[currentProjectIndex].technologies}
                </p>
                <p className="text-xs text-gray-900">
                  <span className="font-semibold">Members:</span>{" "}
                  {projectDetails[currentProjectIndex].members}
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Tags:</span>{" "}
                  {projectDetails[currentProjectIndex].tag}
                  <span className="mx-2">|</span>
                  <span className="font-semibold">Score:</span>{" "}
                  {projectDetails[currentProjectIndex].score}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-sm">
                <a
                  href={projectDetails[currentProjectIndex].links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-1 bg-gray-950 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 w-40">
                  <TbLink className="mr-2" />
                  <span>Source Code</span>
                </a>

                <a
                  href={projectDetails[currentProjectIndex].demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300 w-40">
                  <TbLink className="mr-2" />
                  <span>Live Demo</span>
                </a>
              </div>

              <div className="relative flex items-center justify-center mb-4">
                <button
                  onClick={prevImage}
                  className="absolute left-0 z-40 hover:scale-150 p-3 rounded-full transition">
                  <TbPlayerSkipBack size={20} />
                </button>

                <img
                  src={
                    projectDetails[currentProjectIndex].images[
                      currentImageIndex
                    ]
                  }
                  alt={`Hình ${currentImageIndex + 1}`}
                  className="rounded-lg w-full h-auto max-w-[800px] shadow-lg object-contain"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-0 z-40 hover:scale-150 p-3 rounded-full transition">
                  <TbPlayerSkipForward size={20} />
                </button>
              </div>

              <div className="text-center space-y-2">
                <p className="text-gray-500 text-xs">
                  {currentImageIndex + 1} /{" "}
                  {projectDetails[currentProjectIndex].images.length}
                </p>

                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-500 text-xs transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Portfolio;
