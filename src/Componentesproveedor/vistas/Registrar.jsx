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
import { AiOutlineFileImage } from 'react-icons/ai';
import Servicios from '../components/TipoDeServicio';
import '../css/Registras.css';
import BotonEstado from '../components/ButtoonEstado';

function FormExample() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [altPass, setAltPass] = useState('');
  const [nombreLocal, setNombreLocal] = useState('');
  const [calle1, setCalle1] = useState('');
  const [calle2, setCalle2] = useState('');
  const [entreCalle11, setEntreCalle11] = useState('');
  const [entreCalle12, setEntreCalle12] = useState('');
  const [entreCalle21, setEntreCalle21] = useState('');
  const [entreCalle22, setEntreCalle22] = useState('');
  const [numeroExterior, setNumeroExterior] = useState('');
  const [numeroInterior, setNumeroInterior] = useState('');
  const [asentamiento, setAsentamiento] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cantidadTrabajadores, setCantidadTrabajadores] = useState('');
  const [altaSAT, setAltaSAT] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };
  
  const handleCantidadTrabajadoresSelect = (cantidad) => {
    setCantidadTrabajadores(cantidad);
  };
   const handleAltaSATSelect = (opcion) => {
    setAltaSAT(opcion);
  };
  return (
    <div className="RegistrarDatos2">
      <div className="RegistrarDatos1">
        <Form noValidate onSubmit={handleFormSubmit} md={100}>
          <Row>
            <Col md={100} className="text-center mb-4">
              <br />
              <h2>Crear cuenta</h2>
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
                  placeholder="Nombre del lugar"
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
                  placeholder="Calle 1"
                  value={calle1}
                  onChange={(ev) => setCalle1(ev.target.value)}
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
                  placeholder="Calle 2"
                  value={calle2}
                  onChange={(ev) => setCalle2(ev.target.value)}
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
                  placeholder="Entre Calle 1"
                  value={entreCalle11}
                  onChange={(ev) => setEntreCalle11(ev.target.value)}
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
                  placeholder="Entre Calle 2"
                  value={entreCalle21}
                  onChange={(ev) => setEntreCalle21(ev.target.value)}
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
                  placeholder="Entre Calle 1"
                  value={entreCalle12}
                  onChange={(ev) => setEntreCalle12(ev.target.value)}
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
                  placeholder="Entre Calle 2"
                  value={entreCalle22}
                  onChange={(ev) => setEntreCalle22(ev.target.value)}
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
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Asentamiento"
                  value={asentamiento}
                  onChange={(ev) => setAsentamiento(ev.target.value)}
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
                  placeholder="Municipio"
                  value={municipio}
                  onChange={(ev) => setMunicipio(ev.target.value)}
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
              <Form.Control type="file" name="file" accept="image/*" />
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
                  <Dropdown.Item onClick={() => handleAltaSATSelect('Sí')}>Sí</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleAltaSATSelect('No')}>No</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Col md={12} className="text-center">
              <Button className="botonCrear" type="submit">
                Crear cuenta
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default FormExample;