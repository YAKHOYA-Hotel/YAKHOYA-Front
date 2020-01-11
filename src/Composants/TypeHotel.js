import React, { Component } from 'react';
import {ChambreContext} from '../context';
import Loading from './Loading';
import Hotel from './Hotel';
import Title from './Title';
import ImgMap from '../images/map.png'
import { Link } from 'react-router-dom';


export default class TypeChambre extends Component {
    static contextType = ChambreContext;
    render() {
        let {hotels:listeHotels,loading} = this.context;

        listeHotels = listeHotels.map(hotel=>{
          return <Hotel key={Hotel.id} hotel={hotel} />
        })
        return (
<>
            <section className="featured-rooms">
           
                <Title title="Nos hôtels"/>
                <div className="featured-rooms-center" >
                  {loading?<Loading/>:listeHotels}  
                  
                </div>

                
            
            </section>
            

</>

        )
    }
}
