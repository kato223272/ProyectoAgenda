import React from 'react';
import { Navbar, Container, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai'; // Importa el icono de lupa
import { FaUser, FaHeart, FaCalendarAlt, FaHome, FaClipboardList, FaHistory } from 'react-icons/fa'; // Importa iconos de Font Awesome
import '../../componentsUser/css/Navbar.css';

function NavbarComponent() {
  return (
    <Navbar bg="primary" expand="lg" className="navUser">
      <Container fluid>
        <Navbar.Brand className="inicioUser" href="/PrincipalUser">
          <FaHome className="casaIcon" /> Inicio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="menuIzquierda me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title={<><FaClipboardList /> Corporación</>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Psicología</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Estética</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Barbería</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Todos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<><FaHistory /> Historial</>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Elemento 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Elemento 2</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Elemento 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Elemento 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="buscarServicioWrapper">
            <AiOutlineSearch className="lupaIcon" />
            <FormControl
              type="search"
              placeholder="Buscar servicio"
              className="buscarServicio"
              aria-label="Search"
            />
            <Button className="buscar" type="submit" variant="outline-light">
              Buscar
            </Button>
          </div>

          <Nav className="corporacion me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link className="navLinkItem" href="/favoritos">
              <FaHeart /> <span className="icon-text-separator">Favoritos</span>
            </Nav.Link>
            <Nav.Link className="navLinkItem" href="/CitasAgendadasUser">
              <FaCalendarAlt /> <span className="icon-text-separator">Citas agendadas</span>
            </Nav.Link>
          </Nav>

          <div className="navLinkSection">
            <Nav.Link className="navLinkItem" id="IniciarSesion" href="/">
              <FaUser /> <span className="icon-text-separator">Cerrar sesión</span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

