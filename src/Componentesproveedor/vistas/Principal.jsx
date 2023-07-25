import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavbarProvTodas';
import Card from '../components/Card';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { format, startOfWeek, endOfWeek, isMonday } from 'date-fns';
import Footer from '../../ComponentGlobales/Footer.jsx';
import '../css/principal.css';

function Principal() {
  // Datos de disponibilidad simulados (algunas horas ocupadas) para el horario general
  const disponibilidadGeneral = [
    { dia: 'Lunes', horas: ['08:00', '09:00', '10:00', '13:00'] },
    { dia: 'Martes', horas: ['09:00', '10:00', '11:00'] },
    { dia: 'Miércoles', horas: ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00'] },
    { dia: 'Jueves', horas: ['08:00', '09:00', '10:00'] },
    { dia: 'Viernes', horas: ['10:00', '11:00', '12:00', '13:00'] },
  ];

  // Datos de disponibilidad simulados (algunas horas ocupadas) para los trabajadores
  const disponibilidadTrabajadores = [
    { nombre: 'Trabajador 1', dia: 'Lunes', horas: ['08:00', '09:00', '11:00', '12:00'] },
    { nombre: 'Trabajador 2', dia: 'Martes', horas: ['09:00', '10:00', '12:00'] },
    { nombre: 'Trabajador 3', dia: 'Miércoles', horas: ['08:00', '10:00', '14:00'] },
    { nombre: 'Trabajador 4', dia: 'Jueves', horas: ['08:00', '10:00', '11:00'] },
    { nombre: 'Trabajador 5', dia: 'Viernes', horas: ['10:00', '12:00', '13:00'] },
  ];

  // Obtener la fecha actual
  const fechaActual = new Date();

  // Calcular las fechas de inicio y fin de la semana actual
  const inicioSemana = startOfWeek(fechaActual, { weekStartsOn: 1 }); // Lunes como inicio de semana
  const finSemana = endOfWeek(fechaActual, { weekStartsOn: 1 }); // Domingo como fin de semana

  // Formatear las fechas
  const fechaInicioTexto = format(inicioSemana, 'dd/MM/yyyy');
  const fechaFinTexto = format(finSemana, 'dd/MM/yyyy');

  const [disponibilidadGeneralState, setDisponibilidadGeneralState] = useState(disponibilidadGeneral);
  const [disponibilidadTrabajadoresState, setDisponibilidadTrabajadoresState] = useState(disponibilidadTrabajadores);

  useEffect(() => {
    // Verificar si es lunes para actualizar la disponibilidad general
    if (isMonday(fechaActual)) {
      // Datos de disponibilidad general actualizados para una nueva semana (algunas horas ocupadas)
      const nuevaDisponibilidadGeneral = [
        { dia: 'Lunes', horas: ['08:00', '09:00', '10:00', '11:00', '12:00'] },
        { dia: 'Martes', horas: ['09:00', '10:00', '11:00', '12:00'] },
        { dia: 'Miércoles', horas: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'] },
        { dia: 'Jueves', horas: ['08:00', '09:00', '10:00', '11:00'] },
        { dia: 'Viernes', horas: ['10:00', '11:00', '12:00', '13:00', '14:00'] },
      ];

      setDisponibilidadGeneralState(nuevaDisponibilidadGeneral);
    }
  }, [fechaActual]);

  return (
    <div>
      <Navbar />
      <br />
      <Card />
      <br />
      <div className="division"></div>
      <br />
      <div className="horario-header">
        <h5 className="LetraHorario">
          <AiOutlineClockCircle className="icono-horario" /> Horario disponibilidad general
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
            {disponibilidadGeneralState.map((item) => (
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

      <br></br><br></br>

      <div className="division"></div>

      <div className="horario-header">
        <h5 className="LetraHorario">
          <AiOutlineClockCircle className="icono-horario" /> Horario disponibilidad trabajadores
        </h5>
        <div className="fecha-semana">
          <p>
            {fechaInicioTexto} - {fechaFinTexto}
          </p>
        </div>
      </div>

      {disponibilidadTrabajadoresState.map((trabajador) => (
        <div key={trabajador.nombre}>
          <h6>{trabajador.nombre}</h6>
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
                <tr>
                  <td>{trabajador.dia}</td>
                  <td className={trabajador.horas.includes('08:00') ? 'ocupado' : ''}></td>
                  <td className={trabajador.horas.includes('09:00') ? 'ocupado' : ''}></td>
                  <td className={trabajador.horas.includes('10:00') ? 'ocupado' : ''}></td>
                  <td className={trabajador.horas.includes('11:00') ? 'ocupado' : ''}></td>
                  <td className={trabajador.horas.includes('12:00') ? 'ocupado' : ''}></td>
                  <td className={trabajador.horas.includes('13:00') ? 'ocupado' : ''}></td>
                  <td className={trabajador.horas.includes('14:00') ? 'ocupado' : ''}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
        </div>
      ))}

      <Footer></Footer>
    </div>
  );
}

export default Principal;
