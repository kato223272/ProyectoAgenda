import React, { useState } from 'react';
import { Row, Col, Card, Button, Table } from 'react-bootstrap';

function Inicio() {
  // Datos simulados de la base de datos
  const servicesData = [
    { id: 1, name: 'Servicio 1', duration: '1 hora', price: '$50' },
    { id: 2, name: 'Servicio 2', duration: '2 horas', price: '$80' },
    { id: 3, name: 'Servicio 3', duration: '1.5 horas', price: '$60' },
  ];

  const companyInfoData = {
    companyName: 'Nombre de la Empresa',
    serviceType: 'Tipo de Servicio',
    phoneNumber: '+52 961 123 4567',
    email: 'correo@empresa.com',
    bio: 'Somos una empresa dedicada a brindar...',
    address: 'Dirección de la Empresa',
    interiorNumber: '123',
  };

  const workersData = [
    { id: 1, name: 'Trabajador 1', schedule: 'Lun-Vie: 9am-6pm' },
    { id: 2, name: 'Trabajador 2', schedule: 'Lun-Vie: 8am-5pm' },
    { id: 3, name: 'Trabajador 3', schedule: 'Lun-Vie: 10am-7pm' },
  ];

  const [selectedService, setSelectedService] = useState(null);
  const [selectedWorker, setSelectedWorker] = useState(null);

  // Función para generar el PDF con los datos seleccionados
  const handleAgendarCita = () => {
    // Implementar la lógica para generar el PDF con los datos seleccionados
    // ...
    alert('Se agendó la cita correctamente.');
  };

  return (
    <form action="">
      {/* Componente Servicio */}
      <div className="fondoButton">
        {/* Imagen de la empresa */}
        <Card.Img variant="top" src="url_de_la_imagen" alt="Imagen de la empresa" />

        {/* Información de la empresa */}
        <Card.Body>
          <Card.Title className="nombreEmpresaa">{companyInfoData.companyName}</Card.Title>
          <Card.Text>{companyInfoData.serviceType}</Card.Text>
          <Card.Text>{companyInfoData.phoneNumber}</Card.Text>
          <Card.Text>{companyInfoData.email}</Card.Text>
          <Card.Text>{companyInfoData.bio}</Card.Text>
          <Card.Text>{companyInfoData.address}</Card.Text>
          <Card.Text>Número Interior/Exterior: {companyInfoData.interiorNumber}</Card.Text>
        </Card.Body>
      </div>

      {/* Lista de Servicios */}
      <div className="colorServicios">
        <h2 className="letraServicios">SERVICIOS</h2>
      </div>
      <Row>
        {servicesData.map((service) => (
          <Col key={service.id}>
            <div style={{ width: '60%', marginTop: '3%' }} className="fondoButton">
              <br />
              <Card style={{ width: '80%' }} className="cardCompleta">
                <Row>
                  <Col>
                    <Card.Body className="radioButton">
                      <input
                        type="radio"
                        id={`service-${service.id}`}
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id}
                        onChange={() => setSelectedService(service.id)}
                      />
                      <label htmlFor={`service-${service.id}`}>{service.name}</label>
                      <br />
                      <small>Duración: {service.duration}</small>
                      <br />
                      <small>Precio: {service.price}</small>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <br />
            </div>
          </Col>
        ))}
      </Row>

      {/* Horario de Trabajadores */}
      <h2 className="letraServicios">Horario</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Trabajador</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {workersData.map((worker) => (
            <tr key={worker.id}>
              <td>{worker.id}</td>
              <td>{worker.name}</td>
              <td>{worker.schedule}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <Button className="AgendarBoton" variant="outline-primary" onClick={handleAgendarCita}>
        Agendar cita
      </Button>
    </form>
  );
}

export default Inicio;
// si