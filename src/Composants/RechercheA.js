import React, { Component } from 'react';
import BtnRechercher from '../Composants/BtnRechercher';
import SelectC from './SelectC';
import {Link} from 'react-router-dom';
import ImgMap from '../images/map.png'


export default class RechercheA extends Component {
    render() {
        return (
            <div className="recherche-a">
               
                <h4>Trouver un logement:</h4>

                <article className="arrive-depart">

                  <div className="pading">
                    <label >Type de chambre
                    <SelectC/>
                    </label>
                    
                  </div>


                  <div className="pading">
                    <label><p>Arrivée</p></label>
                    <input type="date" className="input"/>
                  </div>
                    
                  <div className="pading">
                    <label><p>Départ</p></label>
                    <input type="date" className="input"/>
                  </div>

                  
                  <div className="pading">
                  
                    <button type="submit" className="btn-primary-r">Rechercher</button>
                  </div>
                  
                   
                


                </article>

                <div>
                <Link to="/Map">
                    <img src={ImgMap} alt="Carte"/>
                </Link>
                <p>Sur la carte</p>

                </div>

                

                
                
                
                

                
                
            </div>
        )
    }
}
