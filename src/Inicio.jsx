import Navbar from './componentesNoRegistrado/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './ComponentGlobales/carousel';
import CardUser from './ComponentGlobales/CardsUser';
import './componentsUser/css/inicio.css';
function Inicio (){
    return(
        <div className='Fondo'>
             <form  action="">
            <header>
            <Navbar></Navbar>
            </header>
       <body>
       <br />
       <Carousel></Carousel>
       <br /><br />
       <CardUser></CardUser>
       </body>
       <footer></footer>
     
        </form>
        </div>
    );
}
export default Inicio;
