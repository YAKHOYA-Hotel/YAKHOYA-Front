import React, { Component } from 'react';
import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
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
                      <img src={logo} alt="YAKHOUYA"  width='200px'  />  
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
                          <Link to="/Carte">Map</Link>
                      </li>
                      <div className="btn-connexion">
                      
                          <Link to="/Connexion">Se connecter</Link>
                     
                      </div>
                   </ul>
                </div>
            </nav>
        )
    }
}
