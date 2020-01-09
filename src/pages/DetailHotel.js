import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg1.jpg';
import Hero from '../Composants/Hero';
import Banner from '../Composants/Banner';
import {Link} from 'react-router-dom';
import {ChambreContext} from '../context';
import StyledHero from '../Composants/StyledHero';
import {FaInfo} from 'react-icons/fa'
import {FaHotel} from 'react-icons/fa'


export default class DetailHotel extends Component {

    constructor(props){
        super(props)
     this.state={
         slug : this.props.match.params.slug,
         defaultBcg
     };
    }

    static contextType = ChambreContext;


    render() {


        const {getHotel} = this.context;
        const hotel = getHotel(this.state.slug);


        if(!hotel){
            return (
                   <div className="error">
                      <h3>Aucun hôtel trouvé</h3>
                      <Link to ='/Accueil' className="btn-primary">
                        Retourner à l'accueil  
                      </Link>
                   </div>
            );
        }



        const {
            nom,
            adresse,
            description,
            img,
            imgH
            } = hotel;
            

        return (
            <> 
                    <StyledHero img={imgH}>

                    <Banner title={`${nom}`}>
                       <p>{adresse}</p>
                        <Link to="/ListeHotels" className="btn-primary">
                            Nos hôtels
                            
                        </Link>
                    </Banner>
                    
                    </StyledHero>

                    <article>
                        <h5 className="hotel-info-title">A propos de l'hôtel</h5>
                        <p className="hotel-info-text">{description}</p>
                    </article>

                   
                    
            </>
        )      
    }
}
