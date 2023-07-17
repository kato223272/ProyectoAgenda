// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contacto <FaMapMarkerAlt /></h3>
            <p><FaPhone /> Teléfono: +52 962-147-5147</p>
            <p><FaEnvelope /> Correo electrónico: ing.a.godinez@gmail.com</p>
            <p><FaMapMarkerAlt /> Dirección: Palestina #444-410 Col. Roma, Monterrey #123, Ciudad</p>
          </div>
          <div className="social-icons">
            <h3>Síguenos</h3>
            <motion.a
              href="https://www.facebook.com/empresacarvaz/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook className="icon" />
            </motion.a>
            <motion.a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcarvaz_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter className="icon" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram className="icon" />
            </motion.a>
          </div>
          <div className="page-link">
            <h3>Página Principal</h3>
            <motion.a
              href="https://www.carvaz.com"
              whileHover={{ scale: 1.2 }}
            >
              <FaArrowRight className="icon" />
            </motion.a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Carvaz. Todos los derechos reservados.</p>
          <p>Política de Privacidad | Términos y Condiciones</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
