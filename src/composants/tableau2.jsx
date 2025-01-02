import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { MdCheck, MdClose,MdFileDownload } from 'react-icons/md'; // Material Icons
import '../css/tableau.css';
function Tableau2() {
  // État pour stocker les données du tableau
  const [data, setData] = useState([
    {
      id: 1,
      nom: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      contact: '123456789',
      adresse: 'Paris, France',
      justificatif: 'https://example.com/justificatif1.pdf',
       accepte:  <MdCheck size={24} color="green" /> ,
      refuse: <MdClose size={24} color="red" /> ,
    },
    {
      id: 2,
      nom: 'Marie Curie',
      email: 'marie.curie@example.com',
      contact: '987654321',
      adresse: 'Varsovie, Pologne',
      justificatif: 'https://example.com/justificatif1.pdf',
      accepte:  <MdCheck size={24} color="green" /> ,
      refuse: <MdClose size={24} color="red" /> ,
    },
    // Ajoutez d'autres données ici
  ]);

  return (
    <div>
          <p className='p'>{data.length} employés trouvé</p>
      <Table responsive="sm" className='tableau-position'>
        <thead >
          <tr className="table-row">
            <th>Id</th>
            <th>Nom & Prénoms</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Adresse</th>
            <th>Justificatif</th>
            <th>Accepté</th>
            <th>Refusé</th>


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
              <td> {item.justificatif}
                    <a target="_blank" rel="noopener noreferrer">
                        <MdFileDownload size={24} color="blue" /> {/* Icône Material-UI */}
                    </a>
              </td>
              <td>{item.accepte}</td>
              <td>{item.refuse}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tableau2;
