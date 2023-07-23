import React, { useState } from 'react';
import { Form, Button, Col, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import '../css/CrearCuenta.css';
import axios from 'axios';
import Navbar from '../../componentesNoRegistrado/components/NavbarRegistrar';

function FormExample() {
  const navigate = useNavigate();
  const [passAux, setPassAux] = useState('');
  const [NombreU, setNombreU] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Contraseña, setContraseña] = useState('');

  async function registrarUsuario(objeto, navegar, passAux){
    if(objeto.Nombre_U.trim("") && objeto.Nombre.trim("") && objeto.Correo.trim("") && objeto.Contraseña.trim("")){
      if(/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(objeto.Correo) && !(/\d/.test(objeto.Nombre)) && objeto.Contraseña === passAux){
        try{
          const guardar = await axios.post('http://jeshuabd-001-site1.dtempurl.com/api/Usuarios/RegistrarUsuario?NombreU=' + objeto.Nombre_U + '&Nombre=' 
            + objeto.Nombre + '&Correo=' + objeto.Correo + '&Contrase%C3%B1a='+ objeto.Contraseña);
          if(guardar.status === 201){
            Swal.fire({
              icon:'success',
              title:'¡Cuenta creada!',
              text:'Iniciando sesión...',
              showConfirmButton:true,
              confirmButtonText:'Entrar'
          }).then(
              function (result){
                  if(result.isConfirmed){
                      navegar('/PrincipalUser', {replace:true, state:{NombreU: objeto.Nombre_U}});
                  }
              }
            );
          }
        } catch (error){
          Swal.fire({
            icon:'error',
            title:'¡Error!',
            text:'Hubo un problema con el sistema, intente de nuevo.',
            showConfirmButton:true,
            confirmButtonText:'Entrar'
          });
          console.error(error.response.data);
        }
      }
  
      else if(!(/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(objeto.Correo))){
        Swal.fire({
          icon:'error',
          title:'Correo mal escrito',
          text:'Asegurese de escribir un correo válido',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        });
      }
      
      else if(objeto.Contraseña !== passAux){
        Swal.fire({
          icon:'error',
          title:'Contraseñas diferentes',
          text:'Las contraseñas escritas son diferentes entre si',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        });
      }
  
      else if(/\d/.test(objeto.Nombre)){
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
        text:'Rellene los campos de registro',
        showConfirmButton:true,
        confirmButtonText:'Volver a intentarlo'
      })
    }
  }

  return (
    <>
    <Navbar></Navbar>
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
            registrarUsuario(objeto, navigate, passAux);
          }}
        >
          Crear cuenta
        </Button>
      </Form>
    </div>
    </>
  );
}

export default FormExample;
