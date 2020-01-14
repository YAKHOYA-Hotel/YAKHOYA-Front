import React, { Component } from 'react';
import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


export const didm = tok => {
    
}


export default class NavBar extends Component {
    state={
       isOpen:false,
       nom:localStorage.name,
       prenom:localStorage.lastname,
       token:localStorage.usertoken

    }
    

    
    componentDidMount(){
        const lnom = localStorage.name
        const lprenom = localStorage.lastname
        const ltoken = localStorage.usertoken

        this.setState({
             nom:lnom,
             prenom:lprenom,
             token:ltoken

        })
    }



    logOut(e){
        e.preventDefault()
        if (localStorage!==null){
            localStorage.removeItem('username')
            localStorage.removeItem('lastname')
            localStorage.removeItem('usertoken')
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            
            this.componentDidMount()
        }
            
        }
    


    handleToggle = () => {
        const lnom = localStorage.name
        const lprenom = localStorage.lastname
        const ltoken = localStorage.usertoken
       this.setState({
           isOpen:!this.state.isOpen,
           nom:lnom,
             prenom:lprenom,
             token:ltoken

        }) 
    }




    render() {

        const connecte = (
            <>
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

                      
                      
                      
                      

                      <li className="user">
                        <Link to="/Compte"><FaUserAlt/> {this.state.prenom} {this.state.nom} </Link>
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

                         <Link className="dec"  onClick={this.logOut.bind(this)}>Déc</Link>

                     </li>

                     </>

        )

        const nonConnecte =(

            <>
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

                      
                      
                      

                      <li className="user">
                        <Link to="/Connexion" >Connexion</Link>
                      </li>

                     </ul>


                     <div className="sociale">
                        <ul className="nav-links">
                              <li className="facebook"><FaFacebookSquare/></li>
                              <li className="instagram"><FaInstagram/></li>
                              <li className="twitter"><FaTwitterSquare/></li>
                        </ul>
                     </div>

                     </>

        )
        
        return (
            
            <nav className="navbar">
                <div className="nav-center">
                   <div className="nav-header">
                

                   {/* drawer */}

                   
            
        




                    {/* drawer */}

                     <Link to="/">
                      <img src={logo} alt="YAKHOUYA"  width='155px'  />  
                     </Link>

                     <button className="nav-btn" type="button" onClick={this.handleToggle}>
                     <FaAlignRight className="nav-icon"/>
                     </button>
                   </div>

                   {(localStorage.usertoken)? connecte : nonConnecte}

                     
                      
                </div>
                
            </nav>
        )
     
        
         
           
        }

    }
   

