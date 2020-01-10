import React from 'react';
import Hero from '../Composants/Hero'
import TypeHotel from '../Composants/TypeHotel';
import Services from '../Composants/Services';

const ListeHotels = () => {
    return (
        <>
        <Hero hero="roomsHero"/>
        <TypeHotel/>
        <Services/>
        </>
    )
}

export default ListeHotels
