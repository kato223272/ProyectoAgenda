import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FaStar, FaPhoneAlt } from 'react-icons/fa';
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
                    <Card.Title className="nombreEmpresaa" id="nombreEmpresa">
                      Nombre de la empresa
                    </Card.Title>
                    <Card.Subtitle id="especialidad" className="">
                      Especialidad
                    </Card.Subtitle>
                    <br />
                    <Card.Text>Biografía</Card.Text>
                    <Card.Text>Estado</Card.Text>
                    <div className="contacto">
                      <FaPhoneAlt className="icono-telefono" />
                      <Card.Text>+52 961 123 4567</Card.Text>
                    </div>
                    <div className="botones-separados">
                      <Button className="agendar" type="submit" href="/AgendarCita">
                        Agendar
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
