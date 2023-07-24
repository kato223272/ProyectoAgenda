import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './componentsUser/Componentes/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Inicio'
import LoginUsuario from'./componentsUser/Vistas/Login.jsx';
import PrincipalUsuario from './componentsUser/Vistas/Principal';
import CitasAgendadasUser from './componentsUser/Vistas/CitasAgendadas';
import Favoritos from './componentsUser/Vistas/Favoritos.jsx'
import PrincipalProv from './Componentesproveedor/vistas/Principal.jsx'
import AgendarCita from './componentsUser/Vistas/AgendarCita.jsx'
import LoginProv from './Componentesproveedor/vistas/LoginProv.jsx'
import CrearCuentaUser from './componentsUser/Vistas/CrearCuenta.jsx';
import CrearCuentaProov from './Componentesproveedor/vistas/Registrar.jsx';
import ListaDeClientes from './Componentesproveedor/vistas/ListaDeClientes.jsx';

function App() {
  return (
   
    <Router>

    <Routes>
      {/* vista principal */}
      <Route path="/" element={<Inicio/>}/>
      {/* Vista Iniciar sesion */}
      <Route path="/loginUser" element={<LoginUsuario/>}/>
      <Route path="/loginProv" element={<LoginProv/>}/>
      {/* Vista crear cuenta */}
      <Route path="/CrearCuentaUser" element={<CrearCuentaUser/>}/>
      <Route path="/CrearCuentaProov" element={<CrearCuentaProov/>}/>
      {/* vista usuario */}
      <Route path="/PrincipalUser" element={<PrincipalUsuario/>}/>
      <Route path="/CitasAgendadasUser" element={<CitasAgendadasUser/>}/>
      <Route path="/Favoritos" element={<Favoritos/>}/>
      <Route path="/AgendarCita" element={<AgendarCita/>}/>
      {/* vista proveedor */}
      <Route path="/PrincipalProv" element={<PrincipalProv/>}/>
      <Route path="/ListaDeClientes" element={<ListaDeClientes/>} />

    </Routes>

  </Router>
  
  );
}

export default App;
