import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Chart } from 'chart.js/auto';
import '../css/IngresosGenerados.css';
import Footer from '../../ComponentGlobales/Footer.jsx';
import Navbar from '../components/NavbarProvTodas';

const IngresosView = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  // Referencia al canvas para la gráfica
  const chartRef = useRef(null);

  useEffect(() => {
    // Actualizar fecha y hora cada segundo
    const intervalId = setInterval(() => {
      const now = moment().format('DD/MM/YYYY - HH:mm:ss');
      setCurrentDateTime(now);
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Crear la gráfica de barras solo una vez al cargar el componente
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: moment.monthsShort(), // Meses abreviados
        datasets: [
          {
            label: 'Ingresos',
            data: [1000, 1200, 1500, 800, 2000, 1800, 2500, 3000, 2200, 2800, 3200, 4000], // Datos simulados
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
            borderColor: 'rgba(75, 192, 192, 1)', // Color del borde de las barras
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Limpieza de la gráfica cuando el componente se desmonta
    return () => myChart.destroy();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1>Vista de Ingresos</h1>
        <p className="fecha-actual">Fecha y hora actual: {currentDateTime}</p>
       
        <canvas id="ingresosChart" ref={chartRef}></canvas>
        <p className="referencia">Referencia: Esta gráfica muestra los ingresos generados en cada mes del año.</p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default IngresosView;
