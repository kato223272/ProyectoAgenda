import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './componentsUser/Componentes/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Inicio'
import LoginUsuario from'./componentsUser/Vistas/Login.jsx';
import PrincipalUsuario from './componentsUser/Vistas/Principal';
import CitasAgendadasUser from './componentsUser/Vistas/CitasAgendadas';
import Favoritos from './componentsUser/Vistas/Favoritos.jsx'
import Historial from './componentsUser/Vistas/Historial.jsx'
import LoginProv from './Componentesproveedor/vistas/LoginProv.jsx'

function App() {
  return (
   
    <Router>
    <Routes>
      {/* vista principal */}
      <Route path="/" element={<Inicio/>}/>
      {/* Vista Iniciar sesion */}
      <Route path="/loginUser" element={<LoginUsuario/>}/>
      <Route path="/loginProv" element={<LoginProv/>}/>
      {/* vista usuario */}
      <Route path="/PrincipalUser" element={<PrincipalUsuario/>}/>
      <Route path="/CitasAgendadasUser" element={<CitasAgendadasUser/>}/>
      <Route path="/Favoritos" element={<Favoritos/>}/>
      <Route path="/Historial" element={<Historial/>}/>
      {/* vista proveedor */}
    </Routes>
  </Router>
  
  );
}

export default App;
