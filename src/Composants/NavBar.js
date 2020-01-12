import React, { Component } from 'react';
import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaUserCircle} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom';
import { Badge } from 'react-bootstrap';


export const didm = tok => {
    
}


export default class NavBar extends Component {
    state={
       isOpen:false,
       nom:'',
       prenom:'',
       token:''

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
       this.setState({isOpen:!this.state.isOpen}) 
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

                      
                      
                      <li className="ico-user">
                      <FaUserCircle/>
                      </li>

                      <li className="user">
                        <Link to="/Compte"> {this.state.prenom} {this.state.nom} </Link>
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

                         <Link tp="/Connexion" onClick={this.logOut.bind(this)}>Déconnexion</Link>

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
                     <Link to="/">
                      <img src={logo} alt="YAKHOUYA"  width='155px'  />  
                     </Link>

                     <button className="nav-btn" type="button" onClick={this.handleToggle}>
                     <FaAlignRight className="nav-icon"/>
                     </button>
                   </div>

                   {localStorage.usertoken?connecte:nonConnecte}

                     
                      
                </div>
                
            </nav>
        )
     
        
         
           
        }

    }
   

