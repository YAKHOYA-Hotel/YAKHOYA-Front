import React, { Component } from 'react';
import { register } from '../Functions/UserFunctions';
import {Link} from 'react-router-dom';
import Hero from "../Composants/Hero";


export default class CreerCompte extends Component {
   
    constructor() {
        super()
        this.state = {
            nom: '',
            prenom: '',
            username: '',
            password: '',
            password2: '',
            email: '',
            age: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()
        console.log("je suis dans on submit")
        const user = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            age: this.state.age
        }

        fetch('http://localhost:3030/user',{
            method: 'POST',
            body:JSON.stringify(
                {
                    name: this.state.nom,
                    lastname: this.state.prenom,
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                    password2: this.state.password2,
                    age: this.state.age
                }
            ),
            headers: {"Content-Type": "application/json"}
        })
        .then((res)=>{
            console.log('User Posted: '+ res)
            this.props.history.push("./Connexion")
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render () {
        return (
           
            <section className="Compte">
                    <h1 className="h1">Créer un compte</h1>
                        <form key="frm" onSubmit={this.onSubmit}>
                           
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
                                <label htmlFor="prenom">Prénom</label>
                                <input type="text"
                                    className="form-control"
                                    name="prenom"
                                    placeholder=" Prenom"
                                    value={this.state.prenom}
                                    onChange={this.onChange} 
                                />
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
                                <label htmlFor="age">Age</label>
                                <input type="text"
                                    className="form-control"
                                    name="age"
                                    placeholder="Age"
                                    value={this.state.age}
                                    onChange={this.onChange} />
                            </div>


                            <div>
                                <label htmlFor="username">Pseudo</label>
                                <input type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Pseudo"
                                    value={this.state.adresse}
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
                                <button type="submit" className="MyButtom">Créer</button>
                                
                                <Link to="/Connexion">
                                <small>Vous avez déja un compte?</small>
                                </Link>

                            </div>
                        </form>
                    
             
            </section>
           
        )
    }
}