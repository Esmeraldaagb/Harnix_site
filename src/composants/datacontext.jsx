import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, nom: 'Jean Dupont', email: 'jean.dupont@example.com', contact: '123456789', adresse: 'Paris, France' },
    { id: 2, nom: 'Marie Curie', email: 'marie.curie@example.com', contact: '987654321', adresse: 'Varsovie, Pologne' },
  ]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
