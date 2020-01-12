import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { login } from '../Functions/UserFunctions';
import MyButtom from '../Composants/MyButtom'
import MyButton from '../Composants/MyButtom';
import StyledHero from "../Composants/StyledHero"
import Hero from "../Composants/Hero"
import defaultBcg from "../images/defaultBcg.jpeg"
import jwt from 'jsonwebtoken'
import qs from 'qs'
import axios from 'axios'

export default class Connexion extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePass = this.onChangePass.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeName (e) {
        this.setState({ 
            username: e.target.value 
        })
    }

    onChangePass (e) {
        this.setState({
            password: e.target.value
         })
    }

    onSubmit (e) {
        e.preventDefault()

        console.log(this.state.username)
        console.log(this.state.password)

        fetch('http://localhost:3030/user/login',{
            method: 'POST',
            body:JSON.stringify(
                {
                    username: this.state.username,
                    password: this.state.password
                }   
            ),
            headers: {"Content-Type": "application/json"}
        })
        .then(res=>{
            return new Promise((resolve,reject)=>{
                resolve (res.json())
            })
        })

        .then((res)=>{
            localStorage.setItem('usertoken', res.token)
            
            const tok = localStorage.getItem('usertoken');

            console.log(res)
            

            const requestBody = {
                //token: this.$data.token
            }

            const config={
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Authorization': tok
                }
            }
            console.log(config)

            axios.post('http://127.0.0.1:3030/user/decrypt',qs.stringify(requestBody),config)
            
            .then((result)=>{
                console.log('result')
                console.log(result.data)
                localStorage.setItem('name', result.data.name)
                localStorage.setItem('lastname', result.data.lastname)
                localStorage.setItem('username', result.data.username)
                localStorage.setItem('email', result.data.email)                
                this.props.history.push("./Accueil")

            })
            .catch((error)=>{
                alert(error)
            })            
        })

        .catch((err)=>{
            alert(err)
        })
        
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
                                <label htmlFor="username">Pseudo</label>
                                <input type="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="Pseudo"
                                    value={this.state.username}
                                    onChange={this.onChangeName} />
                            </div>
                            <div className="form-group col-md-12 mt-5">
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Mot de passe"
                                    value={this.state.password}
                                    onChange={this.onChangePass} />
                            </div>
                            <div className="createAccount">
                            
                          
                              {/*<button type="submit">Authentification</button>*/}

                                
                                <button type="submit" className="MyButtom">Authentification</button>
                                
                                
                                
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