import React, { Component } from 'react';
import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom';





export default class NavBar extends Component {
    state={
       isOpen:false 
    }
    handleToggle = () => {
       this.setState({isOpen:!this.state.isOpen}) 
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                   <div className="nav-header">
                     <Link to="/">
                      <img src={logo} alt="YAKHOUYA"  width='155px'  />  
                     </Link>

                     <button className="nav-btn" type="button" onClick={this.handleToggle}>
                     <FaAlignRight className="nav-icon"/>
                     </button>
                   </div>

                   <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"} >
                       
                      <li>
                          <Link to="/">Accueil</Link>
                      </li>
                      <li>
                          <Link to="/ListeHotels">Hôtels</Link>
                      </li>
                      <li>
                          <Link to="/Map">Carte</Link>
                      </li>

                      <li>
                          <Link to="/Apropos">A propos</Link>
                      </li>
                      
                      <li className="ico-user">
                      <FaUserCircle/>
                      </li>

                      <li className="user">
                          <Link to="/Connexion">Lyes BELKHIRI</Link>
                      </li>

                      


                      
                      
                   </ul>
                          <div className="sociale">
                          <ul className="nav-links">
                              <li className="facebook"><FaFacebookSquare/></li>
                              <li className="instagram"><FaInstagram/></li>
                              <li className="twitter"><FaTwitterSquare/></li>
                          </ul>
                          </div>
                          <li className="dec">
                          <Link to="/Connexion">Déconnexion</Link>
                         </li>
                      
                </div>
                
            </nav>
        )
    }
}
