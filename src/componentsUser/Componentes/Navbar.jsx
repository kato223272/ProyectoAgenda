import React from 'react';
import { Navbar, Container, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { AiOutlineSearch, AiOutlineLogout} from 'react-icons/ai'; // Importa el icono de lupa
import { FaUser, FaHeart, FaCalendarAlt, FaHome, FaClipboardList, FaHistory } from 'react-icons/fa'; // Importa iconos de Font Awesome
import '../../componentsUser/css/Navbar.css';
import Logo from '../../ComponentGlobales/img/AplyCH logo.png'

function NavbarComponent() {
  return (
    <Navbar bg="primary" expand="lg" className="navUser">
       <img src={Logo} alt="Ejemplo" style={{ width: '110px' }} />
      <Container fluid>
        <Navbar.Brand className="inicioUser" href="/PrincipalUser">
          <FaHome className="casaIcon" /> Inicio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="menuIzquierda me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title={<><FaClipboardList /> Corporación</>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="">Psicología</NavDropdown.Item>
              <NavDropdown.Item href="">Estética</NavDropdown.Item>
              <NavDropdown.Item href="">Barbería</NavDropdown.Item>
              <NavDropdown.Item href="">Masajes</NavDropdown.Item>
              <NavDropdown.Item href="">Terapía física</NavDropdown.Item>
              <NavDropdown.Item href="">Fisioterapia</NavDropdown.Item>
              <NavDropdown.Item href="">Odontologia</NavDropdown.Item>
              <NavDropdown.Item href="">Dermatología</NavDropdown.Item>
              <NavDropdown.Item href="">Quiropráctica</NavDropdown.Item>
              <NavDropdown.Item href="">podología</NavDropdown.Item>
              <NavDropdown.Item href="">Terapia ocupacional</NavDropdown.Item>
              <NavDropdown.Item href="">Terapia de lenguaje</NavDropdown.Item>
              <NavDropdown.Item href="">Médicina general</NavDropdown.Item>
              <NavDropdown.Item href="">Ginecología</NavDropdown.Item>
              <NavDropdown.Item href="">Oftalmología</NavDropdown.Item>
              <NavDropdown.Item href="">Cirugía plástica</NavDropdown.Item>
              <NavDropdown.Item href="">Acupuntura</NavDropdown.Item>
              <NavDropdown.Item href="">Homeopatía</NavDropdown.Item>
              <NavDropdown.Item href="">Endocrinología</NavDropdown.Item>
              <NavDropdown.Item href="">Pediatría</NavDropdown.Item>
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
            <AiOutlineLogout className="nav-icon cerrar" /><span className="icon-text-separator">Cerrar sesión</span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

