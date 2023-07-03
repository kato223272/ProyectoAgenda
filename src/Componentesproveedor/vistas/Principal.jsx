import Navbar from '../components/NavbarProvTodas'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Principal(){
    return(
<div>
<Navbar></Navbar>
<Container>
 <Row>
   <Col>
     <div  style={{ width: "80%", marginTop:"3%" }} className="fondoCard">
       <br />
       <Card style={{ width: "80%" }} className="cardCompleta">
         <Row>
           <Col>
           <br />
             <Container>
               <Image className="ImagenProvee" src={""} rounded />
             </Container>
             <br />
           </Col>
           <Col>
             <Card.Body>
               <Card.Title className="nombreEmpresaa" id="nombreEmpresa">
                 Nombre de la empresa
               </Card.Title>
               <Card.Subtitle id="especialidad" className="">
                 Especialidad
               </Card.Subtitle>
               <br />
               <Card.Text>Biografia</Card.Text>
               <Card.Text>Estado</Card.Text>
               <Card.Text>+52 9611234567</Card.Text>
               <Card.Text>ID</Card.Text>
              
             </Card.Body>
           </Col>
         </Row>
       </Card>
       <br />
     </div>
   </Col>
 </Row>
 </Container>
 <h5 classname='LetraHorario'>Horario disponibilidad</h5>
</div>
 

    )
}
export default Principal;