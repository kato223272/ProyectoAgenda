import React, { useEffect, useState } from "react";
import Navbar from "./componentesNoRegistrado/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Element, animateScroll as scroll } from "react-scroll";
import { FaRegSmileBeam, FaCompass } from "react-icons/fa"; // Importamos los íconos
import Carousel from "./ComponentGlobales/carousel";
import CardUser from "./ComponentGlobales/CardsUser";
import TextInicio from "./ComponentGlobales/IniciaSesionText";
import "./componentsUser/css/inicio.css";
import Footer from "./ComponentGlobales/Footer.jsx";

function Inicio() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Fondo">
      <Navbar />
      <form action="">
        <div className="container-fluid text-section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <TextInicio />
          </motion.div>
          {/* Separador "Bienvenido" */}
          <div className="separator">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: scrollPosition > 0 ? 1 : 0,
                y: scrollPosition > 0 ? 0 : 50,
              }}
              transition={{ duration: 1 }}
            >
              <div className="line"></div>
              <div className="section-name">Bienvenido</div>
              <div className="line"></div>
            </motion.div>
          </div>
        </div>

        <div className="container-fluid carousel-section">
          <Element name="carousel">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: scrollPosition > 100 ? 1 : 0,
                y: scrollPosition > 100 ? 0 : 50,
              }}
              transition={{ duration: 1 }}
            >
              <Carousel />
            </motion.div>
          </Element>
          {/* Separador "Descubre" */}
          <div className="separator">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: scrollPosition > 100 ? 1 : 0,
                y: scrollPosition > 100 ? 0 : 50,
              }}
              transition={{ duration: 1 }}
            >
              <div className="line"></div>
              <div className="section-name">Descubre</div>
              <div className="line"></div>
            </motion.div>
          </div>
        </div>

        <div className="container-fluid card-section">
          <Element name="card">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: scrollPosition > 400 ? 1 : 0,
                y: scrollPosition > 400 ? 0 : 50,
              }}
              transition={{ duration: 1 }}
            >
              <CardUser />
            </motion.div>
          </Element>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Inicio;
