import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assurez-vous que le chemin est correct
import Dashboard from './Dashboard'; // Composant pour la page Dashboard
import Employees from './Employees'; // Composant pour la page Employés
import Permissions from './Permissions'; // Composant pour la page Permissions
import Statistics from './Statistics'; // Composant pour la page Statistique

function Routes() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Contenu principal */}
        <div style={{ marginLeft: '250px', width: '100%' }}>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/permissions" component={Permissions} />
            <Route exact path="/statistics" component={Statistics} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Routes;
