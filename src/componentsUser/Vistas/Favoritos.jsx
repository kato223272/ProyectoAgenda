import Navbar from '../Componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgg from '../../ComponentGlobales/img/spa.jpeg';
import '../css/Favoritos.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Inicio (){
    return(
        <form action=""> 
            <Navbar></Navbar>
         <br/>
         <div>
      <Row>

      <Col>
    <div className='cardDiv' style={{padding:'5%'}}>
    <Card style={{ width: '25%' }}>
      <Card.Img variant="top" src={imgg} />
      <Card.Body>
        <Card.Title>Nombre de la empresa</Card.Title>
        <Card.Text>
          Biografia
        </Card.Text>
        <Card.Text>Num. télefono</Card.Text>
        <Button className='botonAgendar' variant="primary">Agendar cita</Button>
      </Card.Body>
    </Card>
    </div>
    </Col>

    </Row>
   </div>
    
        </form>
    );
   



}
export default Inicio;