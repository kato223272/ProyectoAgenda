import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/NavbarProvTodas.css";

function navbar() {
  return (
    <Navbar bg="light" expand="lg" className="navUser">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
        <Navbar.Brand className='inicioProv' href="/PrincipalProv">Inicio</Navbar.Brand>
          {/* ------------------------------------------------------------------------------------------------------------ */}
          <div className="editar">
            <Nav.Link className="editarPerfil" href="">
              Editar perfil
            </Nav.Link>
          </div>
          <div className="citas">
            <Nav.Link className="citasLetra" href="">
              Lista de pacientes
            </Nav.Link>
          </div>
          <div className="ingresos">
            <Nav.Link className="IngresosLetra" href="">
              Ingresos generados
            </Nav.Link>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------ */}
          <div className="cerrar">
            <Nav.Link className="cerrarLetra" id="cerrarSesion" href="/">
              Cerrar sesión
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
