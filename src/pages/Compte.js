import React, { Component } from 'react'
import {Grid,cell, Cell} from 'react-mdl'
import avatar from '../images/avatar.png'

export default class Compte extends Component {
    constructor(){
        super()
        this.state={
            nom:localStorage.getItem('name'),
            prenom:localStorage.getItem('lastname'),
            mail:localStorage.getItem('email')
        }
    }
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={6} className="cell-1">
                        <img src={avatar} alt="avatar" className="avatar-img"/>
                        

                    </Cell>
                    <Cell col={6} className="cell-2">
                        
                        <div className="info-compte-text">
                        <h2>{this.state.prenom} {this.state.nom}</h2>
                        <h6>{this.state.mail}</h6>
                        </div>

                    </Cell>

                </Grid>

                <section className="reservation-user">
                    <h3>Mes réservations</h3>

                </section>
                 
            </div>
        )
    }
}
