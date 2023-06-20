import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/login.css';
import Navbar from '../Componentes/NavInicio'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

function ejecutarBase(buscarQuery){
  const mysql = require('mysql');
  const bd = mysql.createConnection({

      host: 'pi-bs.cqcdzfbv1wzk.us-east-1.rds.amazonaws.com',
  
      user: 'admin',
  
      password: '#LgSc06042004#',
  
      database: 'Proyecto_Integrador',
  
      insecureAuth: true
  
  });

  bd.connect(function(err){
      if(err){
          console.log(err);
      }

      else{
          bd.query({buscarQuery},function(err,resultado){
              if(err){
                  console.log(err);
              }

              else{
                  return resultado;
              }
          });
      }
  });
}

function BasicExample() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  return (
   <div>
      <header>
      <Navbar></Navbar>
      </header>
      <body>
        <Form className='login'>
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
                <Button href='/CrearCuentaUser' className='registrarse' variant="primary" type="button"> Registrarse</Button>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                <h6 className='letraProv'>¿Desea ingresar como proveedor?</h6> 
                </Col>
                <Col>
                <Button href='/loginProv' className='iniciaProve' variant="primary" type="button"> Iniciar sesion</Button>
                </Col>
            </Row>
        </div>
          
        </Form>
      </body>
   <footer>
    
   </footer>

   </div>
   
  );
}

function validarInicio(mail, pass, navigate){
  if(mail.trim("") && pass.trim("")){
    if(mail.includes("@")){
      if(/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(mail)){
        let valores = ejecutarBase('select Nombre, Correo, Password from Proyecto_Integrador.Empresa;')
        valores.forEach(element => {
          console.log(valores)
        });
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
      else{
        Swal.fire({
          icon:'error',
          title:'Correo inválido',
          text:'Asegúrese de escribir correctamente su correo electrónico.',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        })
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
        text:'Se detecto numeros en su nombre, intente de nuevo',
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