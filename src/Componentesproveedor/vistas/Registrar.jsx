import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import Navbar from "../components/NavbarCrear";

function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    Nombre: yup.string().required(),
    Numero: yup.string().required(),
    file: yup.mixed().required(),
  });

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <body>
        <div className="RegistrarDatos">
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              Nombre: "",
              Numero: "",
              file: null,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
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
                    controlId="validationFormik101"
                    className="formNombre"
                  >
                    <InputGroup hasValidation>
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
                    controlId="validationFormik102"
                    className="position-relative"
                  ></Form.Group>

                  <Form.Group
                    className="formUsuario"
                    as={Col}
                    md="4"
                    controlId="ValidacionUser"
                  >
                    <InputGroup hasValidation>
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
                    controlId="validationFormik101"
                    className="formNombre"
                  >
                    <InputGroup hasValidation>
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
                    controlId="validationFormik102"
                    className="position-relative"
                  ></Form.Group>

                  <Form.Group
                    className="formUsuario"
                    as={Col}
                    md="4"
                    controlId="ValidacionUser"
                  >
                    <InputGroup hasValidation>
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
                    controlId="validationFormik101"
                    className="formNombre"
                  >
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        Nombre
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Nombre"
                        className="cuadroTextNombre"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.Nombre}
                        onChange={handleChange}
                        isValid={touched.Nombre && !errors.Nombre}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.Nombre}
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

                  <Form.Group
                    className="formUsuario"
                    as={Col}
                    md="4"
                    controlId="ValidacionUser"
                  >
                    {/* <Form.Label className='letrasUsuario'>Usuario nuevo</Form.Label> */}
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        Num.
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Número de teléfono"
                        className="cuadroTextUsuario"
                        aria-describedby="inputGroupPrepend"
                        name="Numero"
                        value={values.Numero}
                        onChange={handleChange}
                        isInvalid={!!errors.Numero}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.Numero}
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
                  ></Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik104"
                    className="position-relative"
                  ></Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationFormik105"
                    className="position-relative"
                  ></Form.Group>
                </Row>
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Selecciona una imagen para tu logo</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                  />
                  <Form.Control.Feedback type="DocumentoInvalido" tooltip>
                    {errors.file}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="botonCrear" type="submit">
                  Crear cuenta
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}

export default FormExample;
