import React from 'react';
import Footer from '../../ComponentGlobales/Footer.jsx';
import '../css/ListaDeClientes.css';
import { FaClock } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import moment from 'moment'; 


import Navbar from '../components/NavbarProvTodas';

const CustomerTable = () => {

  const customers = [
    {
      id: 1,
      nombre: 'Cliente 1',
      correoElectronico: 'cliente1@mail.com',
      diaCita: '2023-07-25',
      horaCita: '10:00 AM',
      tipoServicio: 'Masaje Relajante',
      duracionServicio: '60 minutos',
      precioServicio: '$50',
    },
    {
      id: 2,
      nombre: 'Cliente 2',
      correoElectronico: 'cliente2@mail.com',
      diaCita: '2023-07-26',
      horaCita: '3:30 PM',
      tipoServicio: 'Corte de Pelo',
      duracionServicio: '30 minutos',
      precioServicio: '$25',
    },
    {
        id: 2,
        nombre: 'Cliente 3',
        correoElectronico: 'cliente2@mail.com',
        diaCita: '2023-07-24',
        horaCita: '3:30 PM',
        tipoServicio: 'Corte de Pelo',
        duracionServicio: '30 minutos',
        precioServicio: '$25',
      },
      {
        id: 2,
        nombre: 'Cliente 4',
        correoElectronico: 'cliente2@mail.com',
        diaCita: '2023-07-20',
        horaCita: '3:30 PM',
        tipoServicio: 'Corte de Pelo',
        duracionServicio: '30 minutos',
        precioServicio: '$25',
      },

  ];
  const sortedCustomers = customers.sort((a, b) => {
    const dateA = moment(`${a.diaCita} ${a.horaCita}`, 'YYYY-MM-DD h:mm A');
    const dateB = moment(`${b.diaCita} ${b.horaCita}`, 'YYYY-MM-DD h:mm A');
    return dateB.diff(dateA); 
  });

  // Función para determinar si la cita ya ha pasado
  const isCitaPasada = (diaCita, horaCita) => {
    const citaDateTime = moment(`${diaCita} ${horaCita}`, 'YYYY-MM-DD h:mm A');
    return citaDateTime.isBefore(moment());
  };

  // Función para mostrar la hora y fecha actual
  const getCurrentDateTime = () => {
    const currentDateTime = moment().format('dddd, D [de] MMMM, h:mm A');
    return currentDateTime;
  };

  return (
    <>
      <Navbar />
      <br /><br />
      <div className='Contenidos'>
        <div className='indication-container'>
          <div className='indicator cita-futura'>
            <div className='circle'></div>
            <span>Cita Futura</span>
          </div>
          <div className='indicator cita-pasada'>
            <div className='circle'></div>
            <span>Cita Pasada</span>
          </div>
        </div>
        <div className='datetime'>
          <IoCalendarOutline className='icon' />
          <span className='date'>{getCurrentDateTime()}</span>
        </div>
        <h2>Lista de Clientes</h2>
        <table className='tablita'>
          <thead>
            <tr>
              <th>Nombre del Cliente</th>
              <th>Correo Electrónico</th>
              <th>Día de la Cita</th>
              <th>Hora de la Cita</th>
              <th>Tipo de Servicio</th>
              <th>Duración del Servicio</th>
              <th>Precio del Servicio</th>
            </tr>
          </thead>
          <tbody>
            {sortedCustomers.map((customer) => (
              <tr
                key={customer.id}
                className={isCitaPasada(customer.diaCita, customer.horaCita) ? 'cita-pasada' : 'cita-futura'}
              >
                <td>{customer.nombre}</td>
                <td>{customer.correoElectronico}</td>
                <td>{customer.diaCita}</td>
                <td>
                  <FaClock className='icon' /> {customer.horaCita}
                </td>
                <td>{customer.tipoServicio}</td>
                <td>{customer.duracionServicio}</td>
                <td>{customer.precioServicio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};
export default CustomerTable;