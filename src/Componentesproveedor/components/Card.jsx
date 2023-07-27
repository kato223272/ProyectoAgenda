import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { AiOutlinePhone, AiOutlineUser, AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { Location } from 'react-router';

import '../css/Card.css';

function Principal({objEmpresa}) {
  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row className="justify-content-center" >
          <Col xs={12} sm={10} md={8} lg={6} style={{width: "100%"}}>
            <Card className="cardCompleta">
              <Row>
                <Col xs={12} sm={6}>
                  <div className="text-center">
                    <Image className="ImagenProvee" src={""} roundedCircle />
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <Card.Body>
                    <Card.Title className="nombreEmpresaa" id="nombreEmpresa">
                      {objEmpresa.nombre_E}
                    </Card.Title>
                    <Card.Subtitle className="especialidad">{objEmpresa.Nombre_Servicio}</Card.Subtitle>
                    <hr />
                    <Card.Text className="card-text-bio">Biografía</Card.Text>
                    <Card.Text>Estado</Card.Text>
                    <Card.Text className="card-text-contacto">
                      <AiOutlinePhone className="icono-contacto" /> {objEmpresa.no_Telf_E}
                    </Card.Text>
                    <Card.Text className="card-text-contacto">
                      <AiOutlineUser className="icono-contacto" /> ID
                    </Card.Text>
                    <Card.Text className="card-text-contacto">
                      <AiOutlineHome className="icono-contacto" /> Ciudad
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Principal;
