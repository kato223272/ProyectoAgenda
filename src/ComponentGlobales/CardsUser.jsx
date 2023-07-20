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
                  <Container className='d-flex justify-content-center align-items-center'>
                    <Image className="ImagenProvee" src={Spa} rounded fluid />
                  </Container>
                </Col>
                <Col xs={12} md={6}>
                  <Card.Body>
                    <Card.Title className="nombreEmpresa" id="nombreEmpresa" style={{
                      textAlign: "center",
                      fontSize: "2vw",
                      fontWeight: "bold",
                      color: "#1a3f76",
                      marginBottom: "2%"}}>
                      Nombre de la empresa
                    </Card.Title>
                    <Card.Subtitle id="especialidad" style={{
                      textAlign: "center",
                      fontSize: "1.2vw",
                      marginBottom: "5%"}}>
                      <FaInfo className="icono-especialidad" /> Especialidad
                    </Card.Subtitle>
                    <br />
                    <Card.Text style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.9vw",
                      fontSize:"110%"}}>
                      <FaUser className="icono-biografia" style={{fontSize: "1.5vw", marginRight:"2%"}} /> Somos un spa dedicado a brindar la máxima relajación a nuestros clientes.
                    </Card.Text>
                    <Card.Text style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.9vw",
                      fontSize:"120%"}}>
                      <FaMapMarkerAlt className="icono-estado" style={{fontSize: "1.5vw", marginRight:"2%"}} /> Ciudad de México
                    </Card.Text>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.9vw",
                      fontSize:"1.2vw"}}>
                      <FaPhoneAlt className="icono-telefono" style={{fontSize: "1.3vw", marginRight:"2%"}} /> +52 961 123 4567
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

export function CartaUsuario(Nombre_E, Nombre_Servicio){

}

export default TextExample;
