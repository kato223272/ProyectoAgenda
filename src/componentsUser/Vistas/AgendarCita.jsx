import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/AgendarCita.css';

function Inicio() {
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
  const [selectedMonth, setSelectedMonth] = useState(moment().startOf('month').toDate());

  const monthsData = {
    January: {
      days: [
        { date: '2023-01-01', schedule: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'] },
        { date: '2023-01-02', schedule: ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'] },
        // Agregar más días y sus horarios disponibles
      ],
    },
    February: {
      days: [
        // Datos para febrero
      ],
    },
    // Agregar más meses
  };

  const localizer = momentLocalizer(moment);

  const handleAgendarCita = (date, time) => {
    const selectedDateTime = moment(`${date} ${time}`, 'YYYY-MM-DD h:mm A').format('MMMM Do YYYY, h:mm A');
    alert(`Se agendó la cita para ${selectedDateTime} correctamente.`);
  };

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

  const renderAppointmentButtons = () => {
    if (selectedService && selectedWorker) {
      const selectedMonthData = monthsData[moment(selectedMonth).format('MMMM')];
      const selectedDayData = selectedMonthData.days.find((day) => day.date === moment(selectedMonth).format('YYYY-MM-DD'));

      if (selectedDayData) {
        return (
          <div className="appointment-buttons">
            {selectedDayData.schedule.map((time, index) => (
              <Button key={index} variant="primary" onClick={() => handleAgendarCita(selectedMonth, time)}>
                {moment(selectedMonth).format('MMM D, YYYY')} - {time}
              </Button>
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <form action="">
      <div className="fondoButton">
        <Card.Img variant="top" src="url_de_la_imagen" alt="Imagen de la empresa" />
        <Card.Body>
          <Card.Title className="nombreEmpresa">{companyInfoData.companyName}</Card.Title>
          <Card.Text>{companyInfoData.serviceType}</Card.Text>
          <Card.Text>{companyInfoData.phoneNumber}</Card.Text>
          <Card.Text>{companyInfoData.email}</Card.Text>
          <Card.Text>{companyInfoData.bio}</Card.Text>
          <Card.Text>{companyInfoData.address}</Card.Text>
          <Card.Text>Número Interior/Exterior: {companyInfoData.interiorNumber}</Card.Text>
        </Card.Body>
      </div>

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
      <h2 className="letraServicios">Horario de Servicios</h2>
      <Calendar
        localizer={localizer}
        events={[]} // Se vacían los eventos ya que la función getEventsForSelectedMonth fue eliminada
        startAccessor="start"
        endAccessor="end"
        defaultDate={selectedMonth}
        views={['month']}
        onNavigate={(date) => handleMonthChange(date)}
        onSelectEvent={(event) => console.log(event)}
      />

      {renderAppointmentButtons()}

      <br />
      <Button className="AgendarBoton" variant="outline-primary" onClick={() => handleAgendarCita()}>
        Agendar cita
      </Button>
    </form>
  );
}

export default Inicio;
