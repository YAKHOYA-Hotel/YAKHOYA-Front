import React, { Component } from 'react';
import { register } from '../Functions/UserFunctions';
import {Link} from 'react-router-dom';


export default class CreerCompte extends Component {
   
    constructor() {
        super()
        this.state = {
            nom: '',
            prenom: '',
            adresse: '',
            ville: '',
            code_postal: '',
            password: '',
            password2: '',
            email: '',
            phone: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            adresse: this.state.adresse,
            ville: this.state.ville,
            code_postal: this.state.code_postal,
            password: this.state.password,
            password2: this.state.password2,
            phone: this.state.phone
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
           
            <section className="Compte">
                    <h1 className="h1">Créer un compte</h1>
                        <form noValidate onSubmit={this.onSubmit}>
                           
                            <div>
                                <label htmlFor="nom">Nom</label>
                                <input type="text"
                                    className="form-control"
                                    name="nom"
                                    placeholder="Nom"
                                    value={this.state.nom}
                                    onChange={this.onChange} />
                            </div>


                            <div>
                                <label htmlFor="prenom">Prenom</label>
                                <input type="text"
                                    className="form-control"
                                    name="prenom"
                                    placeholder=" Prenom"
                                    value={this.state.prenom}
                                    onChange={this.onChange} />
                            </div>


                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder=" E-mail"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>


                            <div>
                                <label htmlFor="phone">Téléphone</label>
                                <input type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder=" Téléphone"
                                    value={this.state.phone}
                                    onChange={this.onChange} />
                            </div>


                            <div>
                                <label htmlFor="adresse">Addresse</label>
                                <input type="text"
                                    className="form-control"
                                    name="adresse"
                                    placeholder="Adresse"
                                    value={this.state.adresse}
                                    onChange={this.onChange} />
                            </div>


                            <div >
                                <label htmlFor="ville">Ville</label>
                                <input type="text"
                                    className="form-control"
                                    name="ville"
                                    placeholder="Ville"
                                    value={this.state.ville}
                                    onChange={this.onChange} />
                            </div>


                            <div>
                                <label htmlFor="code_postal">Code Postal</label>
                                <input type="text" 
                                    className="form-control"
                                    name="code_postal"
                                    placeholder="Code postal"
                                    value={this.state.code_postal}
                                    onChange={this.onChange} />
                            </div>
                            
                            <div>
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>


                            <div>
                                <label htmlFor="password2">Confirmer mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="password2"
                                    placeholder="Password"
                                    value={this.state.password2}
                                    onChange={this.onChange} />
                            </div>

                            <div className="createAccount">
                                <Link to="/Connexion">
                                <button type="submit">       Créer       </button>
                                </Link>
                                
                                <Link to="/Connexion">
                                <small>Vous avez déja un compte?</small>
                                </Link>

                            </div>
                        </form>
                    
             
            </section>
  
        )
    }


    
}
