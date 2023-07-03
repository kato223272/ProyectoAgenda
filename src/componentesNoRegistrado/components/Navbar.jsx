import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
function navbar() {
  return (
    <Navbar bg="light" expand="lg"className='nav' >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="corporacion me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Corporación" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Psicología</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Estetica
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Barber
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Todos
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="buscar d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar servicio"
              className="buscarServicio me-2"
              aria-label="Search"
            />
            <Button className='buscar' type='submit' variant="light">Buscar</Button>
          </Form>
          <div className='historial'>
          <Nav.Link className='historialLetra' href="./loginUser">Historial</Nav.Link>
           </div>
           <div className='favoritos'>
           <Nav.Link className='favoritosLetra'
           href="./loginUser">Favoritos</Nav.Link>
           </div>
           <div className='citas'>
           <Nav.Link className='citasLetra'
           href="./loginUser">Citas agendadas</Nav.Link>
           </div>
           <div className='iniciar'>
           <Nav.Link className='iniciarLetra'
           id='iniciarSesion'
           href="/loginUser">Iniciar sesión</Nav.Link>
           </div>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
}

export default navbar;