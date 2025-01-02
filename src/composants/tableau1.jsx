import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../css/tableau.css'


function Tableau1() {
  // État pour stocker les données du 1
  const [data, setData] = useState([
    {
      id: 1,
      nom: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      contact: '123456789',
      adresse: 'Paris, France',
    },
    {
      id: 2,
      nom: 'Marie Curie',
      email: 'marie.curie@example.com',
      contact: '987654321',
      adresse: 'Varsovie, Pologne',
    },

  ]);

  return (
    <div>

          <p className="p">{data.length} employés trouvés</p>
      <Table responsive="sm" className='tableau-position'>
        <thead >
          <tr className="table-row">
            <th>Id</th>
            <th>Nom & Prénoms</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Adresse</th>
          </tr>
        </thead>

        <tbody>
   
          {data.map((item) => (
            <tr key={item.id} className="table-row">
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.adresse}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tableau1;
