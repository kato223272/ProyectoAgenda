import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/login.css';
import Navbar from '../Componentes/NavInicio'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

function BasicExample() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <Navbar />
      <div className='login'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingresa tu correo ó usuario</Form.Label>
            <Form.Control 
              className='email' 
              type="email" 
              placeholder="correo/usuario"
              value={mail}
              onChange={ev => {setMail(ev.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              className='password' 
              type="password" 
              placeholder="contraseña"
              value={pass}
              onChange={ev => {setPass(ev.target.value)}} />
          </Form.Group>
          
          <Button 
            className='botonInicio' 
            variant="primary" 
            type="button"
            onClick={ev => {
              validarInicio(mail, pass, navigate)
            }}>
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
            <br />
            <Row>
                <Col>
                <h6 className='letraProv'>¿Desea ingresar como proveedor?</h6> 
                </Col>
                <Col>
                <Button 
                  href='/loginProv' className='iniciaProve' variant="primary" type="submit"> Iniciar sesion</Button>
                </Col>
            </Row>
        </div>
          
        </Form>
      </div>

    </>
  );
}

function validarInicio(mail, pass, navigate){
  if(mail.trim("") && pass.trim("")){
    if(mail.includes("@")){
      if(/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(mail)){
        Swal.fire({
          icon:'success',
          title:'Todo correcto',
          text:'Su registro ha sido un éxito.',
          showConfirmButton:true,
          confirmButtonText:'Salir'
      }).then(
          function (result){
              if(result.isConfirmed){
                  navigate('/PrincipalUser');
              }
          }
        )
      }
    }
    else if(!(/\d/.test(mail))){
      Swal.fire({
        icon:'success',
        title:'Todo correcto',
        text:'Su registro ha sido un éxito.',
        showConfirmButton:true,
        confirmButtonText:'Salir'
      }).then(
          function (result){
              if(result.isConfirmed){
                  navigate('/PrincipalUser');
              }
          }
        )
    }

    else if(/\d/.test(mail)){
      Swal.fire({
        icon:'error',
        title:'Nombre imposible',
        text:'Se detecto nombres en su nombre, intente de nuevo',
        showConfirmButton:false,
        showDenyButton:true,
        denyButtonText:'Volver a intentarlo'
      })
    }
  }

  else{
    Swal.fire({
      icon:'info',
      title:'Espacios vacíos',
      text:'Rellene los campos de ingreso',
      showConfirmButton:true,
      confirmButtonText:'Volver a intentarlo'
    })
  }
}
export default BasicExample;