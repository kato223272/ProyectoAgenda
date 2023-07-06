import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/Buttoon.css';

//prueba

function DropdownItemTagsExample() {
  const [searchText, setSearchText] = useState('');
  const [selectedEstado, setSelectedEstado] = useState(null);
  const [selectedCiudad, setSelectedCiudad] = useState(null);
  const [selectedPais, setSelectedPais] = useState(null);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleEstadoItemClick = (e, estado) => {
    e.preventDefault();
    setSelectedEstado(estado);
  };

  const handleCiudadItemClick = (e, ciudad) => {
    e.preventDefault();
    setSelectedCiudad(ciudad);
  };

  const handlePaisItemClick = (e, pais) => {
    e.preventDefault();
    setSelectedPais(pais);
  };
 
  // const ciudades = [
  //   //CIUDADES DE NUEVO LEÓN
  //   { id: 1, text: 'Abasolo' },
  //   { id: 2, text: 'Agualeguas' },
  //   { id: 3, text: 'Allende' },
  //   { id: 4, text: 'Anáhuac' },
  //   { id: 5, text: 'Apodaca' },
  //   { id: 6, text: 'Aramberri' },
  //   { id: 7, text: 'Bustamante' },
  //   { id: 8, text: 'Cadereyta Jiménez' },
  //   { id: 9, text: 'Carmen' },
  //   { id: 10, text: 'Cerralvo' },
  //   { id: 11, text: 'China' },
  //   { id: 12, text: 'Ciénega de Flores' },
  //   { id: 13, text: 'Doctor Arroyo' },
  //   { id: 14, text: 'Doctor Coss' },
  //   { id: 15, text: 'Doctor González' },
  //   { id: 16, text: 'El Carmen' },
  //   { id: 17, text: 'Galeana' },
  //   { id: 18, text: 'García' },
  //   { id: 19, text: 'General Bravo' },
  //   { id: 20, text: 'General Escobedo' },
  //   { id: 21, text: 'General Terán' },
  //   { id: 22, text: 'General Treviño' },
  //   { id: 23, text: 'General Zaragoza' },
  //   { id: 24, text: 'General Zuazua' },
  //   { id: 25, text: 'Guadalupe' },
  //   { id: 26, text: 'Hidalgo' },
  //   { id: 27, text: 'Higueras' },
  //   { id: 28, text: 'Hualahuises' },
  //   { id: 29, text: 'Iturbide' },
  //   { id: 30, text: 'Juárez' },
  //   { id: 31, text: 'Lampazos de Naranjo' },
  //   { id: 32, text: 'Linares' },
  //   { id: 33, text: 'Los Aldamas' },
  //   { id: 34, text: 'Los Herreras' },
  //   { id: 35, text: 'Los Ramones' },
  //   { id: 36, text: 'Marín' },
  //   { id: 37, text: 'Melchor Ocampo' },
  //   { id: 38, text: 'Mier y Noriega' },
  //   { id: 39, text: 'Mina' },
  //   { id: 40, text: 'Montemorelos' },
  //   { id: 41, text: 'Monterrey' },
  //   { id: 42, text: 'Parás' },
  //   { id: 43, text: 'Pesquería' },
  //   { id: 44, text: 'Rayones' },
  //   { id: 45, text: 'Sabinas Hidalgo' },
  //   { id: 46, text: 'Salinas Victoria' },
  //   { id: 47, text: 'San Nicolás de los Garza' },
  //   { id: 48, text: 'San Pedro Garza García' },
  //   { id: 49, text: 'Santa Catarina' },
  //   { id: 50, text: 'Santiago' },
  //   { id: 51, text: 'Vallecillo' },
  //   { id: 52, text: 'Villaldama' },
  //   { id: 53, text: 'Larráinzar' },
  //   { id: 54, text: 'Las Margaritas' },
  //   { id: 55, text: 'Las Rosas' },
  //   { id: 56, text: 'Mapastepec' },
  //   { id: 57, text: 'Maravilla Tenejapa' },
  //   { id: 58, text: 'Marqués de Comillas' },
  //   { id: 59, text: 'Mazapa de Madero' },
  //   { id: 60, text: 'Mazatán' },
  //   { id: 61, text: 'Metapa' },
  //   { id: 62, text: 'Mitontic' },
  //   { id: 63, text: 'Montecristo de Guerrero' },
  //   { id: 64, text: 'Motozintla' },
  //   { id: 65, text: 'Nicolás Ruíz' },
  //   { id: 66, text: 'Ocosingo' },
  //   { id: 67, text: 'Ocotepec' },
  //   { id: 68, text: 'Ocozocoautla de Espinosa' },
  //   { id: 69, text: 'Ostuacán' },
  //   { id: 70, text: 'Oxchuc' },
  //   { id: 71, text: 'Palenque' },
  //   { id: 72, text: 'Pantelhó' },
  //   { id: 73, text: 'Pantepec' },
  //   { id: 74, text: 'Pichucalco' },
  //   { id: 75, text: 'Pijijiapan' },
  //   { id: 76, text: 'Pueblo Nuevo Solistahuacán' },
  //   { id: 77, text: 'Rayón' },
  //   { id: 78, text: 'Reforma' },
  //   { id: 79, text: 'Sabanilla' },
  //   { id: 80, text: 'Salto de Agua' },
  //   { id: 81, text: 'San Andrés Duraznal' },
  //   { id: 82, text: 'San Cristóbal de las Casas' },
  //   { id: 83, text: 'San Fernando' },
  //   { id: 84, text: 'San Juan Cancuc' },
  //   { id: 85, text: 'San Lucas' },
  //   { id: 86, text: 'Santiago el Pinar' },
  //   { id: 87, text: 'Siltepec' },
  //   { id: 88, text: 'Simojovel' },
  //   { id: 89, text: 'Sitalá' },
  //   { id: 90, text: 'Socoltitlán' },
  //   { id: 91, text: 'Solosuchiapa' },
  //   { id: 92, text: 'Soyaló' },
  //   { id: 93, text: 'Suchiapa' },
  //   { id: 94, text: 'Suchiate' },
  //   { id: 95, text: 'Sunuapa' },
  //   { id: 96, text: 'Tapachula de Córdova y Ordóñez' },
  //   { id: 97, text: 'Tapalapa' },
  //   { id: 98, text: 'Tapilula' },
  //   { id: 99, text: 'Tecpatán' },
  //   { id: 101, text: 'Tenejapa' },
  //   { id: 102, text: 'Teopisca' },
  //   { id: 103, text: 'Tila' },
  //   { id: 104, text: 'Tonalá' },
  //   { id: 105, text: 'Totolapa' },
  //   { id: 106, text: 'Tumbalá' },
  //   { id: 107, text: 'Tuxtla Gutiérrez' },
  //   { id: 108, text: 'Tuxtla Chico' },
  //   { id: 109, text: 'Tuzantán' },
  //   { id: 110, text: 'Tzimol' },
  //   { id: 111, text: 'Unión Juárez' },
  //   { id: 112, text: 'Venustiano Carranza' },
  //   { id: 113, text: 'Villa Corzo' },
  //   { id: 114, text: 'Villaflores' },
  //   { id: 115, text: 'Yajalón' },
  //   { id: 116, text: 'Zinacantán' },
  // ];

  const estados = [
    { id: 1, text: 'Aguascalientes' },
    { id: 2, text: 'Baja California' },
    { id: 3, text: 'Baja California Sur' },
    { id: 4, text: 'Campeche'},
    { id: 5, text: 'Chiapas' },
    { id: 6, text: 'Chihuahua' },
    { id: 7, text: 'Coahuila de Zaragoza' },
    { id: 8, text: 'Colima' },
    { id: 9, text: 'Durango' },
    { id: 10, text: 'Estado de México' },
    { id: 11, text: 'Guanajuato' },
    { id: 12, text: 'Guerrero' },
    { id: 13, text: 'Hidalgo' },
    { id: 14, text: 'Jalisco' },
    { id: 15, text: 'Michoacán de Ocampo' },
    { id: 16, text: 'Morelos' },
    { id: 17, text: 'Nayarit' },
    { id: 18, text: 'Nuevo León' },
    { id: 19, text: 'Oaxaca' },
    { id: 20, text: 'Puebla' },
    { id: 21, text: 'Querétaro' },
    { id: 22, text: 'Quintana Roo' },
    { id: 23, text: 'San Luis Potosí' },
    { id: 24, text: 'Sinaloa' },
    { id: 25, text: 'Sonora' },
    { id: 26, text: 'Tabasco' },
    { id: 27, text: 'Tamaulipas' },
    { id: 28, text: 'Tlaxcala' },
    { id: 29, text: 'Veracruz' },
    { id: 30, text: 'Yucatán' },
    { id: 31, text: 'Zacatecas' },
  ];

  const ciudades = [
    //CIUDADES DE CHIAPAS
    { id: 1, text: 'Acacoyagua' },
    { id: 2, text: 'Acala' },
    { id: 3, text: 'Acapetahua' },
    { id: 4, text: 'Altamirano' },
    { id: 5, text: 'Amatán' },
    { id: 6, text: 'Amatenango de la Frontera' },
    { id: 7, text: 'Amatenango del Valle' },
    { id: 8, text: 'Ángel Albino Corzo' },
    { id: 9, text: 'Arriaga' },
    { id: 10, text: 'Bejucal de Ocampo' },
    { id: 11, text: 'Bella Vista' },
    { id: 12, text: 'Berriozábal' },
    { id: 13, text: 'Bochil' },
    { id: 14, text: 'Cacahoatán' },
    { id: 15, text: 'Catazajá' },
    { id: 16, text: 'Chalchihuitán' },
    { id: 17, text: 'Chamula' },
    { id: 18, text: 'Chanal' },
    { id: 19, text: 'Chapultenango' },
    { id: 20, text: 'Chenalhó' },
    { id: 21, text: 'Chiapa de Corzo' },
    { id: 22, text: 'Chiapilla' },
    { id: 23, text: 'Chicoasén' },
    { id: 24, text: 'Chicomuselo' },
    { id: 25, text: 'Chilón' },
    { id: 26, text: 'Cintalapa' },
    { id: 27, text: 'Coapilla' },
    { id: 28, text: 'Comitán de Domínguez' },
    { id: 29, text: 'Copainalá' },
    { id: 30, text: 'El Bosque' },
    { id: 31, text: 'El Parral' },
    { id: 32, text: 'El Porvenir' },
    { id: 33, text: 'Escuintla' },
    { id: 34, text: 'Francisco León' },
    { id: 35, text: 'Frontera Comalapa' },
    { id: 36, text: 'Frontera Hidalgo' },
    { id: 37, text: 'Huehuetán' },
    { id: 38, text: 'Huitiupán' },
    { id: 39, text: 'Huixtán' },
    { id: 40, text: 'Huixtla' },
    { id: 41, text: 'Ixhuatán' },
    { id: 42, text: 'Ixtacomitán' },
    { id: 43, text: 'Ixtapa' },
    { id: 44, text: 'Ixtapangajoya' },
    { id: 45, text: 'Jiquipilas' },
    { id: 46, text: 'Jitotol' },
    { id: 47, text: 'Juárez' },
    { id: 48, text: 'La Concordia' },
    { id: 49, text: 'La Grandeza' },
    { id: 50, text: 'La Independencia' },
    { id: 51, text: 'La Libertad' },
    { id: 52, text: 'La Trinitaria' },
    { id: 53, text: 'Larráinzar' },
    { id: 54, text: 'Las Margaritas' },
    { id: 55, text: 'Las Rosas' },
    { id: 56, text: 'Mapastepec' },
    { id: 57, text: 'Maravilla Tenejapa' },
    { id: 58, text: 'Marqués de Comillas' },
    { id: 59, text: 'Mazapa de Madero' },
    { id: 60, text: 'Mazatán' },
    { id: 61, text: 'Metapa' },
    { id: 62, text: 'Mitontic' },
    { id: 63, text: 'Montecristo de Guerrero' },
    { id: 64, text: 'Motozintla' },
    { id: 65, text: 'Nicolás Ruíz' },
    { id: 66, text: 'Ocosingo' },
    { id: 67, text: 'Ocotepec' },
    { id: 68, text: 'Ocozocoautla de Espinosa' },
    { id: 69, text: 'Ostuacán' },
    { id: 70, text: 'Oxchuc' },
    { id: 71, text: 'Palenque' },
    { id: 72, text: 'Pantelhó' },
    { id: 73, text: 'Pantepec' },
    { id: 74, text: 'Pichucalco' },
    { id: 75, text: 'Pijijiapan' },
    { id: 76, text: 'Pueblo Nuevo Solistahuacán' },
    { id: 77, text: 'Rayón' },
    { id: 78, text: 'Reforma' },
    { id: 79, text: 'Sabanilla' },
    { id: 80, text: 'Salto de Agua' },
    { id: 81, text: 'San Andrés Duraznal' },
    { id: 82, text: 'San Cristóbal de las Casas' },
    { id: 83, text: 'San Fernando' },
    { id: 84, text: 'San Juan Cancuc' },
    { id: 85, text: 'San Lucas' },
    { id: 86, text: 'Santiago el Pinar' },
    { id: 87, text: 'Siltepec' },
    { id: 88, text: 'Simojovel' },
    { id: 89, text: 'Sitalá' },
    { id: 90, text: 'Socoltitlán' },
    { id: 91, text: 'Solosuchiapa' },
    { id: 92, text: 'Soyaló' },
    { id: 93, text: 'Suchiapa' },
    { id: 94, text: 'Suchiate' },
    { id: 95, text: 'Sunuapa' },
    { id: 96, text: 'Tapachula de Córdova y Ordóñez' },
    { id: 97, text: 'Tapalapa' },
    { id: 98, text: 'Tapilula' },
    { id: 99, text: 'Tecpatán' },
    { id: 101, text: 'Tenejapa' },
    { id: 102, text: 'Teopisca' },
    { id: 103, text: 'Tila' },
    { id: 104, text: 'Tonalá' },
    { id: 105, text: 'Totolapa' },
    { id: 106, text: 'Tumbalá' },
    { id: 107, text: 'Tuxtla Gutiérrez' },
    { id: 108, text: 'Tuxtla Chico' },
    { id: 109, text: 'Tuzantán' },
    { id: 110, text: 'Tzimol' },
    { id: 111, text: 'Unión Juárez' },
    { id: 112, text: 'Venustiano Carranza' },
    { id: 113, text: 'Villa Corzo' },
    { id: 114, text: 'Villaflores' },
    { id: 115, text: 'Yajalón' },
    { id: 116, text: 'Zinacantán' },
  ];
  const paises = [
    { id: 1, text: 'México' },
   
  ];

  const filteredEstados = estados.filter((estado) =>
  estado.text.toLowerCase().includes(searchText.toLowerCase())
);

const filteredCiudades = ciudades.filter((ciudad) =>
  ciudad.text.toLowerCase().includes(searchText.toLowerCase())
);

const filteredPaises = paises.filter((pais) =>
  pais.text.toLowerCase().includes(searchText.toLowerCase())
);

return (
  <div style={{ display: 'flex' }}>
    <Dropdown className='Estado'>
      <Dropdown.Toggle className="Estado" variant="primary" id="dropdown-item-button">
        {selectedEstado ? selectedEstado.text : 'Estado'}
      </Dropdown.Toggle>
      <Dropdown.Menu show style={{ maxHeight: '200px', overflow: 'auto' }} className="scrollable-menu">
        <Dropdown.ItemText>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search..."
          />
        </Dropdown.ItemText>
        {filteredEstados.length > 0 ? (
          filteredEstados.map((estado) => (
            <Dropdown.Item
              key={estado.id}
              as="button"
              onClick={(e) => handleEstadoItemClick(e, estado)}
            >
              {estado.text}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.ItemText>No se encontraron resultados</Dropdown.ItemText>
        )}
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className="Ciudad" variant="primary" id="dropdown-item-button">
        {selectedCiudad ? selectedCiudad.text : 'Ciudad'}
      </Dropdown.Toggle>
      <Dropdown.Menu show style={{ maxHeight: '200px', overflow: 'auto' }} className="scrollable-menu">
        <Dropdown.ItemText>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search..."
          />
        </Dropdown.ItemText>
        {filteredCiudades.length > 0 ? (
          filteredCiudades.map((ciudad) => (
            <Dropdown.Item
              key={ciudad.id}
              as="button"
              onClick={(e) => handleCiudadItemClick(e, ciudad)}
            >
              {ciudad.text}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.ItemText>No se encontraron resultados</Dropdown.ItemText>
        )}
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className="Pais" variant="primary" id="dropdown-item-button">
        {selectedPais ? selectedPais.text : 'País'}
      </Dropdown.Toggle>
      <Dropdown.Menu show style={{ maxHeight: '200px', overflow: 'auto' }} className="scrollable-menu">
        <Dropdown.ItemText>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search..."
          />
        </Dropdown.ItemText>
        {filteredPaises.length > 0 ? (
          filteredPaises.map((pais) => (
            <Dropdown.Item
              key={pais.id}
              as="button"
              onClick={(e) => handlePaisItemClick(e, pais)}
            >
              {pais.text}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.ItemText>No se encontraron resultados</Dropdown.ItemText>
        )}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
}

export default DropdownItemTagsExample;
