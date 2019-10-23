import React from 'react';
import Hero from '../Composants/Hero';
import Banner from '../Composants/Banner';
import {Link} from 'react-router-dom';

export default function Erreur() {
    return (
       <>
       <Hero>
           <Banner title='404' subtitle="Page introuvable">
               <Link to="/" className="btn-Apropos">Retourner à l'accueil</Link>
           </Banner>
       </Hero>
       </>

    )
}
