import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion, useInView } from "framer-motion"; // Thêm useInView
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const isHomeInView = useInView(homeRef, { once: false });
  const isPortfolioInView = useInView(portfolioRef, { once: false });
  const isAboutInView = useInView(aboutRef, { once: false });
  const isContactInView = useInView(contactRef, { once: false });

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div>
        <Header
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          portfolioRef={portfolioRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
        <motion.div
          ref={homeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHomeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}>
          <Home />
        </motion.div>
        <motion.div
          ref={portfolioRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isPortfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5 }}>
          <Portfolio />
        </motion.div>
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}>
          <About />
        </motion.div>
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5 }}>
          <Contact />
        </motion.div>
      </div>
    </BrowserRouter>
  );
};

export default App;
