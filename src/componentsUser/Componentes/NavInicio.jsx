import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import '../css/NavInicio.css';
function navbar() {
  return (
    <Navbar bg="light" expand="lg"className='nav' >
      <Container fluid>
      <Button className='inicio' href="/">Inicio</Button>
      </Container>
      <h5 className='LetrasSuperiores'>Iniciar sesion</h5>
    </Navbar>
  );
}

export default navbar;