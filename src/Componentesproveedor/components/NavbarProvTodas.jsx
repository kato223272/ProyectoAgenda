import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineHome, AiOutlineUser, AiOutlineCalendar, AiOutlineLogout } from "react-icons/ai";
import Logo from '../../ComponentGlobales/img/AplyCH logo.png'
import "../css/NavbarProvTodas.css";

function NavbarProv() {
  return (
    <Navbar bg="light" expand="lg" className="navUser">
       <img src={Logo} alt="Ejemplo" style={{ width: '110px' }} />
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="/PrincipalProv">
              <AiOutlineHome className="nav-icon" />
              Inicio
            </Nav.Link>

            <Nav.Link href="">
              <AiOutlineUser className="nav-icon" />
              Editar perfil
            </Nav.Link>

            <Nav.Link href="">
              <AiOutlineCalendar className="nav-icon" />
              Lista de clientes
            </Nav.Link>

            <Nav.Link href="">
              <AiOutlineCalendar className="nav-icon" />
              Ingresos generados
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="/" className="cerrarLetra" id="cerrarSesion">
              <AiOutlineLogout className="nav-icon" />
              Cerrar sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarProv;
