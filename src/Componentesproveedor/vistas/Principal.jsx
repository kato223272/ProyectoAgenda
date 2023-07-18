import React from 'react';
import Navbar from '../components/NavbarProvTodas';
import Card from '../components/Card';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { format, startOfWeek, endOfWeek } from 'date-fns'; // Importamos las funciones de date-fns
import '../css/principal.css';

function Principal() {
  // Datos de disponibilidad simulados (algunas horas ocupadas)
  const disponibilidad = [
    { dia: 'Lunes', horas: ['08:00', '09:00', '10:00', '13:00'] },
    { dia: 'Martes', horas: ['09:00', '10:00', '11:00'] },
    { dia: 'Miércoles', horas: ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00'] },
    { dia: 'Jueves', horas: ['08:00', '09:00', '10:00'] },
    { dia: 'Viernes', horas: ['10:00', '11:00', '12:00', '13:00'] },
  ];

  // Obtener la fecha actual
  const fechaActual = new Date();

  // Calcular las fechas de inicio y fin de la semana actual
  const inicioSemana = startOfWeek(fechaActual, { weekStartsOn: 1 }); // Lunes como inicio de semana
  const finSemana = endOfWeek(fechaActual, { weekStartsOn: 1 }); // Domingo como fin de semana

  // Formatear las fechas
  const fechaInicioTexto = format(inicioSemana, 'dd/MM/yyyy');
  const fechaFinTexto = format(finSemana, 'dd/MM/yyyy');

  return (
    <div>
      <Navbar />
      <br />
      <Card />
      <div className="horario-header">
        <h5 className="LetraHorario">
          <AiOutlineClockCircle className="icono-horario" /> Horario disponibilidad
        </h5>
        <div className="fecha-semana">
          <p>
            {fechaInicioTexto} - {fechaFinTexto}
          </p>
        </div>
      </div>
      <div className='horario-table'>
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>08:00</th>
              <th>09:00</th>
              <th>10:00</th>
              <th>11:00</th>
              <th>12:00</th>
              <th>13:00</th>
              <th>14:00</th>
            </tr>
          </thead>
          <tbody>
            {disponibilidad.map((item) => (
              <tr key={item.dia}>
                <td>{item.dia}</td>
                <td className={item.horas.includes('08:00') ? 'ocupado' : ''}></td>
                <td className={item.horas.includes('09:00') ? 'ocupado' : ''}></td>
                <td className={item.horas.includes('10:00') ? 'ocupado' : ''}></td>
                <td className={item.horas.includes('11:00') ? 'ocupado' : ''}></td>
                <td className={item.horas.includes('12:00') ? 'ocupado' : ''}></td>
                <td className={item.horas.includes('13:00') ? 'ocupado' : ''}></td>
                <td className={item.horas.includes('14:00') ? 'ocupado' : ''}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Principal;
