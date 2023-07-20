import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavBarProv.css';
function navbar() {
  return (
    <Navbar bg="light" expand="lg"className='navIni' >
      <Container fluid>
      <Button className='inicio' href="/loginUser">Atras</Button>
      </Container>
      <h5 className='LetrasSuperiores'>Bienvenido</h5>
    </Navbar>
  );
}

export default navbar;