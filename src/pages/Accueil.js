import React from 'react';
import Hero from '../Composants/Hero';
import Recherche from '../Composants/Recherche';
import Banner from '../Composants/Banner';
import {Link} from 'react-router-dom';
import Services from '../Composants/Services';
import TypeChambre from '../Composants/TypeChambre';


export default function Accueil() {
    return (
        <>
        <Hero>
            <Banner 
            title="YAKHOUYA Hôtels, Paris"
            subtitle="Chambres simple, double et familiale à partir de 180 €" >
                
           <Link to="/Apropos" className="btn-Apropos">Qui sommes-nous ?</Link>
          
           
            
            </Banner> 

            
        </Hero>
        
        <TypeChambre/>
        <Services/>
        </>
    )
}


