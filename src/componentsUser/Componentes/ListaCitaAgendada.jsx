import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faTimesCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import '../css/ListaCitaAgendada.css';

const ListaCitasAgendadas = () => {
  const [citasAgendadas, setCitasAgendadas] = useState([
    
    {
      empresa: 'Empresa 1',
      tipoServicio: 'Consulta médica',
      encargado: 'Dr. Juan Pérez',
      dia: '2023-07-20',
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

  return (
    <div className="lista-citas-container">
      <div className="fecha-hora-actual">
        <FontAwesomeIcon icon={faClock} style={{ marginRight:"1%"}} className="reloj-icono" />
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
                  <button className="btn btn-primary pdf-button" onClick={() => handleDownloadPDF(cita.pdfUrl)}>
                    <FontAwesomeIcon icon={faFilePdf} className="btn-icon" />
                    Descargar PDF
                  </button>
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
    </div>
  );
};

export default ListaCitasAgendadas;
