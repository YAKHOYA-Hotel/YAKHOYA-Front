import React from 'react';
import {Link} from 'react-router-dom';
import stars from '../images/stars.png';

export default function Hotel({hotel}) {
    const {nom,slug,adresse,description,img} = hotel;
    return (
        <>
         <article className="room">
            <div class="img-container">
             <img src={img} alt="img"/>
             <div className="price-top" >
                 <p> <img src={stars} alt="5 étoiles"/> </p>
             </div>
             <Link to={`/DetailHotel/${slug}`} className="btn-primary room-link">Reserver</Link>
            </div>
            <p className="room-info">{nom}</p>
            <p className="room-info-adr">{adresse}</p>
            
        </article>
        
        </>  
    )
}