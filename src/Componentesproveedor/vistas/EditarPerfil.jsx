import React, { useState } from 'react';
import '../css/EditarPerfil.css';
import Navbar from '../components/NavbarProvTodas';
import Footer from '../../ComponentGlobales/Footer.jsx';
const EditProfileEmpresa = () => {
  const [empresaInfo, setEmpresaInfo] = useState({
    nombre: '',
    especialidad: '',
    telefono: '',
    biografia: '',
    direccion: '',
    referencias: '',
    horarios: {
      lunes: { inicio: '', fin: '', labora: true },
      martes: { inicio: '', fin: '', labora: true },
      miercoles: { inicio: '', fin: '', labora: true },
      jueves: { inicio: '', fin: '', labora: true },
      viernes: { inicio: '', fin: '', labora: true },
      sábado: { inicio: '', fin: '', labora: true },
      domingo: { inicio: '', fin: '', labora: true },
    },
    servicios: [],
  });
  
  const [showEditNombre, setShowEditNombre] = useState(false);
  const [showEditEspecialidad, setShowEditEspecialidad] = useState(false);
  const [showEditTelefono, setShowEditTelefono] = useState(false);
  const [showEditBiografia, setShowEditBiografia] = useState(false);
  const [showEditDireccion, setShowEditDireccion] = useState(false);
  const [showEditReferencias, setShowEditReferencias] = useState(false);


  const duracionOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmpresaInfo({ ...empresaInfo, [name]: value });
  };

  const handleHorarioChange = (dia, field, value) => {
    setEmpresaInfo({
      ...empresaInfo,
      horarios: {
        ...empresaInfo.horarios,
        [dia]: {
          ...empresaInfo.horarios[dia],
          [field]: value,
        },
      },
    });
  };

  const handleLaboraChange = (dia, value) => {
    setEmpresaInfo({
      ...empresaInfo,
      horarios: {
        ...empresaInfo.horarios,
        [dia]: {
          ...empresaInfo.horarios[dia],
          labora: value,
        },
      },
    });
  };
  const handleAgregarServicio = (servicio) => {
    setEmpresaInfo({
      ...empresaInfo,
      servicios: [...empresaInfo.servicios, { ...servicio, duracion: '1' }], 
    });
  };
  const handleEliminarServicio = (index) => {
    const nuevosServicios = [...empresaInfo.servicios];
    nuevosServicios.splice(index, 1);
    setEmpresaInfo({
      ...empresaInfo,
      servicios: nuevosServicios,
    });
  };
  const handleServicioChange = (index, field, value) => {
    const nuevosServicios = [...empresaInfo.servicios];
    nuevosServicios[index][field] = value;
    setEmpresaInfo({
      ...empresaInfo,
      servicios: nuevosServicios,
    });
};
const horasOptions = [];
for (let hora = 0; hora < 24; hora++) {
  const horaStr = hora.toString().padStart(2, '0');
  horasOptions.push(`${horaStr}:00`);
}


  return (
    <>
    <Navbar />
    <div className="edit-profile-empresa-container">
      <h1>Editar Perfil de Empresa</h1>
      <div className="edit-button-container">
        <h2>Datos Generales</h2>
        <label>Nombre de la empresa:</label>
        {showEditNombre ? (
          <>
            <input
              type="text"
              name="nombre"
              value={empresaInfo.nombre}
              onChange={handleInputChange}
            />
            <button onClick={() => setShowEditNombre(false)} className={`edit-button ${showEditNombre ? "active" : ""}`}>Guardar Cambios</button>
          </>
        ) : (
          <>
            <p>{empresaInfo.nombre}</p>
            <button onClick={() => setShowEditNombre(true)} className={`edit-button ${showEditNombre ? "active" : ""}`}>Editar</button>
          </>
        )}

        <label>Especialidad:</label>
        {showEditEspecialidad ? (
          <>
            <input
              type="text"
              name="especialidad"
              value={empresaInfo.especialidad}
              onChange={handleInputChange}
            />
            <button onClick={() => setShowEditEspecialidad(false)} className={`edit-button ${showEditNombre ? "active" : ""}`}>Guardar Cambios</button>
          </>
        ) : (
          <>
            <p>{empresaInfo.especialidad}</p>
            <button onClick={() => setShowEditEspecialidad(true)}className={`edit-button ${showEditNombre ? "active" : ""}`}>Editar</button>
          </>
        )}

        <label>Número de teléfono:</label>
        {showEditTelefono ? (
          <>
            <input
              type="text"
              name="telefono"
              value={empresaInfo.telefono}
              onChange={handleInputChange}
            />
            <button onClick={() => setShowEditTelefono(false)}className={`edit-button ${showEditNombre ? "active" : ""}`}>Guardar Cambios</button>
          </>
        ) : (
          <>
            <p>{empresaInfo.telefono}</p>
            <button onClick={() => setShowEditTelefono(true)} className={`edit-button ${showEditNombre ? "active" : ""}`}>Editar</button>
          </>
        )}

        <label>Biografía:</label>
        {showEditBiografia ? (
          <>
            <textarea
              name="biografia"
              value={empresaInfo.biografia}
              onChange={handleInputChange}
            ></textarea>
            <button onClick={() => setShowEditBiografia(false)}className={`edit-button ${showEditNombre ? "active" : ""}`}>Guardar Cambios</button>
          </>
        ) : (
          <>
            <p>{empresaInfo.biografia}</p>
            <button onClick={() => setShowEditBiografia(true)}className={`edit-button ${showEditNombre ? "active" : ""}`}>Editar</button>
          </>
        )}

        <label>Dirección:</label>
        {showEditDireccion ? (
          <>
            <input
              type="text"
              name="direccion"
              value={empresaInfo.direccion}
              onChange={handleInputChange}
            />
            <button onClick={() => setShowEditDireccion(false)}fieldName="direccion">Guardar Cambios</button>
          </>
        ) : (
          <>
            <p>{empresaInfo.direccion}</p>
            <button onClick={() => setShowEditDireccion(true)}fieldName="direccion">Editar</button>
          </>
        )}

        <label>Referencias:</label>
        {showEditReferencias ? (
          <>
            <textarea
              name="referencias"
              value={empresaInfo.referencias}
              onChange={handleInputChange}
            ></textarea>
            <button onClick={() => setShowEditReferencias(false)}fieldName="referencia">Guardar Cambios</button>
          </>
        ) : (
          <>
            <p>{empresaInfo.referencias}</p>
            <button onClick={() => setShowEditReferencias(true)}fieldName="referencia">Editar</button>
          </>
        )}
      </div>

      <div>
        <h2>Horario General</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Labora</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(empresaInfo.horarios).map((dia) => (
                <tr key={dia}>
                  <td>{dia}</td>
                  <td>
                    <select
                      value={empresaInfo.horarios[dia].inicio}
                      onChange={(e) => handleHorarioChange(dia, 'inicio', e.target.value)}
                    >
                      {horasOptions.map((hora) => (
                        <option key={hora} value={hora}>
                          {hora}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select
                      value={empresaInfo.horarios[dia].fin}
                      onChange={(e) => handleHorarioChange(dia, 'fin', e.target.value)}
                    >
                      {horasOptions.map((hora) => (
                        <option key={hora} value={hora}>
                          {hora}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={empresaInfo.horarios[dia].labora}
                      onChange={(e) => handleLaboraChange(dia, e.target.checked)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
      <h2>Servicios</h2>
          {empresaInfo.servicios.map((servicio, index) => (
            <div className="service-item" key={index}>
              <input
                type="text"
                value={servicio.tipo}
                onChange={(e) => handleServicioChange(index, 'tipo', e.target.value)}
                placeholder="Tipo de servicio"
              />
              <select
                value={servicio.duracion}
                onChange={(e) => handleServicioChange(index, 'duracion', e.target.value)}
              >
                {duracionOptions.map((duracion) => (
                  <option key={duracion} value={duracion}>
                    {duracion} hora{duracion !== 1 ? 's' : ''}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={servicio.precio}
                onChange={(e) => handleServicioChange(index, 'precio', e.target.value)}
                placeholder="Precio"
              />
              <button onClick={() => handleEliminarServicio(index)}>Eliminar</button>
            </div>
          ))}
          <button onClick={() => handleAgregarServicio({ tipo: '', precio: '' })}>
            Agregar Servicio
          </button>
                </div>

        <button>Guardar Cambios Generales</button>
      </div>
      <Footer />
    </>
  );
};


export default EditProfileEmpresa;
