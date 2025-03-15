import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbPlayerSkipBack, TbPlayerSkipForward, TbLink } from "react-icons/tb";

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
      description:
        "English Exam Bank offers a comprehensive exam management solution with features like custom exam creation, vast question banks, and detailed analytics.",
      images: [H_1, H_2, H_3, H_4, H_5, H_6, S_1, S_2, S_3, T_1, T_2, T_3],
      technologies: "ReactJS, NodeJS, ExpressJS MongoDB, ... ",
      members: 2,
      links: "https://github.com/phatnguyen03022001/ExamBankEnglish",
      image: M1,
    },
    {
      title: "hotel management website",
      description:
        "Dự án này tập trung vào việc xây dựng một ứng dụng web hiện đại.",
      images: [A_1, A_2, A_3, A_4, A_5, A_6, C_1, C_2, C_3],
      technologies: "EJS, NodeJS, ExpressJS, MySQL, ... ",
      members: 4,
      links: "https://example.com/project2",
      image: M2,
    },
    {
      title: "RealChat",
      description:
        "This project is an application that allows users to chat in real time.",
      images: [U_1, U_2],
      technologies: "Nodejs, Express, Socket.io",
      members: 1,
      links: "https://example.com/project3",
      image: M3,
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
    <div
      className={`bg-gradient-to-tr ${bgClass} min-h-screen flex flex-col justify-center items-center text-center relative`}
    >
      <div className="container mx-auto p-6">
        <div className="relative flex flex-col items-center mb-6">
          <motion.h1
            className={`text-4xl mt-2 z-10 font-extrabold ${textClass}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            MY{" "}
            <span className={`${darkMode ? "text-yellow-500" : "text-white"}`}>
              PORTFOLIO
            </span>
          </motion.h1>
          <span
            className={`absolute text-7xl z-0 whitespace-nowrap font-extrabold opacity-40 transform -translate-y-2 ${
              darkMode ? "text-blue-200" : "text-gray-300"
            }`}
          >
            WORKS
          </span>
        </div>
        {/* <p className="mt-2 text-center text-gray-800 mb-8"> */}

        <p
          className={`mt-2 text-center mb-8 ${
            darkMode ? "text-gray-800" : "text-white"
          }`}
        >
          Here are some of my projects about:{" "}
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {["NodeJS", "ExpressJS", "ReactJS", "MongoDB", "MySQL"].map(
            (tech) => (
              <div
                key={tech}
                className={`p-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                  darkMode
                    ? "bg-gray-300 text-gray-800"
                    : "bg-gray-800 text-white"
                }`}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Danh sách dự án */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectDetails.map((project, index) => (
            <div
              key={index}
              className="relative group transition-transform duration-300 hover:scale-105 overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={`Dự Án ${index + 1}`}
                className="rounded-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-white text-center">
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setCurrentProjectIndex(index);
                      setCurrentImageIndex(0); // Reset current image index
                    }}
                    className="mt-2 bg-yellow-400 text-black px-4 py-2 text-sm rounded hover:bg-yellow-300 transition"
                  >
                    See detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hộp thoại mô tả chi tiết */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setModalOpen(false)} // Đóng modal khi nhấp vào nền
          >
            <div
              className="bg-white mt-14 rounded-lg p-6 shadow-lg transition-transform transform scale-105 max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click từ vùng nội dung
            >
              <h2 className="font-semibold text-2xl mb-1 text-gray-800">
                {projectDetails[currentProjectIndex].title}
              </h2>
              <p className="mt-1 text-gray-800 text-xs">
                {projectDetails[currentProjectIndex].description}
              </p>
              <p className="mt-1 font-semibold text-xs text-gray-900">
                Technologies:{" "}
                <span className="font-normal">
                  {projectDetails[currentProjectIndex].technologies}
                </span>
              </p>
              <p className="mt-1 font-semibold text-xs text-gray-900">
                Members: {projectDetails[currentProjectIndex].members}
              </p>
              <a
                href={projectDetails[currentProjectIndex].links}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center text-blue-500 hover:underline whitespace-nowrap"
              >
                <TbLink className="mr-1" />
                <span>View project (github)</span>
              </a>

              <div className="mt-4 flex items-center justify-center relative text-black">
                <button
                  onClick={prevImage}
                  className="absolute left-0 z-40 hover:scale-150 p-3 rounded-full transition flex items-center justify-center"
                >
                  <TbPlayerSkipBack size={20} />
                </button>

                <img
                  src={
                    projectDetails[currentProjectIndex].images[
                      currentImageIndex
                    ]
                  }
                  alt={`Hình ${currentImageIndex + 1}`}
                  className="rounded-lg w-full h-auto max-w-[850px] shadow-lg object-contain transition-transform duration-300 transform"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-0 z-40 hover:scale-150 p-3 rounded-full transition flex items-center justify-center"
                >
                  <TbPlayerSkipForward size={20} />
                </button>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="mt-5 bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-500 text-xs transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
