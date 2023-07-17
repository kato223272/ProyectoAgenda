import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { AiOutlineUser, AiOutlineLock, AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import '../css/login.css';
import axios from 'axios';

function BasicExample() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  
  return (



 
  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title text-center">Iniciar Sesión</h1>
        <Form className="login-form">
          <div className="input-container">
            <AiOutlineUser className="input-icon" />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="input-label text-center">Ingresa tu correo o usuario</Form.Label>
              <Form.Control
                 className='email' 
                 type="email" 
                 placeholder="correo/usuario"
                 value={mail}
                 onChange={ev => setMail(ev.target.value)} 
              />
            </Form.Group>
          </div>

          <div className="input-container">
            <AiOutlineLock className="input-icon" />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="input-label text-center">Contraseña</Form.Label>
              <Form.Control
               className='password' 
               type="password" 
               placeholder="contraseña"
               value={pass}
               onChange={ev => setPass(ev.target.value)} 
              />
            </Form.Group>
          </div>

          <Button className="botonInicio" variant="primary" type="submit" onClick={ev => validarInicio(mail, pass, navigate)}>
        Iniciar sesión <AiOutlineArrowRight className="button-icon" />
      </Button>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu correo ó usuario</Form.Label>
        <Form.Control 
          className='email' 
          type="email" 
          placeholder="correo/usuario"
          value={mail}
          onChange={ev => setMail(ev.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
          className='password' 
          type="password" 
          placeholder="contraseña"
          value={pass}
          onChange={ev => setPass(ev.target.value)} />
      </Form.Group>
      
      <Button 
        className='botonInicio' 
        variant="primary" 
        type="button"
        onClick={ev => validarInicio(mail, pass, navigate)}>
        Iniciar sesión
      </Button>
      <br /><br /><br /><br />
      <div>
        <Row>
          <Col>
            <h6 className='letraNoCuenta'>¿No tienes una cuenta? registrate</h6> 
          </Col>
          <Col>
            <Button href='/CrearCuentaUser' className='registrarse' variant="primary" type="button">Registrarse</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h6 className='letraProv'>¿Desea ingresar como proveedor?</h6> 
          </Col>
          <Col>
            <Button href='/loginProv' className='iniciaProve' variant="primary" type="button">Iniciar sesion</Button>
          </Col>
        </Row>
    </div>
      
    </Form>
    
      </body>
   <footer>
    
   </footer>
      <div className="linea-separadora"></div> {/* Línea separadora */}
          
      <div className="register-section">
        <h6 className="letraNoCuenta">¿No tienes una cuenta? Regístrate</h6>
        <Button href="/CrearCuentaUser" className="registrarse" variant="primary" type="submit">
          <FaUserPlus className="button-icon" /> Registrarse
        </Button>
      </div>

      <div className="provider-section">
        <h6 className="letraProv">¿Deseas ingresar como proveedor?</h6>
        <Button href="/loginProv" className="iniciaProve" variant="primary" type="submit">
          Iniciar sesión <AiOutlineArrowRight className="button-icon" />
        </Button>
      </div>
        </Form>
      </div>
    </div>
  );
}


async function validarInicio(mail, pass, navigate){
  if(mail.trim("") && pass.trim("")){
    if(mail.includes("@")){
      if(/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(mail)){
        try {
          const response = await axios.post('http://jeshuabd-001-site1.dtempurl.com/api/Usuarios/VerificarLogin?correo='+mail+'&contraseña='+pass);
          if (response.status === 200) {
            Swal.fire({
              icon:'success',
              title:'Todo correcto',
              text:'Iniciando sesión...',
              showConfirmButton:true,
              confirmButtonText:'Entrar'
          }).then(
              function (result){
                  if(result.isConfirmed){
                      navigate('/PrincipalUser');
                  }
              }
            );
          } 
        } catch (error) {
          Swal.fire({
            icon:'error',
            title:'Usuario no encontrado',
            text:'Asegúrese de escribir correctamente su usuario y contraseña.',
            showConfirmButton:false,
            showDenyButton:true,
            denyButtonText:'Volver a intentarlo'
          });
        }
      }
    }
    
    else if(!(/\d/.test(mail))){
      try {
        const response = await axios.post('http://jeshuabd-001-site1.dtempurl.com/api/Usuarios/VerificarLogin?correo='+mail+'&contraseña='+pass);
        if (response.status === 200) {
          Swal.fire({
            icon:'success',
            title:'Todo correcto',
            text:'Iniciando sesión...',
            showConfirmButton:true,
            confirmButtonText:'Entrar'
        }).then(
            function (result){
                if(result.isConfirmed){
                    navigate('/PrincipalUser');
                }
            }
          );
        } 
      } catch (error) {
        Swal.fire({
          icon:'error',
          title:'Usuario no encontrado',
          text:'Asegúrese de escribir correctamente su usuario y contraseña.',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        });
      }
    }

    else if(/\d/.test(mail)){
      Swal.fire({
        icon:'error',
        title:'Nombre imposible',
        text:'Se detecto numeros en su nombre, intente de nuevo',
        showConfirmButton:false,
        showDenyButton:true,
        denyButtonText:'Volver a intentarlo'
      });
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

