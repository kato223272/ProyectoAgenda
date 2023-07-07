import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Buttoon from "../components/ButtoonEstado";
import Servicios from "../components/TipoDeServicio.jsx"
import Navbar from "../components/NavbarCrear";
import axios from 'axios';

function registrarUsuario(){

}

function FormExample() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [nombreLocal, setNombreLocal] = useState("");
  const [direccion, setDireccion] = useState([]); //Calle: , entre calle: , tipo calle: , etc
  const [usuario, setUsuario] = useState([]); //nombre: , num.telefono: , etc.

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <body>
        <div className="RegistrarDatos">
              <Form noValidate >
                <Row>
                  <Form.Group className="mb-3" controlId="formEmail">
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
                  <Form.Group className="mb-3" controlId="formNombreLugar">
                    <Form.Label>Ingrese nombre del lugar</Form.Label>
                    <Form.Control type="email" placeholder="Nombre del lugar" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formDireccion">
                    <Form.Label>Ingrese Dirección</Form.Label>
                    <Form.Control type="email" placeholder="Dirección" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCalle">
                    <Form.Label>Ingrese calle</Form.Label>
                    <Form.Control type="email" placeholder="Calle" />
                  </Form.Group>
                </Row>
                <Row className="formNombre">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId=""
                    className="formNombre"
                  >
                    <InputGroup >
                      <InputGroup.Text id="inputGroupPrepend">
                        Entre calle
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Calle"
                        className="cuadroTextNombre"
                        aria-describedby="inputGroupPrepend"
                        name="Calle"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    md="4"
                    
                    className="position-relative"
                  ></Form.Group>

                  <Form.Group
                    className="formUsuario"
                    as={Col}
                    md="4"
                    controlId="ValidacionUser"
                  >
                    <InputGroup>
                      <InputGroup.Text id="inputGroupPrepend">
                        Entre calle
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Calle"
                        className="cuadroTextUsuario"
                        aria-describedby="inputGroupPrepend"
                        name="Calle"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group className="mb-3" controlId="formCalle">
                    <br />
                    <Form.Label>Ingrese calle</Form.Label>
                    <Form.Control type="email" placeholder="Calle" />
                  </Form.Group>
                </Row>

                <Row className="formNombre">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId=""
                    className="formNombre"
                  >
                    <InputGroup >
                      <InputGroup.Text id="inputGroupPrepend">
                        Entre calle
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Calle"
                        className="cuadroTextNombre"
                        aria-describedby="inputGroupPrepend"
                        name="Calle"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId=""
                    className="position-relative"
                  ></Form.Group>

                  <Form.Group
                    className="formUsuario"
                    as={Col}
                    md="4"
                    controlId="ValidacionUser"
                  >
                    <InputGroup >
                      <InputGroup.Text id="inputGroupPrepend">
                        Entre calle
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Calle"
                        className="cuadroTextUsuario"
                        aria-describedby="inputGroupPrepend"
                        name="Calle"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <br />
                <Row className="formNombre">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId=""
                    className="formNombre"
                  >
                    <InputGroup>
                      <InputGroup.Text id="inputGroupPrepend">
                        Nombre
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Nombre"
                        className="cuadroTextNombre"
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
                    controlId=""
                    className="position-relative"
                  >
                    <Form.Control.Feedback tooltip>bien</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="formUsuario"
                    as={Col}
                    md="4"
                    controlId="ValidacionUser"
                  >
                    {/* <Form.Label className='letrasUsuario'>Usuario nuevo</Form.Label> */}
                    <InputGroup>
                      <InputGroup.Text id="inputGroupPrepend">
                        Num.
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Número de teléfono"
                        className="cuadroTextUsuario"
                        aria-describedby="inputGroupPrepend"
                        name="Numero"
                     
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
                    controlId=""
                    className="position-relative"
                  ></Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId=""
                    className="position-relative"
                  ></Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId=""
                    className="position-relative"
                  ></Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Ingrese localidad</Form.Label>
                    <Form.Control type="" placeholder="localidad" />
                  </Form.Group>

                <Buttoon></Buttoon>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Ingrese Asentamiento</Form.Label>
                    <Form.Control type="" placeholder="Asentamiento" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Ingrese Municipio</Form.Label>
                    <Form.Control type="" placeholder="Municipio" />
                  </Form.Group>
                  
                  <br />

                  <Row className="formNombre">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId=""
                    className="formNombre"
                  >
                    <InputGroup >
                      <InputGroup.Text id="inputGroupPrepend">
                        Numero exterior
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Exterior"
                        className="cuadroTextNombre"
                        aria-describedby="inputGroupPrepend"
                        name="Calle"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId=""
                    className="position-relative"
                  ></Form.Group>

                  <Form.Group
                    className="formUsuario"
                    as={Col}
                    md="4"
                    controlId="ValidacionUser"
                  >
                    <InputGroup >
                      <InputGroup.Text id="inputGroupPrepend">
                        Numero interior
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Interior"
                        className="cuadroTextUsuario"
                        aria-describedby="inputGroupPrepend"
                        name="Calle"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>

                <br />

                <Form.Group className="position-relative mb-3">
                  <Form.Label>Selecciona una imagen para tu logo</Form.Label>
                  <Form.Control
                    type="file"
                  
                    name="file"
                   
                  />
                  <Form.Control.Feedback type="DocumentoInvalido" tooltip>
                  <br />
                  <Servicios></Servicios>
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="botonCrear" type="submit" href='/PrincipalProv' >
                  Crear cuenta
                </Button>
              </Form>
         
        
        </div>
      </body>
      <footer></footer>
    </div>
  );
}

export default FormExample;
