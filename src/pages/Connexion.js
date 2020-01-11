import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { login } from '../Functions/UserFunctions';
import MyButtom from '../Composants/MyButtom'
import MyButton from '../Composants/MyButtom';
import StyledHero from "../Composants/StyledHero"
import Hero from "../Composants/Hero"
import defaultBcg from "../images/defaultBcg.jpeg"


export default class Connexion extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
     //   e.preventDefault()

      //  const user = {
      //      email: this.state.email,
      //      password: this.state.password
       // }

       // login(user).then(res => {
          //  if (res) {
           //     if(localStorage.usertoken){
           //     this.props.history.push(`/profile`)}
           //     else if(localStorage.admintoken){
           //     this.props.history.push(`/profileAdmin`)}
          //  }
      //  })
    }




    render () {
        return (
            
            <section className="Compte">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h1">Connectez vous</h1>



                            <div className="form-group col-md-12 mt-5">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="E-mail"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group col-md-12 mt-5">
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Mot de passe"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="createAccount">
                            
                          
                              {/*<button type="submit">Authentification</button>*/}

                                <Link to="/Accueil">
                                <button type="submit" className="MyButtom">Authentification</button>
                                </Link>
                                
                                
                                <Link to="/RecupPass" className="small-connexion">
                                <small className="small-connexion">Mot de pass oublié ?</small>
                                </Link>

                                <Link to="/CreerCompte" className="small-connexion">
                                <small className="small-connexion">Créer un Compte</small>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
           
        )
    }



    
}
