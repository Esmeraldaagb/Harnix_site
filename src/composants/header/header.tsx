import React from 'react';
import Button from '../button/button'
import logo from '../../assets/logo1.png';
import wave from '../../assets/wave.svg'

// Définition de l'interface pour les props du composant Header
interface HeaderProps {
  title?: string;
  children?:React.ReactNode;
}

// Composant Header
const Header: React.FC<HeaderProps> = () => {
  // Tableau de navigation (exemple)
  const navItems = [
    { id: 1, title: "Nos Activités", path: "/activite" },
    { id: 2, title: "Recrutement", path: "/recrutement" },
    { id: 3, title: "Nos Produits", path: "/produit" },
    { id: 4, title: "Communauté", path: "/communaute" },
  ];

  // Fonction pour générer les éléments de navigation à partir du tableau navItems
  const renderNavItems = () => {
    return navItems.map((item) => (
      <li key={item.id} >
      <a href={item.path} className="text-sm font-normal font-sans text-white flex justify-center mt-6 mr-6">
        {item.title}
      </a>
    </li>
    ));
  };

  return (
    <div className="bg-cover bg-center " style={{ backgroundImage: `url(${wave})` }}>
        <header className="bg-zinc-900 h-20 p-4">
        
          <nav className="flex items-center justify-between w-full">

          <div className='flex items-center gap-1'>
             <img width={35}  height={35} src={logo} alt="Logo" />

              <h2 className="font-serif tracking-wide text-white ml-4 uppercase text-2xl">HARNIX</h2>
          </div>

          <div className='flex items-center justify-center md:justify-between'>
              <ul className="md:flex hidden space-x-4 flex-row"> 
                {renderNavItems()}
              </ul>

              <Button 
                label="Investir" 
                width='600' 
                height='300' 
                className='p-3 text-sm font-normal font-sans bg-white rounded-md text-center font-semibold'
              />
         </div>

         

             
          </nav>


        </header>
    </div>
  );
};

export default Header;