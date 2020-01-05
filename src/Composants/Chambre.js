import React from 'react';
import {Link} from 'react-router-dom';

export default function Chambre({chambre}) {
    const {name,slug,images,price} = chambre;
    return (
        <>
         <article className="room">
            <div class="img-container">
             <img src={images[0]} alt="img"/>
             <div className="price-top" >
                 <p>A partir de </p>
                 <h6>{price}€</h6>
             </div>
             <Link to={`/DetailChambre/${slug}`} className="btn-primary room-link">Détails</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
        
        </>  
    )
}
