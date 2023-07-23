import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaUserTie } from 'react-icons/fa';
import Logo from '../../ComponentGlobales/img/AplyCH logo.png'
import '../components/NavbarRegistrar.css';

function NavbarComponent() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <nav className="navbar">
      <ul>
        {navigate && (
          <li>
            <button className="back-btn" onClick={handleBackClick}>
              <FaArrowLeft className="icon" /> Regresar
            </button>
          </li>
        )}
        
        <li>
          <Link to="/loginUser">
            <button className="nav-btn">
              <FaUser className="icon" /> Iniciar sesión
            </button>
          </Link>
        </li>
        <li>
          <Link to="/loginProv">
            <button className="nav-btn">
              <FaUserTie className="icon" /> Iniciar sesión como proveedor
            </button>
          </Link>
        </li>
      </ul>
      <img src={Logo} alt="Ejemplo" style={{ width: '100px' }} />
    </nav>
  );
}

export default NavbarComponent;
