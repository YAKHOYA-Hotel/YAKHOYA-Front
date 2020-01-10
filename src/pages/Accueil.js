import React from 'react';
import Hero from '../Composants/Hero';
import Recherche from '../Composants/Recherche';
import Banner from '../Composants/Banner';
import {Link} from 'react-router-dom';
import Services from '../Composants/Services';
import TypeChambre from '../Composants/TypeChambre';
import RechercheA from '../Composants/RechercheA';




export default function Accueil() {
    return (
        <>
        <Hero>
            
            <Banner 
            title="YAKHOUYA Hôtels, Paris"
            subtitle="Chambres simples, doubles, familiales à partir de 180 €" >
            </Banner>

            

            

        </Hero>

        <RechercheA/>
        
    
        <TypeChambre/>
        <Services/>
        </>
    )
}


