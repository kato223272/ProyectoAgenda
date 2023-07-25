import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsBuilding } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { RiUserLine } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import Servicios from '../components/TipoDeServicio';
import '../css/Registras.css';
import BotonEstado from '../components/ButtoonEstado';
import Navbar from '../../componentesNoRegistrado/components/NavbarRegistrar';
import Footer from '../../ComponentGlobales/Footer.jsx';

function FormExample() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [altPass, setAltPass] = useState('');
  const [nombreLocal, setNombreLocal] = useState('');
  const [calle, setCalle] = useState('');
  const [referencias, setReferencias] = useState(''); 
  const [numeroExterior, setNumeroExterior] = useState('');
  const [numeroInterior, setNumeroInterior] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cantidadTrabajadores, setCantidadTrabajadores] = useState('');
  const [altaSAT, setAltaSAT] = useState(null);
  const [showDocumentUpload, setShowDocumentUpload] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //  para manejar el envío del formulario
  };
  const [rfc, setRFC] = useState('');
  const handleCantidadTrabajadoresSelect = (cantidad) => {
    setCantidadTrabajadores(cantidad);
  };
  
  const handleAltaSATSelect = (opcion) => {
    setAltaSAT(opcion);
    setShowDocumentUpload(opcion === 'Sí'); 
  };

  const registrarEmpresa = (objED, navegar, altPass) =>{
    if(objED.Correo.trim("") && objED.Password.trim("") && objED.Nombre_E.trim("") && objED.Nombre_Servicio.trim("") && 
    objED.Nombre.trim("") && objED.No_Telf_E.trim("") && objED.Calle.trim("") && objED.N_Exterior.trim("") && 
    objED.Pais.trim("") && objED.Estado.trim("") && objED.Municipio.trim("")){
      if(/^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(objED.Correo) && !(/\d/.test(objED.Nombre))
      && objED.Password === altPass && /\d/.test(objED.No_Telf_E)){
        try{
          
        } catch(error){

        }
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
    <div className="RegistrarDatos2">
     
      <div className="RegistrarDatos1" noValidate autoComplete="off">
        <Form noValidate onSubmit={handleFormSubmit} md={100} >
          <Row>
            <Col md={100} className="text-center mb-4">
              <br />
              <h2>Registrate</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <AiOutlineMail />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Ingresar correo"
                  value={correo}
                  onChange={(ev) => setCorreo(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <RiLockPasswordFill />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <RiLockPasswordFill />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Repetir contraseña"
                  value={altPass}
                  onChange={(ev) => setAltPass(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BsBuilding />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la empresa"
                  value={nombreLocal}
                  onChange={(ev) => setNombreLocal(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Calle"
                  value={calle}
                  onChange={(ev) => setCalle(ev.target.value)} // Modificación: Usamos un solo campo para la calle
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Referencias"
                  value={referencias}
                  onChange={(ev) => setReferencias(ev.target.value)} // Nueva adición: Campo de Referencias
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Número exterior"
                  value={numeroExterior}
                  onChange={(ev) => setNumeroExterior(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Número interior"
                  value={numeroInterior}
                  onChange={(ev) => setNumeroInterior(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <RiUserLine />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(ev) => setNombre(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <FaPhoneAlt />
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Número de teléfono"
                  value={telefono}
                  onChange={(ev) => setTelefono(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <br /><br /><br />
            <BotonEstado />
            <br />
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={12} className="position-relative mb-3">
              <Form.Label>Selecciona una imagen para tu logo</Form.Label>
              {/* Restricción de archivos a imágenes */}
              <Form.Control type="file" name="file" accept="image/*, .jpg, .png" />
              <Form.Control.Feedback type="DocumentoInvalido" tooltip>
                <br />
                <div className="centrarServicios">
                  <Servicios />
                </div>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BsBuilding />
                </InputGroup.Text>
                <DropdownButton
                  as={InputGroup.Append}
                  variant="outline-secondary"
                  title={cantidadTrabajadores || 'Cantidad de trabajadores'}
                >
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'].map((opcion, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleCantidadTrabajadoresSelect(opcion)}
                    >
                      {opcion}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  {/* Ícono */}
                </InputGroup.Text>
                <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={altaSAT === null ? '¿Está dado de alta en el SAT?' : altaSAT}
            >
              <Dropdown.Item onClick={() => setAltaSAT('Sí')}>Sí</Dropdown.Item>
              <Dropdown.Item onClick={() => setAltaSAT('No')}>No</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form.Group>
      
        {altaSAT === 'Sí' && (
          
          <Form.Group as={Col} md={6}>
            <InputGroup>
            
            

              <Form.Control
                type="text"
                placeholder="RFC"
                value={rfc}
                onChange={(ev) => setRFC(ev.target.value)}
                autoComplete="off"
                style={{ marginBottom: '20px' }} 
                className="margen-inferior-rfc" 
              />
            </InputGroup>
          </Form.Group>
        )}
        </Row>
  
          <Row className="mb-3">
            <Col md={12} className="text-center">
              <Button className="botonCrear" type="button"
                >
                Crear cuenta
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}


export default FormExample;
