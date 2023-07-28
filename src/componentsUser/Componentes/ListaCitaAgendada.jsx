import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faTimesCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import { PDFViewer, PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import '../css/ListaCitaAgendada.css';

const ListaCitasAgendadas = () => {
  const [citasAgendadas, setCitasAgendadas] = useState([
    {
      empresa: 'Empresa 1',
      tipoServicio: 'Consulta médica',
      encargado: 'Dr. Juan Pérez',
      dia: '2023-07-22',
      hora: '15:00',
      duracionHoras: 1,
      cantidadPagar: '$50',
      pdfUrl: 'url-del-pdf-empresa-1',
      telefono: '123-456-7890',
    },
  
  ]);

  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString('default', { hour: 'numeric', minute: 'numeric' }));

  const obtenerHoraActual = () => {
    const interval = setInterval(() => {
      setHoraActual(new Date().toLocaleTimeString('default', { hour: 'numeric', minute: 'numeric' }));
    }, 60000);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    obtenerHoraActual();
  }, []);

  const handleDownloadPDF = (pdfUrl) => {
    console.log(`Descargando PDF desde: ${pdfUrl}`);
  };


  const handleCancelarCita = (empresa, dia, hora) => {
    const fechaCita = new Date(dia);
    fechaCita.setHours(parseInt(hora.split(':')[0]), parseInt(hora.split(':')[1]));

    const tiempoDiferencia = fechaCita.getTime() - new Date().getTime();
    const diasAnticipacion = tiempoDiferencia / (1000 * 3600 * 24);

    if (diasAnticipacion >= 3) {
      Swal.fire({
        title: '¿Estás seguro de cancelar la cita?',
        text: `Cancelar cita para ${empresa} el día ${dia} a las ${hora}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Sí, cancelar',
        cancelButtonText: 'No, mantener cita',
      }).then((result) => {
        if (result.isConfirmed) {
          const citasActualizadas = citasAgendadas.filter(
            (cita) => cita.empresa !== empresa || cita.dia !== dia || cita.hora !== hora
          );
          setCitasAgendadas(citasActualizadas);

          Swal.fire({
            title: 'Cita Cancelada',
            text: `Cita para ${empresa} el día ${dia} a las ${hora} ha sido cancelada.`,
            icon: 'success',
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'La cita solo puede cancelarse con al menos 3 días de anticipación.',
        icon: 'error',
      });
    }
  };

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
      textAlign: 'center',
    },
    companyInfoSection: {
      marginBottom: 20,
    },
    companyName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    companyContact: {
      fontSize: 14,
      marginBottom: 5,
    },
    companyAddress: {
      fontSize: 14,
      marginBottom: 5,
    },
    companyInfoLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 3,
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
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      borderBottomStyle: 'solid',
      marginBottom: 10,
    },
    dateTimeLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
    },
    dateTimeValue: {
      fontSize: 14,
    },
  });
  


  const PDFDocumento = ({ cita }) => (
    <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
      <Text style={styles.header}>Comprobante de Cita</Text>
          <View style={styles.divider} />
        <View style={styles.companyInfoSection}>
          <Text style={styles.companyName}>Nombre de la empresa: {cita.empresa}</Text>
          <Text style={styles.companyContact}>Teléfono: {cita.telefono}</Text>
          
        </View>
        <View style={styles.divider} />
        <Text style={styles.header}>Información de la Cita:</Text>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceName}>Tipo de Servicio:</Text>
          <Text style={styles.serviceName}>{cita.tipoServicio}</Text>
        </View>
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceDuration}>Duración del Servicio:</Text>
          <Text style={styles.serviceDuration}>{cita.duracionHoras} horas</Text>
        </View>
        <View style={styles.serviceInfo}>
          <Text style={styles.servicePrice}>Precio:</Text>
          <Text style={styles.servicePrice}>{cita.cantidadPagar}</Text>
        </View>
     
        <Text style={styles.dateTimeLabel}>Fecha y Hora de la Cita:</Text>
        <Text style={styles.dateTimeValue}>{cita.dia} - {cita.hora}</Text>
      </View>
    </Page>
  </Document>
  );

  const handleGeneratePDF = (cita) => {
    return (
      <PDFDownloadLink document={<PDFDocumento cita={cita} />} fileName="detalle_cita.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generando PDF...' : <FontAwesomeIcon icon={faFilePdf} className="btn-icon" />
        }
      </PDFDownloadLink>
    );
  };

  const handleGeneratePDFLink = (cita) => {
    return (
      <PDFDownloadLink document={<PDFDocumento cita={cita} />} fileName="detalle_cita.pdf">
        {({ loading }) => (loading ? 'Generando PDF...' : <FontAwesomeIcon icon={faFilePdf} className="btn-icon" />)}
      </PDFDownloadLink>
    );
  };

  return (
    <div className="lista-citas-container">
      <div className="fecha-hora-actual">
        <FontAwesomeIcon icon={faClock} style={{ marginRight: '1%' }} className="reloj-icono" />
        <span>{`Fecha actual: ${new Date().toLocaleDateString()} - Hora: ${horaActual}`}</span>
      </div>
      <h2>Lista de Citas Agendadas</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="center">Empresa</th>
              <th className="center">Tipo de Servicio</th>
              <th className="center">Encargado del Servicio</th>
              <th className="center">Teléfono de Contacto</th>
              <th className="center">Día</th>
              <th className="center">Hora</th>
              <th className="center">Duración (horas)</th>
              <th className="center">Cantidad a Pagar</th>
              <th className="center">PDF</th>
              <th className="center">Cancelar Cita</th>
            </tr>
          </thead>
          <tbody>
            {citasAgendadas.map((cita, index) => (
              <tr key={index}>
                <td>{cita.empresa}</td>
                <td>{cita.tipoServicio}</td>
                <td>{cita.encargado}</td>
                <td>{cita.telefono}</td>
                <td>{cita.dia}</td>
                <td>{cita.hora}</td>
                <td>{cita.duracionHoras}</td>
                <td>{cita.cantidadPagar}</td>
                <td>
                {handleGeneratePDF(cita)}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger cancelar-button"
                    onClick={() => handleCancelarCita(cita.empresa, cita.dia, cita.hora)}
                  >
                    <FontAwesomeIcon icon={faTimesCircle} className="btn-icon" />
                    Cancelar Cita
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mostrar la vista previa del PDF utilizando PDFViewer */}
      {/* <div style={{ marginTop: '20px' }}>
        <PDFViewer style={{ width: '100%', height: '500px' }}>
          <PDFDocumento cita={citasAgendadas[0]} />
        </PDFViewer>
      </div> */}
    </div>
  );
};

export default ListaCitasAgendadas;
