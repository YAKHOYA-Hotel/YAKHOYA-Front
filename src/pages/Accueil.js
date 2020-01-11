import React from 'react';
import Hero from '../Composants/Hero';
import Banner from '../Composants/Banner';
import {Link} from 'react-router-dom';
import Services from '../Composants/Services';
import TypeChambre from '../Composants/TypeChambre';
import RechercheA from '../Composants/RechercheA';




export default function Accueil() {
    return (
        <>
        <Hero>
            <div className="deux-banner">
            <Banner 
            title="YAKHOUYA Hôtels, Paris"
            subtitle="Chambres simples, doubles, familiales à partir de 180 €" >
            </Banner>
            
            <RechercheA/>
            

            </div>

            

            

            

        </Hero>

        
        
    
        <TypeChambre/>
        <Services/>
        </>
    )
}


