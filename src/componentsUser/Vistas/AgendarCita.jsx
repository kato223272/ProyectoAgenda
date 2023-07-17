import "bootstrap/dist/css/bootstrap.min.css";
import Servicio from "../../Componentesproveedor/components/Card.jsx";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../css/AgendarCita.css";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function Inicio() {
  return (
    <form action="">

    <Servicio></Servicio>
    <br />
    <div className="colorServicios">
        <h2 className="letraServicios">SERVICIOS</h2>
    </div>
   <Row>
<Col>
  <div  style={{ width: "60%", marginTop:"3%" }} className="fondoButton">
    <br />
    <Card style={{ width: "80%" }} className="cardCompleta">
      <Row>
        <Col>
        <br />
         
          <br />
        </Col>
        <Col>
          <Card.Body className="radioButton">
          {['radio'].map((type) => (
  <div key={`default-${type}`} className="mb-3">
    <Form.Check 
      type={type}
      id={`default-${type}`}
      label={`default ${type}`}
    />
  </div>
))}
 {['radio'].map((type) => (
  <div key={`default-${type}`} className="mb-3">
    <Form.Check 
      type={type}
      id={`default-${type}`}
      label={`default ${type}`}
    />
  </div>
))}
           
          </Card.Body>
        </Col>
      </Row>
    </Card>
    <br />
  </div>
</Col>
</Row>
<h2 className="letraServicios">Horario</h2>
<Table striped bordered hover size="sm">

      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          
          
        </tr>
      </tbody>
    </Table>
    <br></br>
    <Button className="AgendarBoton" variant="outline-primary">Agendar cita</Button>{' '}
    </form>
  );
}
export default Inicio;

