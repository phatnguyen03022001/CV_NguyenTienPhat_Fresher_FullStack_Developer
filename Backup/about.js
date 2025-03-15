import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

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
      className={`bg-gradient-to-tr ${bgClass} min-h-screen flex flex-col justify-center items-center text-center relative`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-6">
        <div className="relative flex flex-col items-center mb-6">
          <motion.h1
            className={`text-4xl mt-2 z-10 font-extrabold ${textClass}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ABOUT{" "}
            <span className={`${darkMode ? "text-yellow-500" : "text-white"}`}>
              ME
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

        <motion.p
          className={`mt-4 mb-8 ${textClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Xin chào! Tôi là [Tên của bạn], một [nghề nghiệp hoặc lĩnh vực chuyên
          môn]. Tôi đam mê phát triển các ứng dụng và thiết kế giao diện người
          dùng.
        </motion.p>

        <motion.h2
          className={`text-2xl font-semibold mb-2 ${textClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Kinh nghiệm
        </motion.h2>
        <motion.ul
          className="list-disc ml-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <li>[Công việc/Thực tập gần nhất] - [Mô tả ngắn gọn]</li>
          <li>[Công việc/Thực tập trước đó] - [Mô tả ngắn gọn]</li>
          <li>[Dự án cá nhân hoặc cộng đồng] - [Mô tả ngắn gọn]</li>
        </motion.ul>

        <motion.h2
          className={`text-2xl font-semibold mb-2 ${textClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Kỹ năng
        </motion.h2>
        <motion.p
          className={`mb-4 ${textClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Tôi có kinh nghiệm với các công nghệ như: [Liệt kê các kỹ năng, ví dụ:
          React, Node.js, CSS, v.v.].
        </motion.p>

        <motion.h2
          className={`text-2xl font-semibold mb-2 ${textClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Liên hệ
        </motion.h2>
        <motion.p
          className={`mb-4 ${textClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Bạn có thể liên hệ với tôi qua email: [email của bạn] hoặc trên các
          mạng xã hội: [Liệt kê các liên kết mạng xã hội].
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
