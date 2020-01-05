import React, { Component } from 'react';
import {ChambreContext} from '../context';
import Loading from './Loading';
import Chambre from './Chambre';
import Title from './Title';

export default class TypeChambre extends Component {
    static contextType = ChambreContext;
    render() {
        let {chambres:listeChambres,loading} = this.context;

        listeChambres = listeChambres.map(chambre=>{
          return <Chambre key={Chambre.id} chambre={chambre} />
        })
        return (
            <section className="featured-rooms">
                <Title title="Nos chambres"/>
                <div className="featured-rooms-center" >
                  {loading?<Loading/>:listeChambres}  
                </div>

            </section>
        )
    }
}
