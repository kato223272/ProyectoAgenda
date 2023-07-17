import React, { useState } from 'react';
import Navbar from '../Componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../../ComponentGlobales/carousel';
import Card from '../../ComponentGlobales/CardsUser';
import '../css/Principal.css';

function Inicio() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleScroll = () => {
    const carouselElement = document.getElementById('carousel');
    const cardElement = document.getElementById('card');

    if (carouselElement) {
      const carouselPosition = carouselElement.getBoundingClientRect().top;
      setShowCarousel(carouselPosition < window.innerHeight * 0.7); // Adjust the threshold value as needed
    }

    if (cardElement) {
      const cardPosition = cardElement.getBoundingClientRect().top;
      setShowCard(cardPosition < window.innerHeight * 0.7); // Adjust the threshold value as needed
    }
  };

  // Attach the scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <form action="">
      <Navbar />
      <br />
      <div id="carousel" className={`appear-fade-up ${showCarousel ? 'visible' : ''}`}>
        <Carousel />
      </div>
      <br />
      <br />
      <div id="card" className={`appear-fade-right ${showCard ? 'visible' : ''}`}>
        <Card />
      </div>
    </form>
  );
}

export default Inicio;
