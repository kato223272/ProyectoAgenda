import React, { useState } from 'react';
import '../css/EditarPerfil.css';
import Navbar from '../components/NavbarProvTodas';
import Footer from '../../ComponentGlobales/Footer.jsx';
import Servicios from '../components/TipoDeServicio';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

function eliminarCuenta(navegar){

  const empresa = JSON.parse(localStorage.getItem("Empresa"));
  try{
    console.log(empresa);
    const eliminado = axios.delete("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/EliminarEmpresa?id="+ empresa.nombre_E +"&id2="+ empresa.nombre_Servicio);
      Swal.fire({
        icon:'success',
        title:'¡Cuenta eliminada!',
        text:'¡Hasta pronto!',
        showConfirmButton:true,
        confirmButtonText:'Entrar'
    }).then(
        function (result){
            if(result.isConfirmed){             
                navegar('/');
            }
            if(result.isDismissed){
                navegar('/');
            }
        }
      );    
  } catch (error){
    console.error(error.response.data);            
    navegar('/');
  }
}

const EditProfileEmpresa = () => {
  const navegar = useNavigate();
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
  const [trabajadorInfo, setTrabajadorInfo] = useState([]);
  const [showLogoDialog, setShowLogoDialog] = useState(false);
  const [isChangingLogo, setIsChangingLogo] = useState(false);

  const [logoPreviewSrc, setLogoPreviewSrc] = useState(null);

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

const handleAgregarTrabajador = () => {
  setTrabajadorInfo([
    ...trabajadorInfo,
    {
      horarios: {
        lunes: { inicio: '', fin: '', labora: true },
        martes: { inicio: '', fin: '', labora: true },
        miercoles: { inicio: '', fin: '', labora: true },
        jueves: { inicio: '', fin: '', labora: true },
        viernes: { inicio: '', fin: '', labora: true },
        sábado: { inicio: '', fin: '', labora: true },
        domingo: { inicio: '', fin: '', labora: true },
      },
    },
  ]);
};

const handleEliminarTrabajador = (index) => {
  const nuevosTrabajadores = [...trabajadorInfo];
  nuevosTrabajadores.splice(index, 1);
  setTrabajadorInfo(nuevosTrabajadores);
};

const handleHorarioTrabajadorChange = (trabajadorIndex, dia, field, value) => {
  const nuevosTrabajadores = [...trabajadorInfo];
  nuevosTrabajadores[trabajadorIndex].horarios[dia][field] = value;
  setTrabajadorInfo(nuevosTrabajadores);
};

const handleLaboraChangeTrabajador = (trabajadorIndex, dia, value) => {
  const nuevosTrabajadores = [...trabajadorInfo];
  nuevosTrabajadores[trabajadorIndex].horarios[dia].labora = value;
  setTrabajadorInfo(nuevosTrabajadores);
};

const handleLogoSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setShowLogoDialog(false);
  }; 
  
 
  const handleShowLogoDialog = () => {
    setShowLogoDialog((prevShowLogoDialog) => {
      if (prevShowLogoDialog && isChangingLogo) {
       
        setIsChangingLogo(false);
        return false;
      } else {
       
        setIsChangingLogo(true);
        return true;
      }
    });
  };
  return (
    <>
    <Navbar />
    <div className="edit-profile-empresa-container">
      <h1>Cambiar logo de la empresa</h1>
      {/* Botón para cambiar el logo de la empresa */}
      <button onClick={handleShowLogoDialog}>
        {isChangingLogo ? 'Cancelar Cambiar Logo' : 'Cambiar Logo'}
      </button>

      {/* Cuadro de diálogo para seleccionar la imagen del logo */}
      {showLogoDialog && (
        <div className="logo-dialog-container">
          <input
            type="file"
            onChange={handleLogoSelected}
            accept="image/*, .jpg, .png"
          />
        </div>
      )}

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
           <Servicios></Servicios>
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
        <h2>Horario</h2>
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
                <div>
                </div>
        <h2>Horarios para Trabajadores</h2>
        {trabajadorInfo.map((trabajador, index) => (
          <div key={index}>
            <h3>Trabajador {index + 1}</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Día</th>
                    <th>Hora de inicio</th>
                    <th>Hora de fin</th>
                    <th>Labora</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(trabajador.horarios).map((dia) => (
                    <tr key={dia}>
                      <td>{dia}</td>
                      <td>
                        <select
                          value={trabajador.horarios[dia].inicio}
                          onChange={(e) =>
                            handleHorarioTrabajadorChange(
                              index,
                              dia,
                              'inicio',
                              e.target.value
                            )
                          }
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
                          value={trabajador.horarios[dia].fin}
                          onChange={(e) =>
                            handleHorarioTrabajadorChange(
                              index,
                              dia,
                              'fin',
                              e.target.value
                            )
                          }
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
                          checked={trabajador.horarios[dia].labora}
                          onChange={(e) =>
                            handleLaboraChangeTrabajador(index, dia, e.target.checked)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={() => handleEliminarTrabajador(index)}>Eliminar Trabajador</button>
          </div>
        ))}
        <button onClick={handleAgregarTrabajador}>Agregar Trabajador</button>
      </div>

        <button>Guardar Cambios Generales</button><br /><br />
        <button onClick={() => eliminarCuenta(navegar)}>Eliminar cuenta</button>
      </div>
      <Footer />
    </>
  );
                        };


export default EditProfileEmpresa;
