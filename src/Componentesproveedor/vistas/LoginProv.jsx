import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/LoginProv.css';
import Navbar from '../components/NavbarProv';
function BasicExample() {
  return (
    <div>
       <Navbar></Navbar>
    <div className='login'>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu correo</Form.Label>
        <Form.Control className='email' type="email" placeholder="correo/usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control className='password' type="password" placeholder="contraseña" />
      </Form.Group>
      
      <Button className='botonInicio' variant="primary" type="submit">
        Iniciar sesión
      </Button>
      <br /><br /><br /><br />
      <div>
        <Row>
            <Col>
            <h6 className='letraNoCuenta'>¿No tienes una cuenta? registrate</h6> 
            </Col>
            <Col>
            <Button className='registrarse' variant="primary" type="submit"> Registrarse</Button>
            </Col>
        </Row>
       
        
    </div>
      
    </Form>
    </div>

    </div>
  );

  
}
export default BasicExample;