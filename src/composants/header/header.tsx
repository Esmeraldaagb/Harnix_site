import React, { useState } from 'react';
import Button from '../button/button';
import logo from '../../assets/logo1.png';
import wave from '../../assets/wave.svg';
import Caroussel from '../caroussel/caroussel'; 

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { id: 1, title: "Nos Activités", path: "/activite" },
    { id: 2, title: "Recrutement", path: "/recrutement" },
    { id: 3, title: "Nos Produits", path: "/produit" },
    { id: 4, title: "Communauté", path: "/communaute" },
  ];

  const renderNavItems = () => {
    return navItems.map((item) => (
      <li key={item.id}>
        <a 
          href={item.path} 
          className="text-sm font-normal font-sans text-white flex justify-center p-2 transition duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-lg rounded"
        >
          {item.title}
        </a>
      </li>
    ));
  };

  return (
    <div className="relative">
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${wave})` }}>
        <header className="bg-zinc-900 h-20 p-4 fixed top-0 left-0 right-0 z-50">
          <nav className="flex items-center justify-between w-full relative">
            {/* Conteneur du logo et du titre */}
            <div className="flex items-center gap-1">
              <img width={35} height={35} src={logo} alt="Logo" />
              <h2 className="font-serif text-white ml-4 uppercase text-2xl">HARNIX</h2>
            </div>

            {/* Bouton pour ouvrir ou fermer le menu déroulant */}
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden p-3">
              {isNavOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>

            {/* Menu de navigation */}
            <div
              className={`absolute top-20 left-0 w-full bg-zinc-900 rounded-md shadow-lg md:static md:flex md:justify-end ${
                isNavOpen ? 'block' : 'hidden'
              }`}
            >
              <ul className="flex md:flex-row flex-col md:space-x-4 space-y-2 md:space-y-0 justify-end">
                {renderNavItems()}
              </ul>
              <Button 
                label="Investir" 
                width="600" 
                height="300" 
                className="p-3 text-sm font-normal font-sans bg-white rounded-md text-center font-semibold ml-4"
              />
            </div>
          </nav>
        </header>

     
        <Caroussel />
      </div>
    </div>
  );
};

export default Header;
