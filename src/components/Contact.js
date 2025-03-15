import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TbSend, TbMapPinHeart, TbPhone, TbMail } from "react-icons/tb";

import emailjs from "emailjs-com"; // Thêm thư viện emailjs

const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

    // Truyền tham số rõ ràng để đảm bảo template nhận đúng giá trị
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Phat",
    };

    emailjs
      .send(
        "service_pzpa4vt",
        "template_g7231dp",
        templateParams,
        "YUbD15eFK9QTzJM45"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true); // Hiển thị thông báo gửi thành công
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
      <div className="relative flex flex-col items-center mb-6">
        <motion.h1
          className={`text-4xl mt-2 z-10 font-extrabold ${textClass}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}>
          GET IN{" "}
          <span className={`${darkMode ? "text-yellow-500" : "text-white"}`}>
            TOUCH
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
        <motion.div
          className={`lg:w-2/5 py-8 items-start rounded-lg mx-4 mb-6 lg:mb-0 text-left ${
            darkMode ? " text-black" : " text-white"
          }`}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}>
          <p
            className={`text-5xl font-bold mb-6 leading-relaxed flex items-center`}>
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
            darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-black"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-3xl font-extrabold text-center">
              Enter Details
            </h1>
            <div className="flex flex-wrap">
              <div className="w-1/2 pr-2">
                <label
                  className="block text-sm font-semibold text-left"
                  htmlFor="name">
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
                  htmlFor="email">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full focu  s:outline-none focus:border-indigo-700 text-black"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-left"
                htmlFor="message">
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
              animate={{
                background: [
                  "linear-gradient(90deg, #fcd34d 0%, #f59e0b 50%, #fcd34d 100%)",
                  "linear-gradient(90deg, #f59e0b 0%, #d97706 50%, #f59e0b 100%)",
                  "linear-gradient(90deg, #d97706 0%, #fcd34d 50%, #d97706 100%)",
                  "linear-gradient(90deg, #fcd34d 0%, #f59e0b 50%, #fcd34d 100%)",
                ],
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                scale: [1, 1.02, 1, 1],
                boxShadow: [
                  "0 0 10px rgba(252, 211, 77, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.5)",
                  "0 0 10px rgba(252, 211, 77, 0.5)",
                  "0 0 10px rgba(252, 211, 77, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`py-2 px-4 rounded transition duration-200 bg-gradient-to-r ${
                darkMode
                  ? "text-black hover:from-yellow-400 hover:to-yellow-600"
                  : "text-black hover:from-yellow-700 hover:to-yellow-900"
              }`}>
              <TbSend className="inline mr-2" /> Send Message
            </motion.button>
          </form>

          {submitted && (
            <motion.p
              className="mt-4 text-green-600 font-medium text dark:text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              Thank you for sending an email to Phat
              <span className="whitespace-nowrap font-bold">
                {" "}
                {formData.message}
              </span>
              <br /> Phat will contact you as soon as possible.
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
