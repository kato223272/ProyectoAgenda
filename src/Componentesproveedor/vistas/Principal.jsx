import Navbar from '../components/NavbarProvTodas'
import Card from '../components/Card'
import '../css/principal.css'
function Principal(){
    return(
<div>
<Navbar></Navbar>
<br />
<Card></Card>

 <h5 classname='LetraHorario'>Horario disponibilidad</h5>
</div>
 

    )
}
export default Principal;