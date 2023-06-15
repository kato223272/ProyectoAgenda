import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './componentsUser/Componentes/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Inicio'
import LoginUsuario from'./componentsUser/Vistas/Login.jsx';


function App() {
  return (
   
    <Router>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/loginUser" element={<LoginUsuario/>}/>
    </Routes>
  </Router>
  
  );
}

export default App;
