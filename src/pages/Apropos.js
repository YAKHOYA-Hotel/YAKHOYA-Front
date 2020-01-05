import React, { Component } from 'react';
import logo from '../images/logo1.jpg';
import ImgParis from '../images/Apropos1.jpg';
import ImgChambre from '../images/Apropos2.jpg';
import ImgResto from '../images/Apropos3.jpg'
import StyledHero from '../Composants/StyledHero';
import {Link} from 'react-router-dom';
import Banner from '../Composants/Banner';


import {FaHotel} from 'react-icons/fa';
import {MdRoomService} from 'react-icons/md';
import {FaBed} from 'react-icons/fa'

export default class Apropos extends Component {
    render() {
        return (
            <>
            <StyledHero img={logo}>

                 <Banner title="Qui sommes-nous">
                    <Link to="/Accueil" className="btn-primary">
                      Retourner à l'accueil
        
                    </Link>
                 </Banner>

            </StyledHero>
             

                   <section className="single-room">
                      
                     <div className="single-room-info">
                       <article className="desc">
                        <h3 className="yakhouya-title"><FaHotel/> YAKHOUYA Hotêls</h3>
                        <p>C'est plus de 40 hôtels en France,
                             situés au cœur des villes incontournables et adaptés à
                              vos séjours professionnels comme à vos vacances. Que vous soyez 
                              chez nous pour vous détendre, vous reposer, manger, travailler ou 
                              vous retrouver, nos espaces et nos équipes vous sont entièrement dédiés.</p>
                       </article>

                       <article className="info">
                           <img src={ImgParis} alt="Yakhouya"/>

                       </article>
                     </div>
                      
                    </section>

                    <section className="room-extras">
                    <div className="single-room-images">

                    <article>
                    <h3 className="yakhouya-resto"><MdRoomService/> La réstauration</h3> 
                       <p>Repas d’affaires ou un déjeuner en 
                           famille, nous avons toujours la 
                           solution pour vous régaler 7j/7.</p>
                    </article> 
                    </div>
                    </section>

                    <section className="room-extras">
                    <div className="single-room-images">

                    

                    <p><h6>Au petit déjeuner</h6> vous démarrez la journée du bon pied, à votre rythme : buffet varié, petit-déjeuner rapide ou service en chambre.</p>
                    <p><h6>Au GourmetBar</h6> vous appréciez nos thématiques gourmandes dans un cadre convivial. Pour picorer ou boire un verre, le GourmetBar vous accueille à toute heure.</p>
                    <p><h6>Au restaurant</h6> découvrez nos offres de plats locaux et internationaux, toujours avec l’exigence d'une cuisine simple, moderne et équilibrée.</p>
                           
                      
                       </div>
                       <article className="img-apropos">
                        <img src={ImgResto} alt="Yakhouya"/>

                       </article>

                    </section> 






                    <section className="single-room">
                      <div className="single-room-info">
                       <article className="desc">
                        <h3 className="yakhouya-chambre"><FaBed/> Nos chambres</h3>
                        <p>Spacieuse, contemporaine et parfaitement modulable, la chambre Yakhoya Hotel 
                            a été conçue comme un véritable espace à vivre. WiFi, grand écran plat avec 
                            connectiques, station d'accueil iPod et literie LIVE N DREAM* : tout l'équipement
                             nécessaire à un séjour agréable est là, que vous soyez seul, accompagné ou en famille.</p>
                       </article>

                       <article className="info">
                       <img src={ImgChambre} alt="Yakhouya"/>
                       </article>
                       </div>
                      </section>

                
                    

           



            </>
        )
    }
}
