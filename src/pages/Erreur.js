import React from 'react';
import Hero from '../Composants/Hero';
import Banner from '../Composants/Banner';
import {Link} from 'react-router-dom';

export default function Erreur() {
    return (
       <>
       <Hero>
           <Banner title='Error 404' subtitle="La page est introuvable">
               <Link to="/" className="btn-Apropos">Retourner à l'accueil</Link>
           </Banner>
       </Hero>
       </>

    )
}
