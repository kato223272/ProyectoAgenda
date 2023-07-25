import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/Buttoon.css';

function DropdownItemTagsExample({handleServiceSelect}) {
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [serviciosFiltrados, setServiciosFiltrados] = useState([]);
  

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    toggleDropdown();
  };

  const toggleDropdown = (isOpen, e) => {
    setIsDropdownOpen((prevState) => isOpen === undefined ? !prevState : isOpen);
  };
  const servicios = [
    { id: 0, text: 'Estilista' },
    { id: 1, text: 'Peluquería' },
    { id: 2, text: 'Masajes' },
    { id: 3, text: 'Terapia Física' },
    { id: 4, text: 'Fisioterapia' },
    { id: 5, text: 'Odontología' },
    { id: 6, text: 'Dermatología' },
    { id: 7, text: 'Quiropráctica' },
    { id: 8, text: 'Podología' },
    { id: 9, text: 'Terapia Ocupacional' },
    { id: 10, text: 'Terapia de Lenguaje' },
    { id: 12, text: 'Medicina General' },
    { id: 13, text: 'Psicología' },
    { id: 14, text: 'Ginecología' },
    { id: 15, text: 'Oftalmología' },
    { id: 16, text: 'Cirugía Plástica' },
    { id: 17, text: 'Acupuntura' },
    { id: 18, text: 'Homeopatía' },
    { id: 19, text: 'Endocrinología' },
    { id: 20, text: 'Pediatría' },
    { id: 21, text: 'Psiquiatría' },
    { id: 22, text: 'Terapia de Pareja' },
    { id: 23, text: 'Oncología' },
    { id: 24, text: 'Terapia Respiratoria' },
    { id: 25, text: 'Cardiología' },
    { id: 26, text: 'Neurología' },
    { id: 27, text: 'Ortopedia' },
    { id: 28, text: 'Urología' },
    { id: 29, text: 'Radiología' },
    { id: 30, text: 'Psicoterapia' },
    { id: 31, text: 'Hematología' },
    { id: 32, text: 'Otorrinolaringología' },
    { id: 33, text: 'Dietética' },
    { id: 34, text: 'Gastroenterología' },
    { id: 35, text: 'Inmunología' },
    { id: 36, text: 'Reumatología' },
    { id: 37, text: 'Cirugía Cardiovascular' },
    { id: 38, text: 'Genética Médica' },
    { id: 39, text: 'Psicopedagogía' },
    { id: 40, text: 'Psicología Infantil' },
    { id: 41, text: 'Terapia de Rehabilitación' },
    { id: 42, text: 'Exámenes de Laboratorio' },
    { id: 43, text: 'Exámenes de Imagenología: Radiografías, Ultrasonidos, etc.' },
    { id: 44, text: 'Consulta con Oftalmólogo' },
    { id: 45, text: 'Consulta con Ginecólogo/Obstetra' },
    { id: 46, text: 'Terapia Ocupacional' },
    { id: 47, text: 'Consulta con Especialista en Medicina Alternativa (Homeopatía, Acupuntura, etc.)' },
    { id: 48, text: 'Consulta con Dermatólogo' },
    { id: 49, text: 'Consulta con Nutricionista' },
    { id: 50, text: 'Terapia de Pareja y Familia' },
    { id: 51, text: 'Consulta Médica General' },
    { id: 52, text: 'Odontología General' },
    { id: 53, text: 'Terapia Física y Rehabilitación' },
    { id: 54, text: 'Psicoterapia y Consejería' },
    { id: 55, text: 'Masajes Terapéuticos' },
    { id: 56, text: 'Consulta con Asesor Financiero o Contador' },
    { id: 57, text: 'Servicio de Asesoría Legal' },
    { id: 58, text: 'Tutorías Académicas' },
    { id: 59, text: 'Servicio de Fotografía' },
    { id: 60, text: 'Clases de Música' },
    { id: 61, text: 'Consulta con Asesor de Recursos Humanos' },
    { id: 62, text: 'Consulta con Diseñador de Interiores' },
    { id: 63, text: 'Servicio de Asesoría en Marketing Digital' },
    { id: 64, text: 'Servicio de Entrenamiento Canino (adiestramiento de mascotas)' },
    { id: 65, text: 'Servicio de Spa y Tratamientos Faciales' },
    { id: 66, text: 'Servicio de Reparación de Electrodomésticos' },
    { id: 67, text: 'Servicio de Diseño Gráfico y Creación de Logotipos' },
    { id: 68, text: 'Servicio de Planificación de Eventos y Bodas' },
    { id: 69, text: 'Servicio de Reparación de Electrónicos o Dispositivos' },
    { id: 70, text: 'Consulta con Asesor de Estilo Personal o Moda' },
    { id: 71, text: 'Servicio de Reparación y Mantenimiento de Automóviles' },
    { id: 72, text: 'Estilista de cabello' },
    { id: 73, text: 'Manicurista' },
    { id: 74, text: 'Peluquero/a canino' },
    { id: 75, text: 'extensiones de pestañas' },
    { id: 76, text: 'Diseño y realización de tatuajes' },
    { id: 77, text: 'Depilación'},
  ];
  useEffect(() => {
    // Filtro de servicios en función del texto de búsqueda
    const filteredServicios = servicios.filter((servicio) =>
      servicio.text.toLowerCase().includes(searchText.toLowerCase())
    );
    setServiciosFiltrados(filteredServicios);
  }, [searchText]);

  return (
    <Dropdown show={isDropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle className="Servicio" variant="primary" id="dropdown-item-button">
        {selectedItem ? selectedItem.text : 'Servicio'}
      </Dropdown.Toggle>
      <Dropdown.Menu
        show={isDropdownOpen}
        style={{ maxHeight: '200px', overflow: 'auto', maxWidth: '300px' }} // Ajusta el valor de maxWidth según tus necesidades
        className="scrollable-menu"
      >
        <Dropdown.ItemText>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            onClick={(e) => e.stopPropagation()}
            placeholder="Buscar..."
          />
        </Dropdown.ItemText>
        {serviciosFiltrados.length > 0 ? (
          serviciosFiltrados.map((servicio) => (
            <Dropdown.Item
              key={servicio.id}
              as="button"
              onClick={(e) => {
                handleItemClick(e, servicio);
                handleServiceSelect(servicio.text);
              }}
            >
              {servicio.text}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.ItemText>No se encontraron resultados</Dropdown.ItemText>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default DropdownItemTagsExample;
