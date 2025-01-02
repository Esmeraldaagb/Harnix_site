import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';
import Employe from '../view/employe'; 
import Permissions from '../view/permissions'; 


const Sidebar = () => {
  const [activeKey, setActiveKey] = useState('dashboard'); // Onglet actif par défaut

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  const renderContent = () => {
    switch (activeKey) {
      case 'dashboard':
        return <div>Bienvenue sur le tableau de bord !</div>;

      case 'employe':
        return <Employe />; 

      case 'permissions':
        return <Permissions />;

      case 'statistique':
        return <div>Consultez vos statistiques ici.</div>;

      default:
        return <div>Veuillez sélectionner une option dans le menu.</div>;
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh' }}>
     
      <Navbar className="sidebar">
        <Navbar.Brand href="#home" className="mb-4 harnix-style">
          HARNIX
        </Navbar.Brand>
        <Nav
          className="flex-column"
          activeKey={activeKey}
          onSelect={handleSelect}
        >
          <Nav.Link
            eventKey="dashboard"
            className={`nav-link ${activeKey === 'dashboard' ? 'active' : ''} circle`}
          >
            Dashboard
          </Nav.Link>

          <Nav.Link
            eventKey="employe"
            className={`nav-link ${activeKey === 'employe' ? 'active' : ''} circle`}
          >
            Employés
          </Nav.Link>

          <Nav.Link
            eventKey="permissions"
            className={`nav-link ${activeKey === 'permissions' ? 'active' : ''} circle`}
          >
            Permissions
          </Nav.Link>

          <Nav.Link
            eventKey="statistique"
            className={`nav-link ${activeKey === 'statistique' ? 'active' : ''} circle`}
          >
            Statistique
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Main Content Area */}
      <div
        className="main-content"
        style={{
          flex: 1,
          padding: '20px',
          background: '#ffffff',
          overflowY: 'auto',
        }}
      >
        {renderContent()} {/* Affiche le contenu dynamique */}
      </div>
    </div>
  );
};

export default Sidebar;
