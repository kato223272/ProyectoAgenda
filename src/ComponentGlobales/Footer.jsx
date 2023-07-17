import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./css/Footer.css";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contacto</h3>
            <p>Teléfono: +52 961 123 4567</p>
            <p>Correo electrónico: info@example.com</p>
          </div>
          <div className="social-icons">
            <h3>Síguenos</h3>
            <motion.a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook className="icon" />
            </motion.a>
            <motion.a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter className="icon" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram className="icon" />
            </motion.a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Nombre de la Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
