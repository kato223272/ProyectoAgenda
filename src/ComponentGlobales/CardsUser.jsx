import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FaStar, FaPhoneAlt, FaUser, FaInfo, FaMapMarkerAlt, FaCalendarPlus } from 'react-icons/fa'; // Importamos los iconos necesarios
import '../ComponentGlobales/css/CardUser.css';
import Spa from './img/spa.jpeg';

function TextExample() {
  return (
    <div className="fondoPrincipal">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="fondoCard">
              <Row>
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                  <Container>
                    <Image className="ImagenProvee" src={Spa} rounded fluid />
                  </Container>
                </Col>
                <Col xs={12} md={6}>
                  <Card.Body>
                    <Card.Title className="nombreEmpresa" id="nombreEmpresa">
                      Nombre de la empresa
                    </Card.Title>
                    <Card.Subtitle id="especialidad" className="">
                      <FaInfo className="icono-especialidad" /> Especialidad
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                      <FaUser className="icono-biografia" /> Somos un spa dedicado a brindar la máxima relajación a nuestros clientes.
                    </Card.Text>
                    <Card.Text>
                      <FaMapMarkerAlt className="icono-estado" /> Ciudad de México
                    </Card.Text>
                    <div className="contacto">
                      <FaPhoneAlt className="icono-telefono" />
                      <Card.Text>+52 961 123 4567</Card.Text>
                    </div>
                    <div className="botones-separados">
                      <Button className="agendar" type="submit" href="/AgendarCita">
                        <FaCalendarPlus className="icono-agendar" /> Agendar
                      </Button>
                      <Button className="favoritosb" onClick="">
                        <FaStar className="icono-estrella" />
                        Agregar a favoritos
                      </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextExample;
