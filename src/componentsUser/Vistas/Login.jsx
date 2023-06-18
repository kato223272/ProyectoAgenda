import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/login.css';
import Navbar from '../Componentes/NavInicio'
function BasicExample() {
  return (
    <div>
      <header>
      <Navbar></Navbar>
      </header>
      <body>
      <div className='login'>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu correo ó usuario</Form.Label>
        <Form.Control className='email' type="email" placeholder="correo/usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control className='password' type="password" placeholder="contraseña" />
      </Form.Group>
      
      <Button href='/PrincipalUser' className='botonInicio' variant="primary" type="submit">
        Iniciar sesión
      </Button>
      <br /><br /><br /><br />
      <div>
        <Row>
            <Col>
            <h6 className='letraNoCuenta'>¿No tienes una cuenta? registrate</h6> 
            </Col>
            <Col>
            <Button href='/CrearCuentaUser' className='registrarse' variant="primary" type="submit"> Registrarse</Button>
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
            <h6 className='letraProv'>¿Desea ingresar como proveedor?</h6> 
            </Col>
            <Col>
            <Button href='/loginProv' className='iniciaProve' variant="primary" type="submit"> Iniciar sesion</Button>
            </Col>
        </Row>
    </div>
      
    </Form>
    </div>
      </body>
   <footer>
    
   </footer>

    </div>
  );

  
}
export default BasicExample;
