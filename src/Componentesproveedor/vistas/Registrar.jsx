import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsBuilding } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { RiUserLine } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';

import Servicios from '../components/TipoDeServicio';
import '../css/Registras.css';
import BotonEstado from '../components/ButtoonEstado';
import Navbar from '../../componentesNoRegistrado/components/NavbarRegistrar';
import Footer from '../../ComponentGlobales/Footer.jsx';
import { useNavigate } from 'react-router';
import { da } from 'date-fns/locale';

function FormExample() {
  const navegar = useNavigate();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [altPass, setAltPass] = useState('');
  const [nombreLocal, setNombreLocal] = useState('');
  const [calle, setCalle] = useState('');
  const [referencias, setReferencias] = useState(''); 
  const [numeroExterior, setNumeroExterior] = useState('');
  const [numeroInterior, setNumeroInterior] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cantidadTrabajadores, setCantidadTrabajadores] = useState('');
  const [rfc, setRFC] = useState('');
  const [altaSAT, setAltaSAT] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [showDocumentUpload, setShowDocumentUpload] = useState(false);

  const [servicioSeleccionado, setServicioSeleccionado] = useState(''); // Estado para almacenar el servicio seleccionado
  const [estadoSeleccionado, setEstadoSeleccionado] = useState([]); // Estado para almacenar el estado seleccionado

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //  para manejar el envío del formulario
  };
  const handleCantidadTrabajadoresSelect = (cantidad) => {
    setCantidadTrabajadores(cantidad);
  };

  const handleImagenUpload = async (e) =>{
    var formData = new FormData();
    const file = e.target.files[0];
    console.log(file);
    formData.append("imagen", file, file.name);
    try{
      const base64 = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RecibirImagenBase64", formData);
      if(base64.status === 200){
        setImageUrl(base64);
      }
    } catch(error){
        console.error(error.response);
    }
  }


  const handleServiceSelect = (selectedService) => {
    setServicioSeleccionado(selectedService);
  };

  
  const handleStateSelect = (selectedState, tipo) => {
    if(tipo === "Estado"){
      estadoSeleccionado.Estado = selectedState;
    }

    if(tipo === "Pais"){
      estadoSeleccionado.Pais = selectedState;
    }

    if(tipo === "Municipio"){
      estadoSeleccionado.Municipio = selectedState;
    }
  };

  const b64toBlob = (b64Data, contentType='', sliceSize=4096) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  const registrarEmpresa = async (objED, navegar, altPass) =>{
    console.log(objED);
    const blob = b64toBlob(objED.FotoPerfil, 'image/png');
    const file = new File([blob], "image");
    var formData = new FormData();
    formData.append("imagen", file, file.name);
    console.log(file);
    console.log(formData);

    const correoValido = /^\w+([.]\w+)*@\w+([.]\w+)*[.][a-zA-Z]{2,5}$/.test(objED.Correo);
    const nombreValido = !(/\d/.test(objED.Nombre));
    const passValido = objED.Password === altPass;
    const numeroValido = (/\d/.test(objED.No_Telf_E) && objED.No_Telf_E.length === 10);
    console.log(numeroValido);
    if(objED.Correo.trim("") && objED.Password.trim("") && objED.Nombre_E.trim("") && objED.Nombre_Servicio.trim("") && 
    objED.Nombre.trim("") && objED.No_Telf_E.trim("") && objED.Calle.trim("") && objED.N_Exterior.trim("") && 
    objED.Pais.trim("") && objED.Estado.trim("") && objED.Municipio.trim("")){
      console.log("if principal");
      if(correoValido && nombreValido && passValido && numeroValido && objED.Referencias.trim("") && 
      objED.RFC.trim("") && objED.N_Interior.trim("")){
        console.log("if principal-1");
        try{
          const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
            + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
            "&Pass="+ objED.Password  +"&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E +"&RFC="+ 
            objED.RFC + "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
            "&Referencias="+ objED.Referencias +"&N_Exterior="+ objED.N_Exterior +"&N_Interior="+ objED.N_Interior, formData);
            if(response.status === 201){
              Swal.fire({
                icon:'success',
                title:'¡Cuenta creada!',
                text:'Iniciando sesión...',
                showConfirmButton:true,
                confirmButtonText:'Entrar'
            }).then(
                function (result){
                    if(result.isConfirmed){
                        navegar('/PrincipalProv', {replace:true, state:{
                          Correo: objED.Correo,
                          Password: objED.Password,
                          Nombre_Servicio: objED.Nombre_Servicio,
                          Nombre_E: objED.Nombre_E,
                          Nombre: objED.Nombre,
                          No_Telf_E: objED.No_Telf_E,
                          Calle: objED.Calle,
                          N_Exterior: objED.N_Exterior,
                          N_Interior: objED.N_Interior,
                          Pais: objED.Pais,
                          Estado: objED.Estado, 
                          Municipio: objED.Municipio,
                          Referencias: objED.Referencias,
                          RFC: objED.RFC,
                          FotoPerfil: objED.dataForm}});
                    }
                }
              );
            }
        } catch(error){
          Swal.fire({
            icon:'error',
            title:'¡Error!',
            text:'Hubo un problema con el sistema, intente de nuevo.',
            showConfirmButton:true,
            confirmButtonText:'Reintentar'
          });
          console.error(error.response);
        }
      }

      else if(correoValido && nombreValido && passValido && numeroValido && objED.Referencias.trim("") 
       && objED.N_Interior.trim("")){
        try{
          const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
            + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
            "&Pass="+ objED.Password  +"&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E +
            "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
            "&Referencias="+ objED.Referencias +"&N_Exterior="+ objED.N_Exterior +"&N_Interior="+ objED.N_Interior, formData);
            if(response.status === 201){
              Swal.fire({
                icon:'success',
                title:'¡Cuenta creada!',
                text:'Iniciando sesión...',
                showConfirmButton:true,
                confirmButtonText:'Entrar'
            }).then(
                function (result){
                    if(result.isConfirmed){
                        navegar('/PrincipalProv', {replace:true, state:{objED}});
                    }
                }
              );
            }
        } catch(error){
          Swal.fire({
            icon:'error',
            title:'¡Error!',
            text:'Hubo un problema con el sistema, intente de nuevo.',
            showConfirmButton:true,
            confirmButtonText:'Reintentar'
          });
          console.error(error.response);
        }
      }

      else if(correoValido && nombreValido && passValido && numeroValido  
      && objED.N_Interior.trim("") && objED.RFC.trim("")){
        try{
          const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
            + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo + "&RFC=" + objED.RFC +
            "&Pass="+ objED.Password  +"&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E +
            "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
            "&N_Exterior="+ objED.N_Exterior +"&N_Interior="+ objED.N_Interior, formData);
            if(response.status === 201){
              Swal.fire({
                icon:'success',
                title:'¡Cuenta creada!',
                text:'Iniciando sesión...',
                showConfirmButton:true,
                confirmButtonText:'Entrar'
            }).then(
                function (result){
                    if(result.isConfirmed){
                        navegar('/PrincipalProv', {replace:true, state:{objED}});
                    }
                }
              );
            }
        } catch(error){
          Swal.fire({
            icon:'error',
            title:'¡Error!',
            text:'Hubo un problema con el sistema, intente de nuevo.',
            showConfirmButton:true,
            confirmButtonText:'Reintentar'
          });
          console.error(error.response);
        }
      }

      else if(correoValido && nombreValido
      && passValido && numeroValido && objED.N_Interior.trim("") && objED.RFC.trim("")){
        try{
          const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
            + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
            "&Pass="+ objED.Password + "&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E + "&RFC=" + objED.RFC +
            "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
            "&N_Exterior="+ objED.N_Exterior +"&N_Interior="+ objED.N_Interior, formData);
            if(response.status === 201){
              Swal.fire({
                icon:'success',
                title:'¡Cuenta creada!',
                text:'Iniciando sesión...',
                showConfirmButton:true,
                confirmButtonText:'Entrar'
            }).then(
                function (result){
                    if(result.isConfirmed){
                        navegar('/PrincipalProv', {replace:true, state:{objED}});
                    }
                }
              );
            }
        } catch(error){
          Swal.fire({
            icon:'error',
            title:'¡Error!',
            text:'Hubo un problema con el sistema, intente de nuevo.',
            showConfirmButton:true,
            confirmButtonText:'Reintentar'
          });
          console.error(error.response);
        }
      }

      else if(correoValido && nombreValido
        && passValido && numeroValido && objED.N_Interior.trim("") ){
          try{
            const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
              + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
              "&Pass="+ objED.Password + "&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E  +
              "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
              "&N_Exterior="+ objED.N_Exterior +"&N_Interior="+ objED.N_Interior, formData);
              if(response.status === 201){
                Swal.fire({
                  icon:'success',
                  title:'¡Cuenta creada!',
                  text:'Iniciando sesión...',
                  showConfirmButton:true,
                  confirmButtonText:'Entrar'
              }).then(
                  function (result){
                      if(result.isConfirmed){
                          navegar('/PrincipalProv', {replace:true, state:{objED}});
                      }
                  }
                );
              }
          } catch(error){
            Swal.fire({
              icon:'error',
              title:'¡Error!',
              text:'Hubo un problema con el sistema, intente de nuevo.',
              showConfirmButton:true,
              confirmButtonText:'Reintentar'
            });
            console.error(error.response);
          }
      }

      else if(correoValido && nombreValido
        && passValido && numeroValido  && objED.RFC.trim("")){
          console.log("if principal-7");
          console.log("if principal-6");
          try{
            const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
              + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
              "&Pass="+ objED.Password + "&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E + "&RFC=" + objED.RFC +
              "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
              "&N_Exterior="+ objED.N_Exterior, formData);
              if(response.status === 201){
                Swal.fire({
                  icon:'success',
                  title:'¡Cuenta creada!',
                  text:'Iniciando sesión...',
                  showConfirmButton:true,
                  confirmButtonText:'Entrar'
              }).then(
                  function (result){
                      if(result.isConfirmed){
                          navegar('/PrincipalProv', {replace:true, state:{objED}});
                      }
                  }
                );
              }
          } catch(error){
            Swal.fire({
              icon:'error',
              title:'¡Error!',
              text:'Hubo un problema con el sistema, intente de nuevo.',
              showConfirmButton:true,
              confirmButtonText:'Reintentar'
            });
            console.error(error.response);
          }
        }

      else if(correoValido && nombreValido
      && passValido && numeroValido ){
        console.log("if principal-7");
        try{
          const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
            + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
            "&Pass="+ objED.Password + "&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E +
            "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio, formData);
            if(response.status === 201){
              Swal.fire({
                icon:'success',
                title:'¡Cuenta creada!',
                text:'Iniciando sesión...',
                showConfirmButton:true,
                confirmButtonText:'Entrar'
            }).then(
                function (result){
                    if(result.isConfirmed){
                        navegar('/PrincipalProv', {replace:true, state:{objED}});
                    }
                }
              );
            }
        } catch(error){
          Swal.fire({
            icon:'error',
            title:'¡Error!',
            text:'Hubo un problema con el sistema, intente de nuevo.',
            showConfirmButton:true,
            confirmButtonText:'Reintentar'
          });
          console.error(error.response);
        }
      }

      else if(correoValido && nombreValido
        && passValido && numeroValido && objED.N_Interior.trim("")){
          try{
            const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
              + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
              "&Pass="+ objED.Password + "&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E +
              "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
              "&N_Interior=" + objED.N_Interior, formData);
              if(response.status === 201){
                Swal.fire({
                  icon:'success',
                  title:'¡Cuenta creada!',
                  text:'Iniciando sesión...',
                  showConfirmButton:true,
                  confirmButtonText:'Entrar'
              }).then(
                  function (result){
                      if(result.isConfirmed){
                          navegar('/PrincipalProv', {replace:true, state:{objED}});
                      }
                  }
                );
              }
          } catch(error){
            Swal.fire({
              icon:'error',
              title:'¡Error!',
              text:'Hubo un problema con el sistema, intente de nuevo.',
              showConfirmButton:true,
              confirmButtonText:'Reintentar'
            });
            console.error(error.response);
          }
        }

        else if(correoValido && nombreValido
          && passValido && numeroValido && objED.RFC.trim("")){
            try{
              const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
                + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
                "&Pass="+ objED.Password + "&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E +
                "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
                "&RFC=" + objED.RFC);
                if(response.status === 201){
                  Swal.fire({
                    icon:'success',
                    title:'¡Cuenta creada!',
                    text:'Iniciando sesión...',
                    showConfirmButton:true,
                    confirmButtonText:'Entrar'
                }).then(
                    function (result){
                        if(result.isConfirmed){
                            navegar('/PrincipalProv', {replace:true, state:{objED}});
                        }
                    }
                  );
                }
            } catch(error){
              Swal.fire({
                icon:'error',
                title:'¡Error!',
                text:'Hubo un problema con el sistema, intente de nuevo.',
                showConfirmButton:true,
                confirmButtonText:'Reintentar'
              });
              console.error(error.response);
            }
          }

      else if(correoValido && nombreValido
      && passValido && numeroValido){
        try{
          const response = await axios.post("http://jeshuabd-001-site1.dtempurl.com/api/Empresas/RegistroDeEmpresa?Nombre_E=" 
            + objED.Nombre_E + "&Nombre_Servicio=" + objED.Nombre_Servicio +"&Correo_E="+ objED.Correo +
            "&Pass="+ objED.Password + "&Nombre="+ objED.Nombre +"&No_Telf_E="+ objED.No_Telf_E +
            "&Calle="+ objED.Calle +"&Pais="+ objED.Pais +"&Estado="+ objED.Estado +"&Municipio="+ objED.Municipio +
            "&N_Exterior="+ objED.N_Exterior, formData);
            if(response.status === 201){
              Swal.fire({
                icon:'success',
                title:'¡Cuenta creada!',
                text:'Iniciando sesión...',
                showConfirmButton:true,
                confirmButtonText:'Entrar'
            }).then(
                function (result){
                    if(result.isConfirmed){
                        navegar('/PrincipalProv', {replace:true, state:{objED}});
                    }
                }
              );
            }
        } catch(error){
          Swal.fire({
            icon:'error',
            title:'¡Error!',
            text:'Hubo un problema con el sistema, intente de nuevo.',
            showConfirmButton:true,
            confirmButtonText:'Reintentar'
          });
          console.error(error.response);
        }
      }

      else if(!(correoValido)){
        Swal.fire({
          icon:'error',
          title:'Correo mal escrito',
          text:'Asegurese de escribir un correo válido',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        });
      }
      
      else if(!passValido){
        Swal.fire({
          icon:'error',
          title:'Contraseñas diferentes',
          text:'Las contraseñas escritas son diferentes entre si',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        });
      }
  
      else if(/\d/.test(objED.Nombre)){
        Swal.fire({
          icon:'error',
          title:'Nombre imposible',
          text:'Se detecto numeros en su nombre, intente de nuevo',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        });
      }

      else if(!(/\d/.test(objED.No_Telf_E))){
        Swal.fire({
          icon:'error',
          title:'Número de teléfono con letras',
          text:'Se detecto letras en el campo de Teléfono, intente de nuevo',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        });
      }

      else if(objED.No_Telf_E.length !== 10){
        Swal.fire({
          icon:'error',
          title:'Número de teléfono con más o menos de 10 dígitos',
          text:'Se detecto un número de teléfono imposible, asegúrese de escribir sin (+52) y solo dígitos',
          showConfirmButton:false,
          showDenyButton:true,
          denyButtonText:'Volver a intentarlo'
        });
      }
    }

    else{
      Swal.fire({
        icon:'info',
        title:'Espacios vacíos',
        text:'Rellene los campos de registro',
        showConfirmButton:true,
        confirmButtonText:'Volver a intentarlo'
      })
    }
  }
 
  return (
    <>
     <Navbar></Navbar>
    <div className="RegistrarDatos2">
     
      <div className="RegistrarDatos1" noValidate autoComplete="off">
        <Form noValidate onSubmit={handleFormSubmit} md={100} >
          <Row>
            <Col md={100} className="text-center mb-4">
              <br />
              <h2>Registrate</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <AiOutlineMail />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Ingresar correo"
                  value={correo}
                  onChange={(ev) => setCorreo(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <RiLockPasswordFill />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <RiLockPasswordFill />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Repetir contraseña"
                  value={altPass}
                  onChange={(ev) => setAltPass(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BsBuilding />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la empresa"
                  value={nombreLocal}
                  onChange={(ev) => setNombreLocal(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Calle"
                  value={calle}
                  onChange={(ev) => setCalle(ev.target.value)} // Modificación: Usamos un solo campo para la calle
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Referencias"
                  value={referencias}
                  onChange={(ev) => setReferencias(ev.target.value)} // Nueva adición: Campo de Referencias
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Número exterior"
                  value={numeroExterior}
                  onChange={(ev) => setNumeroExterior(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BiMap />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Número interior"
                  value={numeroInterior}
                  onChange={(ev) => setNumeroInterior(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <RiUserLine />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(ev) => setNombre(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <FaPhoneAlt />
                </InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Número de teléfono"
                  value={telefono}
                  onChange={(ev) => setTelefono(ev.target.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </Form.Group>
            <br /><br /><br />
            <BotonEstado handleStateSelect={handleStateSelect}/>
            <br />
          </Row>
          <Row className="mb-3">
              <Form.Group as={Col} md={12} className="position-relative mb-3">
                <Form.Label>Selecciona una imagen para tu logo</Form.Label>
                {/* Restricción de archivos a imágenes */}
                <Form.Control type="file" name="file" accept="image/*, .jpg, .png" onChange={e => handleImagenUpload(e)} />
                <Form.Control.Feedback type="DocumentoInvalido" tooltip>
                  <br />
                  <div className="centrarServicios">
                    <Servicios handleServiceSelect={handleServiceSelect}/>
                  </div>
                </Form.Control.Feedback>
              </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <BsBuilding />
                </InputGroup.Text>
                <DropdownButton
                  as={InputGroup.Append}
                  variant="outline-secondary"
                  title={cantidadTrabajadores || 'Cantidad de trabajadores'}
                >
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'].map((opcion, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleCantidadTrabajadoresSelect(opcion)}
                    >
                      {opcion}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <InputGroup>
                <InputGroup.Text>
                  {/* Ícono */}
                </InputGroup.Text>
                <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={altaSAT === null ? '¿Está dado de alta en el SAT?' : altaSAT}
            >
              <Dropdown.Item onClick={() => setAltaSAT('Sí')}>Sí</Dropdown.Item>
              <Dropdown.Item onClick={() => setAltaSAT('No')}>No</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form.Group>
      
        {altaSAT === 'Sí' && (
          
          <Form.Group as={Col} md={6}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="RFC"
                value={rfc}
                onChange={(ev) => setRFC(ev.target.value)}
                autoComplete="off"
                style={{ marginBottom: '20px' }} 
                className="margen-inferior-rfc" 
              />
            </InputGroup>
          </Form.Group>
        )}
        </Row>
  
          <Row className="mb-3">
            <Col md={12} className="text-center">
              <Button className="botonCrear" type="button"
                onClick={ev => {

                  const Objeto = {
                    Correo: correo,
                    Password: password,
                    Nombre_Servicio: servicioSeleccionado,
                    Nombre_E: nombreLocal,
                    Nombre: nombre,
                    No_Telf_E: telefono,
                    Calle: calle,
                    N_Exterior: numeroExterior,
                    N_Interior: numeroInterior,
                    Pais: estadoSeleccionado.Pais,
                    Estado: estadoSeleccionado.Estado, 
                    Municipio: estadoSeleccionado.Municipio,
                    Referencias: referencias,
                    RFC: rfc,
                    FotoPerfil: imageUrl.data
                  }
                  console.log(Objeto);
                  registrarEmpresa(Objeto, navegar, altPass);
                }}>
                Crear cuenta
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}


export default FormExample;
