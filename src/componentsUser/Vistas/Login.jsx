import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AiOutlineUser, AiOutlineLock, AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/login.css';
import axios from 'axios';

async function validarInicio(mail, pass, navigate) {
  if (mail.trim() !== '' && pass.trim() !== '') {
    if (mail.includes('@')) {
      if (/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(mail)) {
        try {
          const response = await axios.post('http://jeshuabd-001-site1.dtempurl.com/api/Usuarios/VerificarLogin?NombreU=' + mail + '&Contraseña=' + pass);
          if (response.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Todo correcto',
              text: 'Iniciando sesión. ¡Bienvenido ' + response.data + "!",
              showConfirmButton: true,
              confirmButtonText: 'Entrar'
            }).then(
              function (result) {
                if (result.isConfirmed) {
                  navigate('/PrincipalUser', {replace:true, state:{NombreU: response.data}});
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
        const response = await axios.post('http://jeshuabd-001-site1.dtempurl.com/api/Usuarios/VerificarLogin?NombreU=' + mail + '&Contraseña=' + pass);
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Todo correcto',
            text: 'Iniciando sesión...',
            showConfirmButton: true,
            confirmButtonText: 'Entrar'
          }).then(
            function (result) {
              if (result.isConfirmed) {
                navigate('/PrincipalUser', {replace:true, state:{NombreU: response.data}});
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
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title text-center">Inicio Sesión</h1>
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

          <Button className="botonInicio" variant="primary" type="button" onClick={() => validarInicio(mail, pass, navigate)}>
            Iniciar sesión <AiOutlineArrowRight className="button-icon" />
          </Button>

          <div className="linea-separadora"></div> {/* Línea separadora */}

          <div className="register-section">
            <h6 className="letraNoCuenta">¿No tienes una cuenta? Regístrate</h6>
            <Link to="/CrearCuentaUser" className="registrarse">
              <FaUserPlus className="button-icon" /> Registrarse
            </Link>
          </div>

          <div className="provider-section">
            <h6 className="letraProv">¿Deseas ingresar como proveedor?</h6>
            <Link to="/loginProv" className="iniciaProve">
              Iniciar sesión <AiOutlineArrowRight className="button-icon" />
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default BasicExample;
