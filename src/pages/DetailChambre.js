import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg1.jpg';
import Hero from '../Composants/Hero';
import Banner from '../Composants/Banner';
import {Link} from 'react-router-dom';
import {ChambreContext} from '../context';
import StyledHero from '../Composants/StyledHero';
import {FaInfo} from 'react-icons/fa'
import {FaHotel} from 'react-icons/fa'


export default class DetailChambre extends Component {

    constructor(props){
        super(props)
     this.state={
         slug : this.props.match.params.slug,
         defaultBcg
     };
    }

    static contextType = ChambreContext;


    render() {


        const {getRoom} = this.context;
        const chambre = getRoom(this.state.slug);


        if(!chambre){
            return (
                   <div className="error">
                      <h3>Aucune chambre trouvée</h3>
                      <Link to ='/Accueil' className="btn-primary">
                        Retourner à l'accueil  
                      </Link>
                   </div>
            );
        }



        const {
            name,
            description,
            size,
            price,
            capacity,
            services,
            breakfast,
            images} = chambre;
            const [preImg,...restImg] = images

        return (
            <> 
                    <StyledHero img={preImg}>

                    <Banner title={`${name}`}>
                        <Link to="/Accueil" className="btn-primary">
                            Retourner à l'accueil
                            
                        </Link>
                    </Banner>
                    
                    </StyledHero>

                    <section className="single-room">
                      <div className="single-room-images">
                        {restImg.map((item,index) => {
                          return <img key={index} src ={item} alt={name} />
                        })}
                      </div>
                     
                     <div className="single-room-info">
                       <article className="desc">
                        <h3> Détails:</h3>
                        <p>{description}</p>
                       </article>

                       <article className="info">
                           <h3>Autres information</h3>
                           <h5>Prix: <h6>{price}€</h6></h5>
                           <h5>Superficie: <h6>{size}</h6></h5>
                           <h5>Capacité: <h6>{capacity}</h6></h5>
                           <h5>Petit déjeuner: <h6>{breakfast}</h6></h5>

                       </article>
                     </div>
                      
                    </section>
                    <section className="room-extras">
                      <h3>Services inclus</h3> 
                       <ul className="extras">
                         {services.map((item,index)=>{
                         return <li key={index}>+{item}</li>
                         })}
                       </ul>

                    </section>
                    <section className="room-extras">
                      <h3><FaHotel/> Reserver maintenant</h3> 
                       

                    </section>
            </>
        )      
    }
}
