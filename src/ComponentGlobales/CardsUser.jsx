import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import {
  FaStar,
  FaPhoneAlt,
  FaUser,
  FaInfo,
  FaMapMarkerAlt,
  FaCalendarPlus,
} from "react-icons/fa"; // Importamos los iconos necesarios
import "../ComponentGlobales/css/CardUser.css";
import Spa from "./img/spa.jpeg";

function TextExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const sampleData = [
    { nombre: "Empresa 1", especialidad: "Especialidad 1" },
    { nombre: "Empresa 2", especialidad: "Especialidad 2" },
    { nombre: "Empresa 3", especialidad: "Especialidad 3" },
    // Agrega más datos aquí
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sampleData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="fondoPrincipal">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            {currentItems.map((item, index) => (
              <div className="fondoCard" key={index}>
                <Row>
                  <Col
                    xs={12}
                    md={6}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Container className="d-flex justify-content-center align-items-center ImagenProvee-card">
                      <Image className="ImagenProvee" src={Spa} rounded fluid />
                    </Container>
                  </Col>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Card.Title
                        className="nombreEmpresa"
                        id="nombreEmpresa"
                        style={{
                          textAlign: "center",
                          fontSize: "2vw",
                          fontWeight: "bold",
                          color: "#1a3f76",
                          marginBottom: "2%",
                        }}
                      >
                        {item.nombre}
                      </Card.Title>
                      <Card.Subtitle
                        id="especialidad"
                        style={{
                          textAlign: "center",
                          fontSize: "1.2vw",
                          marginBottom: "5%",
                        }}
                      >
                        <FaInfo className="icono-especialidad" /> {item.especialidad}
                      </Card.Subtitle>
                      <br />
                      <Card.Text
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.9vw",
                          fontSize: "110%",
                        }}
                      >
                        <FaUser
                          className="icono-biografia"
                          style={{ fontSize: "1.5vw", marginRight: "2%" }}
                        />{" "}
                        {item.descripcion}
                      </Card.Text>
                      <Card.Text
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.9vw",
                          fontSize: "120%",
                        }}
                      >
                        <FaMapMarkerAlt
                          className="icono-estado"
                          style={{ fontSize: "1.5vw", marginRight: "2%" }}
                        />{" "}
                        {item.ciudad}
                      </Card.Text>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.9vw",
                          fontSize: "1.2vw",
                        }}
                      >
                        <FaPhoneAlt
                          className="icono-telefono"
                          style={{ fontSize: "1.3vw", marginRight: "2%" }}
                        />{" "}
                        {item.telefono}
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
            ))}
            <div className="pagination-controls">
              <Button
                className="prev-button"
                disabled={currentPage === 1}
                onClick={handlePrevPage}
              >
                Anterior
              </Button>
              <Button
                className="next-button"
                disabled={currentItems.length < itemsPerPage}
                onClick={handleNextPage}
              >
                Siguiente
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export function CartaUsuario({ Nombre_E }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      {Nombre_E.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((E, index) => {
        const blob = new Blob([E.FotoPerfil], { type: "image/jpeg" });
        const url = E.FotoPerfil ? URL.createObjectURL(blob) : null;

        return (
          <div className="fondoPrincipal" key={index}>
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <div className="fondoCard">
                    <Row>
                      <Col
                        xs={12}
                        md={6}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Container className="d-flex justify-content-center align-items-center">
                          <Image
                            className="ImagenProvee"
                            src={url}
                            rounded
                            fluid
                          />
                        </Container>
                      </Col>
                      <Col xs={12} md={6}>
                        <Card.Body>
                          <Card.Title
                            className="nombreEmpresa"
                            id="nombreEmpresa"
                            style={{
                              textAlign: "center",
                              fontSize: "2vw",
                              fontWeight: "bold",
                              color: "#1a3f76",
                              marginBottom: "2%",
                            }}
                          >
                            {E.Nombre_E}
                          </Card.Title>
                          <Card.Subtitle
                            id="especialidad"
                            style={{
                              textAlign: "center",
                              fontSize: "1.2vw",
                              marginBottom: "5%",
                            }}
                          >
                            <FaInfo className="icono-especialidad" />
                            {E.Nombre_Servicio}
                          </Card.Subtitle>
                          <br />
                          <Card.Text
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "0.9vw",
                              fontSize: "110%",
                            }}
                          >
                            <FaUser
                              className="icono-biografia"
                              style={{ fontSize: "1.5vw", marginRight: "2%" }}
                            />
                            {E.Descripcion}
                          </Card.Text>
                          <Card.Text
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "0.9vw",
                              fontSize: "120%",
                            }}
                          >
                            <FaMapMarkerAlt
                              className="icono-estado"
                              style={{ fontSize: "1.5vw", marginRight: "2%" }}
                            />
                            {E.Municipio}
                          </Card.Text>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "0.9vw",
                              fontSize: "1.2vw",
                            }}
                          >
                            <FaPhoneAlt
                              className="icono-telefono"
                              style={{ fontSize: "1.3vw", marginRight: "2%" }}
                            />
                            {E.No_Telf_P}
                          </div>
                          <div className="botones-separados">
                            <Button
                              className="agendar"
                              type="submit"
                              href="/AgendarCita"
                            >
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
      })}
      <div className="pagination-controls">
        <Button
          className="prev-button"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Anterior
        </Button>
        <Button
          className="next-button"
          disabled={Nombre_E.length <= currentPage * itemsPerPage}
          onClick={handleNextPage}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}

export default TextExample;
