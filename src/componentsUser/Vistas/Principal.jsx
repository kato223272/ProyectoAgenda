import Navbar from '../Componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../../ComponentGlobales/carousel';
import Card from '../../ComponentGlobales/CardsUser';
function Inicio (){
    return(
        <form action="">
            <header>
            <Navbar></Navbar>
            </header>
        <body>
        <br />
       <Carousel></Carousel>
       <br /><br />
       <Card></Card>
        </body>
       <footer></footer>
        </form>
    );
   



}
export default Inicio;
