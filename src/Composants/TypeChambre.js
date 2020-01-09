import React, { Component } from 'react';
import {ChambreContext} from '../context';
import Loading from './Loading';
import Chambre from './Chambre';
import Title from './Title';
import ImgMap from '../images/map.png'
import { Link } from 'react-router-dom';


export default class TypeChambre extends Component {
    static contextType = ChambreContext;
    render() {
        let {chambres:listeChambres,loading} = this.context;

        listeChambres = listeChambres.map(chambre=>{
          return <Chambre key={Chambre.id} chambre={chambre} />
        })
        return (
<>
            <section className="featured-rooms">
           
                <Title title="Nos chambres"/>
                <div className="map-link">
                  <div>
                  <Link to="/Map">
                    <img src={ImgMap} alt="Carte"/>
                  </Link>
                  <p className="map-link-p">Sur la carte</p>
                  </div>
                </div>
                <div className="featured-rooms-center" >
                  {loading?<Loading/>:listeChambres}  
                  
                </div>

                
            
            </section>
            

</>

        )
    }
}
