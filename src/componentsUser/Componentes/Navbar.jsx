import React from 'react';
import { Navbar, Container, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUser, FaHeart, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Importa NavLink para el efecto de navegación activa
import '../css/Navbar.css';

function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="navUser">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/PrincipalUser" className="inicioUser">
          <FaHome className="casaIcon" /> Inicio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="Corporación" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Psicología</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Estética</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Barbería</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Todos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Historial" id="navbarScrollingDropdown">
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
            <NavLink to="/Favoritos" className="navLinkItem" activeClassName="activeNavLink">
              <FaHeart /> <span className="icon-text-separator">Favoritos</span>
            </NavLink>
            <NavLink to="/CitasAgendadasUser" className="navLinkItem" activeClassName="activeNavLink">
              <FaCalendarAlt /> <span className="icon-text-separator">Citas agendadas</span>
            </NavLink>
          </Nav>

          <div className="navLinkSection">
            <Nav.Link className="navLinkItem" id="cerraresion" href="/">
              <FaUser /> <span className="icon-text-separator">Cerrar sesión</span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
