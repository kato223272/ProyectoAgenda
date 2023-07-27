import React, { useState } from 'react';
import { Form, Button, Col, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import '../css/LoginProv.css';
import axios from 'axios';
import Footer from '../../ComponentGlobales/Footer.jsx';
import Navbar from '../../componentesNoRegistrado/components/NavbarRegistrar';

async function validarInicio(mail, pass, navigate) {
  if (mail.trim() !== '' && pass.trim() !== '') {
    if (mail.includes('@')) {
      if (/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(mail)) {
        try {
          const response = await axios.post('http://jeshuabd-001-site1.dtempurl.com/api/Empresas/VerificarLogin?Nombre_E=' + mail + '&Password=' + pass);
          if (response.status === 200) {
            const obj = response.data;
            Swal.fire({
              icon: 'success',
              title: 'Todo correcto',
              text: 'Iniciando sesión. ¡Bienvenido ' + response.data.nombre + "!",
              showConfirmButton: true,
              confirmButtonText: 'Entrar'
            }).then(
              function (result) {
                if (result.isConfirmed) {
                  navigate('/PrincipalProv', {replace:true, state:{obj}});
                }
              }
            );
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Usuario no encontrado',
            text: 'Asegúrese de escribir correctamente su usuario y contraseña.',
            showConfirmButton: false,
            showDenyButton: true,
            denyButtonText: 'Volver a intentarlo'
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Correo inválido',
          text: 'Ingrese un correo electrónico válido.',
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: 'Volver a intentarlo'
        });
      }
    } else {
      try {
        const response = await axios.post('http://jeshuabd-001-site1.dtempurl.com/api/Empresas/VerificarLogin?Nombre_E=' + mail + '&Password=' + pass);
        if (response.status === 200) {
          const obj = response.data;
          Swal.fire({
            icon: 'success',
            title: 'Todo correcto',
            text: 'Iniciando sesión. ¡Bienvenido ' + response.data.nombre + "!",
            showConfirmButton: true,
            confirmButtonText: 'Entrar'
          }).then(
            function (result) {
              if (result.isConfirmed) {
                navigate('/PrincipalProv', {replace:true, state:{obj}});
              }
            }
          );
        }
      } catch (error) {
        console.log(error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Usuario no encontrado',
          text: 'Asegúrese de escribir correctamente su usuario y contraseña.',
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: 'Volver a intentarlo'
        });
      }
    }
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Espacios vacíos',
      text: 'Rellene los campos de ingreso',
      showConfirmButton: true,
      confirmButtonText: 'Volver a intentarlo'
    });
  }
}


function BasicExample() {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <>
    <Navbar></Navbar>
    <div className="login-container">
      <Form className="login-form">
        <h1 className="login-title">Inicio de sesión proveedor </h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="login-label">
            <AiOutlineMail className="login-icon" /> Ingresa tu usuario/correo
          </Form.Label>
          <Form.Control
            className="login-input"
            type="user"
            placeholder="correo/usuario"
            value={mail}
            onChange={(ev) => setMail(ev.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="login-label">
            <AiOutlineLock className="login-icon" /> Contraseña
          </Form.Label>
          <Form.Control
            className="login-input"
            type="password"
            placeholder="contraseña"
            value={pass}
            onChange={(ev) => setPass(ev.target.value)}
          />
        </Form.Group>
        <Button className="login-button" variant="primary" type="button" onClick={() => validarInicio(mail, pass, navigate)}>
          Iniciar sesión
        </Button>
        <br /> <br />
        <div className="register-container">
          <Row>
            <Col>
              <h6 className="register-text">¿No tienes una cuenta? Regístrate</h6>
            </Col>
            <Col>
              <Button href="/CrearCuentaProov" className="register-button" variant="primary" type="button">
                <FaUserPlus className="register-icon" /> Registrarse
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
      
    </div>
   <Footer></Footer> 
    </>
  );
}

export default BasicExample;
