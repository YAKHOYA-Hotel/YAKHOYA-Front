import React, { Component } from 'react';
import SelectC from './SelectC';
import {Link} from 'react-router-dom';
import ImgMap from '../images/map.png'


export default class RechercheA extends Component {
    render() {
        return (
            <div className="recherche-a">
               

                <article className="arrive-depart">

                  <div className="pading">
                    <label className="recherche-label">Type de chambre
                    
                    </label>
                    <SelectC/>
                    
                    
                  </div>


                  <div className="pading">
                    <label className="recherche-label"><p className="recherche-label">Arrivée</p></label>
                    <input type="date" className="input"/>
                  </div>
                    
                  <div className="pading">
                    <label className="recherche-label"><p className="recherche-label">Départ</p></label>
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
