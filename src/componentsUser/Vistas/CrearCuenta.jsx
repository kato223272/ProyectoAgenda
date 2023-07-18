import React, { useState } from 'react';
import { Form, Button, Col, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import '../css/CrearCuenta.css';
import axios from 'axios';

function FormExample() {
  const navigate = useNavigate();
  const [passAux, setPassAux] = useState('');
  const [NombreU, setNombreU] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contraseña, setContraseña] = useState('');

  const registrarUsuario = async (objeto) => {
    // Implementar la lógica de validación y registro de usuario con base de datos
    // ...

    // Para simular el registro, se muestra un mensaje de éxito al finalizar
    Swal.fire({
      icon: 'success',
      title: 'Cuenta creada',
      text: 'Iniciando sesión...',
      showConfirmButton: true,
      confirmButtonText: 'Entrar'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/PrincipalUser');
      }
    });
  };

  return (
    <div className="RegistrarDatos">
      <Form noValidate autoComplete="off">
        <h1>Crear una cuenta</h1>
        <Row>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Ingrese correo</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <AiOutlineMail className="input-icon" />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Ingresar correo"
                value={Correo}
                onChange={(ev) => setCorreo(ev.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContraseña">
            <Form.Label>Ingrese contraseña nueva</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <AiOutlineLock className="input-icon" />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={Contraseña}
                onChange={(ev) => setContraseña(ev.target.value)}
                autoComplete="new-password"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContraseñ">
            <Form.Label>Ingrese la contraseña de nuevo</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <AiOutlineLock className="input-icon" />
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={passAux}
                onChange={(ev) => setPassAux(ev.target.value)}
                autoComplete="new-password"
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="validationFormik101" className="formNombre">
            <InputGroup>
              <InputGroup.Text>
                <AiOutlineUser className="input-icon" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Nombre"
                className="cuadroTextNombre"
                aria-describedby="inputGroupPrepend"
                name="username"
                value={Nombre}
                onChange={(ev) => setNombre(ev.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="formUsuario" controlId="ValidacionUser">
            <InputGroup>
              <InputGroup.Text>
                <FaUserPlus className="input-icon" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                className="cuadroTextUsuario"
                aria-describedby="inputGroupPrepend"
                name="username"
                value={NombreU}
                onChange={(ev) => setNombreU(ev.target.value)}
                autoComplete="off"
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Button
          className="botonCrear"
          type="button"
          onClick={() => {
            const objeto = {
              Nombre_U: NombreU,
              Nombre: Nombre,
              Correo: Correo,
              Contraseña: Contraseña
            };
            registrarUsuario(objeto);
          }}
        >
          Crear cuenta
        </Button>
      </Form>
    </div>
  );
}

export default FormExample;
