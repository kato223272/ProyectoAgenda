import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/LoginProv.css';
import Navbar from '../components/NavbarProv';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

function BasicExample() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <header><Navbar></Navbar></header>
       <body>
       <div className='login'>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu correo</Form.Label>
        <Form.Control className='email' type="email" placeholder="correo/usuario"
              value={mail}
              onChange={ev => setMail(ev.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control className='password' type="password" placeholder="contraseña"
              value={pass}
              onChange={ev => setPass(ev.target.value)} />
      </Form.Group>
      

      <Button className='botonInicio' variant="primary" type="submit" href='/PrincipalProv'>

      <Button className='botonInicio' variant="primary" type="button"
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
            <Button href='/CrearCuentaProov' className='registrarse' variant="primary" type="button"> Registrarse</Button>
            </Col>
        </Row>
       
        
    </div>
      
    </Form>
    </div>

       </body>
    <footer></footer>
    </div>
  );
}

async function validarInicio(mail, pass, navigate){
  if(mail.trim("") && pass.trim("")){
    if(mail.includes("@")){
      if(/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(mail)){
        try {
          const response = await axios.post('https://localhost:44310/api/Empresas/VerificarLogin?correo='+mail+'&contraseña='+pass);
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
            title:'Contraseña incorrecta',
            text:'Asegúrese de escribir correctamente su contraseña.',
            showConfirmButton:false,
            showDenyButton:true,
            denyButtonText:'Volver a intentarlo'
          });
        }
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
      try {
        const response = await axios.post('https://localhost:44310/api/Empresas/VerificarLogin?correo='+mail+'&contraseña='+pass);
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
          title:'Contraseña incorrecta',
          text:'Asegúrese de escribir correctamente su contraseña.',
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