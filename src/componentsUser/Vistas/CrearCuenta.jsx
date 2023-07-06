import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import '../css/CrearCuenta.css';
import Navbar from '../Componentes/NavbarCrear'

function FormExample() {
 

  return (
    <div>
        <header>
        <div>
     <Navbar></Navbar>
     </div>
        </header>
   <body>
   <div className='RegistrarDatos'>
           
         
             
               <Form noValidate >
               <Row>
                     <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Ingrese correo</Form.Label>
                <Form.Control type="email" placeholder="Ingresar correo" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formContraseña">
                <Form.Label>Ingrese contraseña nueva</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formContraseña">
                <Form.Label>Ingrese la contraseña de nuevo</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
               </Row>
                 <Row className="formNombre">
                
                   <Form.Group
                     as={Col}
                     md="4"
                     controlId="validationFormik101"
                     className="formNombre"
                   >
                    <InputGroup hasValidation>
                       <InputGroup.Text  id="inputGroupPrepend">Nombre</InputGroup.Text>
                       <Form.Control
                         type="text"
                         placeholder="Nombre"
                         className='cuadroTextNombre'
                         aria-describedby="inputGroupPrepend"
                         name="username"
                       
                       />
                       <Form.Control.Feedback type="invalid" tooltip>
                        
                       </Form.Control.Feedback>
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
                     {/* <Form.Label className='letrasUsuario'>Usuario nuevo</Form.Label> */}
                     <InputGroup hasValidation>
                       <InputGroup.Text id="inputGroupPrepend">Usuario</InputGroup.Text>
                       <Form.Control
                         type="text"
                         placeholder="Username"
                         className='cuadroTextUsuario'
                         aria-describedby="inputGroupPrepend"
                         name="username"
                        
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
                     required
                     name="file"
                    
                   />
                   <Form.Control.Feedback type="DocumentoInvalido" tooltip>
                    
                   </Form.Control.Feedback>
                 </Form.Group>
                 {/* <Form.Group className="position-relative mb-3">
                   <Form.Check
                     required
                     name="terms"
                     label="Acepto los terminos y condiciones"
                     onChange={handleChange}
                     isInvalid={!!errors.terms}
                     feedback={errors.terms}
                     feedbackType="Invalido"
                     id="validaciónTermino"
                     feedbackTooltip
                   />
                 </Form.Group> */}
                 <Button className='botonCrear' type="submit">Crear cuenta</Button>
               </Form>
            
          
           </div>
          
   </body>
   <footer></footer>
   </div>
  );
}


export default FormExample;








