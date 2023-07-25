import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImagenRosa from './img/ImagenRosa.jpg';
import ImagenVerde from './img/ImagenVerde.jpg';
import './css/carousel.css';

function CarouselComponent() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 imagen-carousel"
            src={ImagenRosa}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3 className="titulo" style={{ color: '#36947f' }}>Descubre Nuestros Servicios</h3>
          <p className="descripcion" style={{ color: '#000' }}>Explora nuestra amplia gama de servicios para encontrar el que mejor se ajuste a tus necesidades.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 imagen-carousel"
            src={ImagenVerde}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3 className="titulo" style={{ color: '#36947f' }}>Agenda Citas Fácilmente</h3>
          <p className="descripcion" style={{ color: '#000' }}>Con un simple click, podrás agendar tus citas de manera rápida y conveniente.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
