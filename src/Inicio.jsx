import React, { useEffect, useState } from "react";
import Navbar from "./componentesNoRegistrado/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Element, animateScroll as scroll } from "react-scroll";
import { FaRegSmileBeam, FaCompass, FaArrowDown } from "react-icons/fa"; // Importamos los Ã­conos
import Carousel from "./ComponentGlobales/carousel";
import CardUser, { CartaUsuario} from "./ComponentGlobales/CardsUser";
import TextInicio from "./ComponentGlobales/IniciaSesionText";
import "./componentsUser/css/inicio.css";
import Footer from "./ComponentGlobales/Footer.jsx";
import axios from "axios";

function Inicio() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [EmpresasDLT, setEmpresasDLT] = useState([]);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const recibirDatos = async () => {
      try{
        const empresas = await axios.get("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/ConseguirEmpresaDescripcionLocalizacionTelf");
        if(empresas.status == 200){
          const eDLT = empresas.data;
          setEmpresasDLT(eDLT);
        }
      } catch(errorE){
        console.error("Error en Empresas", errorE.response.data);
      }
    }

    recibirDatos();
    console.log(EmpresasDLT);
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
          {/* Icono de flecha hacia abajo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: scrollPosition > 0 ? 0 : 1,
              y: scrollPosition > 0 ? -20 : 0,
            }}
            transition={{ duration: 1 }}
            className="arrow-icon-container"
          >
            <FaArrowDown className="arrow-icon" />
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
              <CartaUsuario Nombre_E={EmpresasDLT} />
            </motion.div>
          </Element>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Inicio;