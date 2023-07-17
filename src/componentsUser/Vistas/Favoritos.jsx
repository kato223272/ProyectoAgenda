import React from 'react';
import Navbar from '../Componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardFavoritos from '../Componentes/CardFavoritos'

function Inicio() {
  return (
    <form action="">
      <Navbar />
      <br />
     <CardFavoritos></CardFavoritos>
    </form>
  );
}

export default Inicio;
