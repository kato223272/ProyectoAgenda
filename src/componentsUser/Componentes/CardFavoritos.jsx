import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhone, faBook } from '@fortawesome/free-solid-svg-icons'; // Iconos de Font Awesome
import imgg from '../../ComponentGlobales/img/spa.jpeg';
import '../css/Favoritos.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Inicio() {
  return (
    <form action="">
      <div>
        <Row>
          <Col>
            <div className='cardDiv' style={{ padding: '5%', textAlign: 'center' }}>
              <Card style={{ width: '25%' }}>
                <Card.Img variant="top" src={imgg} />
                <Card.Body>
                  <Card.Title>Nombre de la empresa</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: '5px' }} /> Biografía
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} /> Número de teléfono
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button className='botonAgendar' variant="primary" href='/AgendarCita'>
                      <FontAwesomeIcon  icon={faCalendarAlt} style={{ marginRight: '5px' }} />
                      Agendar cita
                    </Button>
                  </div>
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
