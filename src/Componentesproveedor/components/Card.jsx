import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { AiOutlinePhone, AiOutlineUser, AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';

import '../css/Card.css';

function Principal({objEmpresa}) {
  console.log(objEmpresa);
  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row className="justify-content-center" >
          <Col xs={12} sm={10} md={8} lg={6} style={{width: "100%"}}>
            <Card className="cardCompleta">
              <Row>
                <Col xs={12} sm={6}>
                  <div className="text-center">
                    <Image className="ImagenProvee" src={`data:image/jpeg;base64,${objEmpresa.fotoPerfil}`} roundedCircle />
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <Card.Body>
                    <Card.Title className="nombreEmpresaa" id="nombreEmpresa" style={{textAlign: "center"}}>
                      {objEmpresa.nombre_E}
                    </Card.Title>
                    <Card.Subtitle className="especialidad">{objEmpresa.nombre_Servicio}</Card.Subtitle>
                    <hr />
                    <Card.Text className="card-text-bio">{objEmpresa.descripcion}</Card.Text>
                    <Card.Text>{objEmpresa.estado}</Card.Text>
                    <Card.Text className="card-text-contacto">
                      <AiOutlinePhone className="icono-contacto" /> {objEmpresa.no_Telf_E}
                    </Card.Text>
                    <Card.Text className="card-text-contacto">
                      <AiOutlineUser className="icono-contacto" /> {objEmpresa.nombre}
                    </Card.Text>
                    <Card.Text className="card-text-contacto">
                      <AiOutlineHome className="icono-contacto" /> {objEmpresa.municipio}
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
