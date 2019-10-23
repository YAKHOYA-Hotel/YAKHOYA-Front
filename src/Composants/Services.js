import React, { Component } from 'react';
import Title from './Title';

import {FaWifi} from 'react-icons/fa';
import {FaWheelchair} from 'react-icons/fa';
import {FaParking} from 'react-icons/fa';
import {FaTv} from 'react-icons/fa';
import {FaCocktail} from 'react-icons/fa';
import {FaPlaystation} from 'react-icons/fa';
import {FaDog} from 'react-icons/fa';
import {FaSmokingBan} from 'react-icons/fa';

export default class Services extends Component {
    state={
     services:[
        {
            icon:<FaWheelchair/>,
            title: 'P.M.R.',
            info:'Logement entièrement accessible en fauteuil roulant, situé au rez-de-chaussée.'
        },
        {
            icon:<FaParking/>,
            title: 'Parking',
            info:'Un parking gratuit et privé est disponible sur place (sans réservation préalable).'
        },
        {
            icon:<FaDog/>,
            title: 'Animaux ',
            info:'Les animaux de compagnie sont admis (sans supplément).'
        },
        {
            icon:<FaCocktail/>,
            title: 'Bar ',
            info:'Un bar est disponible au rez-de-chaussée, et est accessible 24h/24.'
        },
        {
            icon:<FaWifi/>,
            title: 'Wi-Fi ',
            info:'Une connexion Wi-Fi est disponible dans les chambres gratuitement.'
        },
        {
            icon:<FaTv/>,
            title: 'Télévision ',
            info:"Toute nos chambres sont équipées d'une télé à ecran plat."
        },
        {
            icon:<FaPlaystation/>,
            title: 'Jeux',
            info:'Une console de jeux vidéo est disponible dans chaque chambre.'
        },
        {
            icon:<FaSmokingBan/>,
            title: 'Non-fumeurs',
            info:'Toutes nos chambre sont non-fumeurs.'
        }
    ]
}
    render() {
        return (
            <section className="services">
                <Title title="les services de nos hôtels"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                    return <article className="service" key={index}>
                              <span>{item.icon}</span>
                              <h6> {item.title}</h6>
                              <p>{item.info}</p>
                           </article>
                    })}
                </div>
            </section>
        )
    }
}
