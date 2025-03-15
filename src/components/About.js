import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import cv from "../files/NguyenTienPhat_Fresher_Fullstack_Developer.pdf";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 300); // Duration of the shake
    }, 3000); // Every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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

  return (
    <motion.div
      className={`bg-gradient-to-tr ${bgClass} min-h-screen flex flex-col justify-center items-center text-center p-8`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}>
      <div className="relative flex flex-col items-center mb-6 mt-12">
        <motion.h1
          className={`text-4xl mt-2 z-10 font-extrabold ${textClass}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}>
          ABOUT{" "}
          <span className={`${darkMode ? "text-yellow-500" : "text-white"}`}>
            ME
          </span>
        </motion.h1>
        <span
          className={`absolute text-7xl z-0 whitespace-nowrap font-extrabold opacity-20 transform -translate-y-2 ${
            darkMode ? "text-gray-400 opacity-20" : "text-gray-300"
          }`}>
          WORKS
        </span>
      </div>

      <div className={`container mx-auto flex flex-col lg:flex-row p-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-7xl mx-auto p-4">
          {/* Personal Information Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
            <motion.h2
              className="text-xl font-bold mb-2 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Personal Information
            </motion.h2>
            <ul className="space-y-0">
              {[
                { label: "Name", value: "Nguyen Tien Phat" },
                { label: "Birthday", value: "03/02/2001" },
                { label: "Nationality", value: "Vietnam" },
                { label: "Phone", value: "0376552019" },
                { label: "Languages", value: "Vietnamese / English" },
                { label: "Gender", value: "Male" },
                { label: "Address", value: "Ho Chi Minh City" },
                {
                  label: "Linkedin",
                  value: (
                    <a
                      href="https://www.linkedin.com/in/phatnguyen03022001/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit my Linkedin profile"
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                      See details
                    </a>
                  ),
                },
                {
                  label: "Github",
                  value: (
                    <a
                      href="https://github.com/phatnguyen03022001/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit my Facebook profile"
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                      See details
                    </a>
                  ),
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 px-2 border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 rounded-lg">
                  <strong className="text-gray-700">{item.label}:</strong>
                  <span className="text-gray-600">{item.value}</span>
                </li>
              ))}
            </ul>
            {/* Download CV Button */}
            <motion.div
              className="flex justify-center mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: false }}
              animate={shake ? { x: [0, 15, -15, 0], y: 5 } : {}} // Increase shake distance
              transition={{ duration: 0.1 }} // Duration of the shake
            >
              <a
                href={cv}
                download="NguyenTienPhat_Fresher_Fullstack_Developer.pdf"
                className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                <TbDownload className="mr-2" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Education and Experience Card */}

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full w-full">
            <div className="flex-grow">
              <div>
                <motion.h2
                  className="text-xl font-bold mb-2 text-gray-800 flex justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 }}>
                  <div className="flex items-center">Education</div>

                  <span className="text-xs text-gray-500">2019 - 2024</span>
                </motion.h2>
                <p className="text-gray-600 leading-relaxed text-sm text-left border-b pb-6">
                  Currently studying at{" "}
                  <strong>Ton Duc Thang University</strong>, majoring in{" "}
                  <strong>Software Engineering</strong>, with a focus on
                  enhancing my skills and knowledge in the field.
                </p>
              </div>

              <div>
                <motion.h2
                  className="text-xl font-bold mt-6 mb-2 text-gray-800 flex justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.6 }}>
                  Experience
                  <span className="text-xs text-gray-500">04 - 06/2024</span>
                </motion.h2>
                <p className="text-gray-600 leading-relaxed text-sm text-left border-b pb-6">
                  I have gained <strong>2 months of experience</strong> working
                  in the industry, during which I developed my skills and
                  contributed to various projects, including an impactful
                  internship at <strong>MiuTech Company</strong>. This
                  opportunity allowed me to apply my knowledge in a real-world
                  setting and enhance my professional growth.
                </p>
              </div>

              <div>
                <motion.h2
                  className="text-xl font-bold mt-10 mb-4 text-gray-800 flex justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.8 }}>
                  Technologies
                  <span className="text-xs text-gray-500">2023 - now</span>
                </motion.h2>
                <motion.div
                  className="grid grid-cols-3 gap-3 justify-items-center w-full whitespace-nowrap"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  exit={{ opacity: 0, x: 100 }}>
                  {[
                    "NodeJS",
                    "ExpressJS",
                    "ReactJS",
                    "MongoDB",
                    "MySQL",
                    "Tailwind",
                    "Bootstrap",
                    "Docker",
                    "Others",
                  ].map((tech) => (
                    <motion.div
                      key={tech}
                      className={`w-full text-center p-2 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                        darkMode
                          ? "bg-gray-300 text-gray-800"
                          : "bg-gray-800 text-white"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      <span className="text-xs font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
