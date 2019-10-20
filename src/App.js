import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Accueil from './pages/Accueil';
import ListeHotels from './pages/ListeHotels';
import Hotel from './pages/Hotel';
import Erreur from './pages/Erreur';

import NavBar from './Composants/NavBar';



function App() {
  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path="/"  component={Accueil}/>
    <Route exact path="/ListeHotels"  component={ListeHotels}/>
    <Route exact path="/ListeHotels/:slug"  component={Hotel}/>
    <Route exact path="/Erreur"  component={Erreur}/>
    <Route component={Erreur}/>
    </Switch>
    </>
  );
}

export default App;
