import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import '../css/AgendarCita.css';

function Inicio() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [weeklyViewStart, setWeeklyViewStart] = useState(moment().startOf('week').add(7, 'hours').toDate());
  const [weeklyViewEnd, setWeeklyViewEnd] = useState(moment().endOf('week').add(20, 'hours').toDate());
  const [viewMode, setViewMode] = useState(Views.WEEK);
  const [currentDate, setCurrentDate] = useState(moment().toDate());

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
    address: 'Dirección de la Empresa',
    interiorNumber: '123',
  };

  const localizer = momentLocalizer(moment);

  const handleAgendarCita = () => {
    if (selectedDate && selectedStartTime && selectedEndTime && selectedService) {
    } else {
      alert('Por favor, selecciona una fecha, hora de inicio, hora final y servicio para agendar la cita.');
    }
  };

  const handleCalendarNavigate = (date, view, action) => {
    setViewMode(view);
    setCurrentDate(date);
  };

  const CustomToolbar = ({ label, onView, onNavigate }) => (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onView(Views.DAY)}>
          Día
        </button>
        <button type="button" onClick={() => onView(Views.WEEK)}>
          Semana
        </button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate('PREV')}>
          Anterior
        </button>
        <button type="button" onClick={() => onNavigate('NEXT')}>
          Siguiente
        </button>
      </span>
    </div>
  );

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM',
    '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const TimeSelection = ({ label, value, onChange }) => (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="">Seleccione una hora</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );

  const generatePdfDocument = () => {
    const selectedDateTimeStart = moment(selectedStartTime, 'hh:mm A').format('h:mm A');
    const selectedDateTimeEnd = moment(selectedEndTime, 'hh:mm A').format('h:mm A');
    const selectedDateTime = moment(selectedDate).format('MMMM Do YYYY');

    const styles = StyleSheet.create({
      page: {
        fontFamily: 'Helvetica',
        padding: 30,
      },
      section: {
        marginBottom: 20,
      },
      header: {
        fontSize: 24,
        marginBottom: 10,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderBottomStyle: 'solid',
        marginBottom: 10,
      },
      serviceInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      serviceDuration: {
        fontSize: 14,
      },
      servicePrice: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      dateTimeLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
      },
      dateTimeValue: {
        fontSize: 14,
      },
      companyInfoSection: {
        marginBottom: 20,
      },
      companyInfoHeader: {
        fontSize: 24,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderBottomStyle: 'solid',
      },
      companyInfoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      companyName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      companyAddress: {
        fontSize: 14,
      },
      companyContact: {
        fontSize: 14,
        marginBottom: 5,
      },
    });

    const pdfContent = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Comprobante de Cita</Text>
            <View style={styles.companyInfoSection}>
              <Text style={styles.companyInfoHeader}>Información de la Empresa:</Text>
              <Text style={styles.companyInfoLabel}>Nombre de la Empresa:</Text>
              <Text style={styles.companyName}>{companyInfoData.companyName}</Text>
              <Text style={styles.companyInfoLabel}>Tipo de Servicio:</Text>
              <Text>{companyInfoData.serviceType}</Text>
              <Text style={styles.companyInfoLabel}>Teléfono:</Text>
              <Text style={styles.companyContact}>{companyInfoData.phoneNumber}</Text>
              <Text style={styles.companyInfoLabel}>Email:</Text>
              <Text style={styles.companyContact}>{companyInfoData.email}</Text>
              <Text style={styles.companyInfoLabel}>Descripción:</Text>
              <Text>{companyInfoData.bio}</Text>
              <Text style={styles.companyInfoLabel}>Dirección:</Text>
              <Text style={styles.companyAddress}>{companyInfoData.address}</Text>
              <Text style={styles.companyAddress}>Número Interior/Exterior: {companyInfoData.interiorNumber}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Información de la Cita:</Text>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>Servicio Seleccionado:</Text>
              <Text style={styles.serviceName}>{selectedService ? servicesData.find(service => service.id === selectedService)?.name : 'N/A'}</Text>
            </View>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceDuration}>Duración del Servicio:</Text>
              <Text style={styles.serviceDuration}>{selectedService ? servicesData.find(service => service.id === selectedService)?.duration : 'N/A'}</Text>
            </View>
            <View style={styles.serviceInfo}>
              <Text style={styles.servicePrice}>Precio del Servicio:</Text>
              <Text style={styles.servicePrice}>{selectedService ? servicesData.find(service => service.id === selectedService)?.price : 'N/A'}</Text>
            </View>
            <View style={styles.divider} />
            <Text style={styles.dateTimeLabel}>Fecha y Hora de la Cita:</Text>
            <Text style={styles.dateTimeValue}>{selectedDateTime} - {selectedDateTimeStart} a {selectedDateTimeEnd}</Text>
          </View>
        </Page>
      </Document>
    );

    return pdfContent;
  };

  const isButtonDisabled = () => {
    return moment(selectedEndTime, 'hh:mm A').isBefore(moment(selectedStartTime, 'hh:mm A'));
  };
  
  const getPdfLink = () => {
    if (!isButtonDisabled() && selectedDate && selectedStartTime && selectedEndTime && selectedService) {
      return (
        <PDFDownloadLink
          document={generatePdfDocument()}
          fileName={`Cita_${moment(selectedDate).format('YYYY-MM-DD')}.pdf`}
        >
          {({ blob, url, loading, error }) => (
            <Button className="AgendarBoton" variant="outline-primary">
              {`Generar PDF`}
            </Button>
          )}
        </PDFDownloadLink>
      );
    } else {
      return (
        <Button className="AgendarBoton" variant="outline-primary" disabled>
          {`Generar PDF`}
        </Button>
      );
    }
  };

  return (
    <div >
    <form action="" className='ContenidoTodo'>
      <div className="fondoButton">
        
        <Card.Body className="company-card">
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
      <Row className="services-container">
        {servicesData.map((service) => (
          <Col key={service.id}>
            <div className="service-card">
              <Card style={{ width: '100%' }} className="cardCompleta">
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
            </div>
          </Col>
        ))}
      </Row>
      <h2 className="letraServicios">Horario de Servicios</h2>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        views={['day', 'week', 'agenda']}
        defaultView={viewMode}
        defaultDate={currentDate}
        min={weeklyViewStart}
        max={weeklyViewEnd}
        components={{
          toolbar: CustomToolbar,
          agenda: {
            event: () => null,
            time: () => (
              <div className="rbc-agenda-time-cell">
                {availableTimes.map((time) => (
                  <Button
                    key={time}
                    variant={
                      selectedStartTime === time || selectedEndTime === time ? 'primary' : 'outline-primary'
                    }
                    onClick={() => {
                      if (!selectedStartTime) {
                        setSelectedStartTime(time);
                      } else if (!selectedEndTime) {
                        setSelectedEndTime(time);
                      } else {
                        setSelectedStartTime(time);
                        setSelectedEndTime(null);
                      }
                    }}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            ),
          },
        }}
        onSelectEvent={(event) => {
          setSelectedDate(event.start);
          setSelectedStartTime(moment(event.start).format('hh:mm A'));
          setSelectedEndTime(moment(event.end).format('hh:mm A'));
        }}
        onNavigate={handleCalendarNavigate}
      />

      <div className="time-selection-container">
        <TimeSelection
          label="Hora de inicio:"
          value={selectedStartTime}
          onChange={(e) => setSelectedStartTime(e.target.value)}
        />
        <br />
        <TimeSelection
          label="Hora final:"
          value={selectedEndTime}
          onChange={(e) => setSelectedEndTime(e.target.value)}
        />
        <br />
      </div>

      <div className="date-selection-container">
        <label>Fecha de la cita:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()} // Set the minimum date to the current date
        />
      </div>

      <div className="pdf-container">
        {selectedDate && selectedStartTime && selectedEndTime && selectedService && getPdfLink()}
      </div>
    </form>
    </div>
  );
}

export default Inicio;
