import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FaArrowRight } from 'react-icons/fa';
import ChicaAnimadaCalendario from './img/ChicaAnimadaCalendario.png';
import "./css/InicioSesionText.css";

function InicioText() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 order-md-2 text-section">
          <h2 className="titulo">Bienvenido/a a nuestro sitio de agendamiento de citas.</h2>
          <p className="texto">
            Únete para agendar citas de manera gratuita y sin complicaciones.
          </p>
          <p className="texto">
            Ofrecemos una variedad de servicios profesionales y certificados.
          </p>
          <p className="texto">
            Regístrate ahora y comienza tu experiencia de bienestar y atención personalizada.
          </p>
          <Button variant="primary" href="/loginUser" className="d-block mx-auto mt-4 btn-custom">
            <FaArrowRight className="icon" /> Registrarse
          </Button>
        </div>
        <div className="col-md-6 order-md-1 image-section">
          <Image src={ChicaAnimadaCalendario} alt="Imagen" fluid style={{ maxWidth: '400px' }} />
        </div>
      </div>
    </div>
  );
}

export default InicioText;