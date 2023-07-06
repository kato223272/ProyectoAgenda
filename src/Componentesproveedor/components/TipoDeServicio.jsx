import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/Buttoon.css';

function DropdownItemTagsExample() {
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
  };

  const servicios = [
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
    { id: 11, text: 'Nutrición' },
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
  ];

  const serviciosFiltrados = servicios.filter((servicio) =>
    servicio.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Dropdown>
      <Dropdown.Toggle className="Servicio" variant="primary" id="dropdown-item-button">
        {selectedItem ? selectedItem.text : 'Servicio'}
      </Dropdown.Toggle>
      <Dropdown.Menu show style={{ maxHeight: '200px', overflow: 'auto' }} className="scrollable-menu">
        <Dropdown.ItemText>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Buscar..."
          />
        </Dropdown.ItemText>
        {serviciosFiltrados.length > 0 ? (
          serviciosFiltrados.map((servicio) => (
            <Dropdown.Item
              key={servicio.id}
              as="button"
              onClick={(e) => handleItemClick(e, servicio)}
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
