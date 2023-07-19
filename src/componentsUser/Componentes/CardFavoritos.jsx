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
  // Supongamos que la información de la base de datos se encuentra en un array llamado "datos" y si cambiala Jeshua
  const datos = [
    {
      nombreEmpresa: 'Empresa 1',
      biografia: 'Biografía de la Empresa 1',
      telefono: '1234567890',
      citaUrl: '/AgendarCitaEmpresa1',
    },
   
    // Agregar más objetos con la información de las demás empresas
  ];

  const renderCards = () => {
    const cards = [];

    for (let i = 0; i < datos.length; i += 4) {
      // Crear una fila para cada grupo de 4 cards
      const filaCards = [];
      for (let j = i; j < i + 4 && j < datos.length; j++) {
        const empresa = datos[j];
        filaCards.push(
          <Col key={j} sm={6} md={3}>
            <div className='cardDiv'>
              <Card>
                <Card.Img variant="top" src={imgg} />
                <Card.Body>
                  <Card.Title>{empresa.nombreEmpresa}</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: '5px' }} /> {empresa.biografia}
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} /> {empresa.telefono}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button className='botonAgendar' variant="primary" href={empresa.citaUrl}>
                      <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px' }} />
                      Agendar cita
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        );
      }

      // Agregar la fila de cards a la lista de cards
      cards.push(<Row key={i}>{filaCards}</Row>);
    }

    return cards;
  };

  return (
    <form action="">
      <div className="container-fluid">{renderCards()}</div>
    </form>
  );
}

export default Inicio;
