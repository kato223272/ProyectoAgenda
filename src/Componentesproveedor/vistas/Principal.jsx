import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavbarProvTodas';
import Card from '../components/Card';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { format, startOfWeek, endOfWeek, isMonday } from 'date-fns';
import Footer from '../../ComponentGlobales/Footer.jsx';
import '../css/principal.css';
import HorarioEmpresa from '../components/HorarioEmpresa';

function Principal() {
  const [objEmpresa, setObjEmpresa] = useState([]);
  const [disponibilidadGeneral, setDisponibilidadGeneral] = useState([]);
  // Datos de disponibilidad simulados (algunas horas ocupadas) para los trabajadores
  const disponibilidadTrabajadores = [
    { nombre: 'Trabajador 1', dia: 'Lunes', horas: ['08:00', '09:00', '11:00', '12:00'] },
    { nombre: 'Trabajador 2', dia: 'Martes', horas: ['09:00', '10:00', '12:00'] },
    { nombre: 'Trabajador 3', dia: 'Miércoles', horas: ['08:00', '10:00', '14:00'] },
    { nombre: 'Trabajador 4', dia: 'Jueves', horas: ['08:00', '10:00', '11:00'] },
    { nombre: 'Trabajador 5', dia: 'Viernes', horas: ['10:00', '12:00', '13:00'] },
  ];
  
  const [disponibilidadTrabajadoresState, setDisponibilidadTrabajadoresState] = useState(disponibilidadTrabajadores);
  // Obtener la fecha actual
  const fechaActual = new Date();

  // Calcular las fechas de inicio y fin de la semana actual
  const inicioSemana = startOfWeek(fechaActual, { weekStartsOn: 1 }); // Lunes como inicio de semana
  const finSemana = endOfWeek(fechaActual, { weekStartsOn: 1 }); // Domingo como fin de semana

  // Formatear las fechas
  const fechaInicioTexto = format(inicioSemana, 'dd/MM/yyyy');
  const fechaFinTexto = format(finSemana, 'dd/MM/yyyy');


  useEffect(() => {
    const storedEmpresa = localStorage.getItem("Empresa");
    if (storedEmpresa) {
      const obj = JSON.parse(storedEmpresa);
      setObjEmpresa(obj);
      if(obj.horario){
        var horas = [
          {
          hora: [],
          dia: "Lunes",
          estatus: []
          },
          {
          hora: [],
          dia: "Martes",
          estatus: []
          },
          {
          hora: [],
          dia: "Miércoles",
          estatus: []
          },
          {
          hora: [],
          dia: "Jueves",
          estatus: []
          },
          {
          hora: [],
          dia: "Viernes",
          estatus: []
          },
          {
          hora: [],
          dia: "Sábado",
          estatus: []
          },
          {
          hora: [],
          dia: "Domingo",
          estatus: []
          },
        ];
        for(let i=1; i<obj.horario.length; i++){
          if(obj.horario[i-1].hora !== obj.horario[i].hora){
            var horaaux = obj.horario[i-1].hora;
            horaaux = horaaux.substr(0, horaaux.length-3);
            switch(obj.horario[i-1].dia){
              case "Lunes":
                horas[0].hora.push(horaaux);
                horas[0].estatus.push(obj.horario[i-1].estatus);
                break;
              case "Martes":
                horas[1].hora.push(horaaux);
                horas[1].estatus.push(obj.horario[i-1].estatus);
                break;
              case "Miércoles":
                horas[2].hora.push(horaaux);
                horas[2].estatus.push(obj.horario[i-1].estatus);
                break;
              case "Jueves":
                horas[3].hora.push(horaaux);
                horas[3].estatus.push(obj.horario[i-1].estatus);
                break;
              case "Viernes":
                horas[4].hora.push(horaaux);
                horas[4].estatus.push(obj.horario[i-1].estatus);
                break;
              case "Sábado":
                horas[5].hora.push(horaaux);
                horas[5].estatus.push(obj.horario[i-1].estatus);
                break;
              case "Domingo":
                horas[6].hora.push(horaaux);
                horas[6].estatus.push(obj.horario[i-1].estatus);
                break;
            }            
          }
        }
        setDisponibilidadGeneral(horas);
      }
      else{
        setDisponibilidadGeneral([
          {
            hora: "08:00",
            dia: "Lunes",
            estatus: "Libre"
          }
        ]);
      }
    }
    // Verificar si es lunes para actualizar la disponibilidad general
    if (isMonday(fechaActual)) {
      // Datos de disponibilidad general actualizados para una nueva semana (algunas horas ocupadas)
      const nuevaDisponibilidadGeneral = [
      ];

      setDisponibilidadGeneral(nuevaDisponibilidadGeneral);
    }
  }, []);

  return (
    <div className="principal-page">
      <Navbar />
      <br />
      <Card objEmpresa={objEmpresa} />
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

      <HorarioEmpresa horarioEmpresa={disponibilidadGeneral} />

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
