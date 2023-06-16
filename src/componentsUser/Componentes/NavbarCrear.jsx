import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavbarCrear.css';
function navbar() {
  return (
    <Navbar bg="light" expand="lg"className='navIni' >
      <Container fluid>
      <Button className='inicio' href="/loginUser">Regresar</Button>
      </Container>
      <h5 className='LetrasSuperiores'>Crear cuenta</h5>
    </Navbar>
  );
}

export default navbar;