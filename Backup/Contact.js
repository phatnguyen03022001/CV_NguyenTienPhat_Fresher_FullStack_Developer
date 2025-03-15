import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TbSend, TbMapPinHeart, TbPhone, TbMail } from "react-icons/tb";
import { Link } from "react-router-dom";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi email hoặc lưu trữ dữ liệu ở đây
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const bgClass = darkMode
    ? "from-white to-gray-300 text-gray-950"
    : "from-black to-gray-700 text-yellow-600";

  const textClass = darkMode ? "text-black" : "text-yellow-500";

  return (
    <motion.div
      className={`bg-gradient-to-tr ${bgClass} min-h-screen  mt-10 flex flex-col justify-center items-center text-center p-8`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center mb-6">
        <motion.h1
          className={`text-4xl mt-2 z-10 font-extrabold ${textClass}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          GET IN{" "}
          <span className={`${darkMode ? "text-yellow-500" : "text-white"}`}>
            TOUCH
          </span>
        </motion.h1>
        <span
          className={`absolute text-7xl z-0 whitespace-nowrap font-extrabold opacity-40 transform -translate-y-2 ${
            darkMode ? "text-gray-300" : "text-gray-300"
          }`}
        >
          WORKS
        </span>
      </div>
      <div className={`container mx-auto flex flex-col lg:flex-row p-6`}>
        <motion.div
          className={`lg:w-2/5 py-8 items-start rounded-lg mx-4 mb-6 lg:mb-0 text-left ${
            darkMode ? " text-black" : " text-white"
          }`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className={`text-5xl font-bold mb-6 leading-relaxed flex items-center`}
          >
            Don't be shy!
          </p>
          <p className={`text-lg font-thin mb-6 leading-relaxed`}>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div>
            <p className="mb-2 flex items-center">
              <TbPhone className="mr-2" /> 0376552019
            </p>
            <p className="mb-2 flex items-center">
              <TbMail className="mr-2" /> phatnguyen03022001@gmail.com
            </p>
            <p className="mb-2 flex items-center">
              <TbMapPinHeart className="mr-2" /> 11 District, Ho Chi Minh City.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`lg:w-3/5 rounded-lg p-6 ${
            darkMode ? "bg-gray-500 text-white" : "bg-gray-200 text-black"
          }`}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-3xl font-extrabold text-center">
              Enter Details
            </h1>
            <div className="flex flex-wrap">
              <div className="w-1/2 pr-2">
                <label
                  className="block text-sm font-semibold text-left"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-indigo-700 text-black"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label
                  className="block text-sm font-semibold text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-indigo-700 text-black"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-left"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full h-32 focus:outline-none focus:border-indigo-700 text-black"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              className="bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-200"
            >
              <TbSend className="inline mr-2" /> Send Message
            </motion.button>
          </form>

          {submitted && (
            <motion.p
              className="mt-4 text-green-600 font-medium text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your message has been sent successfully!
            </motion.p>
          )}
        </motion.div>
      </div>
      <div className="mt-6 flex space-x-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
          animate={shake ? { x: [0, 15, -15, 0], y: 5 } : {}} // Increase shake distance
          transition={{ duration: 0.3 }} // Duration of the shake
        >
          <Link
            to="/"
            className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition duration-200"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
