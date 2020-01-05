import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Accueil from './pages/Accueil';
import ListeHotels from './pages/ListeHotels';
import Hotel from './pages/Hotel';
import Erreur from './pages/Erreur';
import Apropos from './pages/Apropos';
import DetailChambre from './pages/DetailChambre';
import Connexion from './pages/Connexion';
import CreerCompte from './pages/CreerCompte';
import RecupPass from './pages/RecupPass';


import NavBar from './Composants/NavBar';



function App() {
  return (
    <>
    <NavBar/>
    <Switch>
    <Route exact path="/"  component={Accueil}/>
    <Route exact path="/Accueil"  component={Accueil}/>
    <Route exact path="/Connexion"  component={Connexion}/>
    <Route exact path="/CreerCompte"  component={CreerCompte}/>
    <Route exact path="/RecupPass"  component={RecupPass}/>
    <Route exact path="/DetailChambre/:slug" component={DetailChambre} />
    <Route exact path="/ListeHotels"  component={ListeHotels}/>
    <Route exact path="/ListeHotels/:slug"  component={Hotel}/>
    <Route exact path="/Apropos"  component={Apropos}/>
    <Route exact path="/Erreur"  component={Erreur}/>
    <Route component={Erreur}/>
    </Switch>
    </>
  );
}

export default App;
