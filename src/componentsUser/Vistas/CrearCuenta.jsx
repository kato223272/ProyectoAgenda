import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../css/CrearCuenta.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';


function FormExample() {
  const navegar = useNavigate();
  const [passAux, setPassAux] = useState();
  const [NombreU, setNombreU] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
  
  return (
    <div>
        <header>
        <div>

     </div>
        </header>
   <body>
   <div className='RegistrarDatos'>
      <Form noValidate >
        <Row>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Ingrese correo</Form.Label>
            <Form.Control type="email" placeholder="Ingresar correo" 
              value={Correo}
              onChange={ev => setCorreo(ev.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContraseña">
            <Form.Label>Ingrese contraseña nueva</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" 
              value={Contraseña}
              onChange={ev => setContraseña(ev.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContraseñ">
            <Form.Label>Ingrese la contraseña de nuevo</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" 
              value={passAux}
              onChange={ev => setPassAux(ev.target.value)} />
          </Form.Group>
        </Row>
        <Row className="formNombre">        
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik101"
            className="formNombre">
            <InputGroup>
              <InputGroup.Text  id="inputGroupPrepend">Nombre</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  className='cuadroTextNombre'
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={Nombre}
                  onChange={ev => setNombre(ev.target.value)}/>
                  </InputGroup>
                   </Form.Group>
                   </Row>
                   <Row>
                   <Form.Group
                     as={Col}
                     md="4"
                     controlId="validationFormik102"
                     className="position-relative"
                   >
                     <Form.Control.Feedback tooltip>bien</Form.Control.Feedback>
                   </Form.Group>
                  
                   <Form.Group className='formUsuario' as={Col} md="4" controlId="ValidacionUser">
                     <InputGroup>
                       <InputGroup.Text id="inputGroupPrepend">Usuario</InputGroup.Text>
                       <Form.Control
                         type="text"
                         placeholder="Username"
                         className='cuadroTextUsuario'
                         aria-describedby="inputGroupPrepend"
                         name="username"
                         value={NombreU}
                         onChange={ev => setNombreU(ev.target.value)}
                       />
                       <Form.Control.Feedback type="invalid" tooltip>
                        
                       </Form.Control.Feedback>
                     </InputGroup>
                   </Form.Group>
                   </Row>
                 <Row className="mb-3">
                   <Form.Group
                     as={Col}
                     md="6"
                     controlId="validationFormik103"
                     className="position-relative"
                   >
                   </Form.Group>
                   <Form.Group
                     as={Col}
                     md="3"
                     controlId="validationFormik104"
                     className="position-relative"
                   >
                   </Form.Group>
                   <Form.Group
                     as={Col}
                     md="3"
                     controlId="validationFormik105"
                     className="position-relative"
                   >
                   </Form.Group>
                 </Row>
                 <Form.Group className="position-relative mb-3">
                   <Form.Label>Selecciona una imagen para tu logo</Form.Label>
                   <Form.Control
                     type="file"
                     name="file"
                   />
                   <Form.Control.Feedback type="DocumentoInvalido" tooltip>
                    
                   </Form.Control.Feedback>
                 </Form.Group>
                 <Button className='botonCrear' type="button" 
                  onClick={() => {
                    const objeto = {
                      Nombre_U: NombreU,
                      Nombre: Nombre,
                      Correo: Correo,
                      Contraseña: Contraseña
                    }
                    registrarUsuario(objeto, navegar, passAux)}}>Crear cuenta</Button>
               </Form>
            
          
           </div>
          
   </body>
   <footer></footer>
   </div>
  );
}

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
                    navegar('/PrincipalUser');
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


export default FormExample;








