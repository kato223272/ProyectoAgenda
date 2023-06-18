import Carousel from 'react-bootstrap/Carousel';
import ImagenRosa from'./img/ImagenRosa.jpg';
import ImagenVerde from'./img/ImagenVerde.jpg';
import './css/carousel.css';
function carousel() {
  return (
    <Carousel className='carouseel'>
      <Carousel.Item>
        <img
        id='ImagenRosa'
          className="d-block"
          src={ImagenRosa}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Carvaz</h3>
          <p>Busca el servicio que se ajuste mejor a ti.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id='ImagenRosa'
          className="d-block"
          src={ImagenVerde}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Carvaz</h3>
          <p>Agenda citas con un solo click.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default carousel;