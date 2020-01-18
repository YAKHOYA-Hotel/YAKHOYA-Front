import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg1.jpg';
import Banner from '../Composants/Banner';
import {Link} from 'react-router-dom';
import {ChambreContext} from '../context';
import StyledHero from '../Composants/StyledHero';
import Select from 'react-select';


export default class DetailHotel extends Component {
    

    constructor(props){
        super(props)


       //this.onChangeChambre = this.onChangeChambre.bind(this);
        this.onChangeDateA = this.onChangeDateA.bind(this);
        this.onChangeDateD = this.onChangeDateD.bind(this);
        this.onSubmit=this.onSubmit.bind(this)

     this.state={
         slug : this.props.match.params.slug,
         idClient:'',
         typeRoom:'',
         dateEntre:'',
         dateSortie:'',
         defaultBcg
     };
    }

    onChangeChambre(e){
      console.log("event",e.value)
        this.setState({
          typeRoom: e.value
        });
     }

     onChangeDateA(e){
        this.setState({
            dateEntre : e.target.value
        });
     }

     onChangeDateD(e){
        this.setState({
            dateSortie : e.target.value
        });
     }

    reserver(e){
      e.preventDefault();
      console.log('Je suis dans on submit')
      const newReservation={
        idHotel : this.state.slug,
        typeRoom : this.state.typeRoom,
        dateEntre : ((this.state.dateEntre).replace('-',',')).replace('-',','),
        dateSortie : ((this.state.dateSortie).replace('-',',')).replace('-',','),
        idClient: localStorage.getItem("username")
      }
      
      console.log(newReservation)
      
      fetch('http://127.0.0.1:3030/reservation',{
        method: 'POST',
        body:JSON.stringify(newReservation),
        headers: {"Content-Type": "application/json"}
      })
      .then((res)=>{
        return new Promise((resolve,reject)=>{
            resolve (res.json())
        })
      })

      .then((res)=>{
          console.log(res)
      })

      .catch((error)=>{
        alert("Réservation non posté.")
      })

    }

    onSubmit(e){
      e.preventDefault();
      console.log('Je suis dans on submit')
      const newReservation={
        idHotel : this.state.slug,
        typeRoom : this.state.chambre,
        dateEntre : this.state.dateA,
        dateSortie : this.state.dateD,
        idClient: localStorage.getItem("username")
      }
      console.log(newReservation)
      
      fetch('http://127.0.0.1:3030/reservation',{
        method: 'POST',
        body:JSON.stringify(newReservation),
        headers: {"Content-Type": "application/json"}
      })
      .then((res)=>{
        return new Promise((resolve,reject)=>{
            resolve (res.json())
        })
      })

      .then((res)=>{
          console.log(res)
      })

      .catch((error)=>{
        alert("Réservation non posté.")
      })
    }




    static contextType = ChambreContext;


    render() {
        const options =[
            {value:'simple',label:'Simple'},
            {value:'double',label:'Double'},
            {value:'familiale',label:'Familiale'},
            {value:'presidentielle',label:'Présidentielle'}
            ];


        const {getHotel} = this.context;
        const hotel = getHotel(this.state.slug);


        if(!hotel){
            return (
                   <div className="error">
                      <h3>Aucun hôtel trouvé</h3>
                      <Link to ='/Accueil' className="btn-primary">
                        Retourner à l'accueil  
                      </Link>
                   </div>
            );
        }



        const {
            nom,
            adresse,
            description,
            img,
            imgH
            } = hotel;
            

        return (
            <> 
                    <StyledHero img={imgH}>

                    <div className="deux-banner">
                    <Banner title={`${nom}`}>
                       <p>{adresse}</p>
                        <Link to="/ListeHotels" className="btn-primary">
                            Nos hôtels
                            
                        </Link>
                    </Banner>
                    

                   {/* reserver */}
                   <div className="reserver">
               <h5 className="recherche-label">Résever maintenant</h5>

                <article className="arrive-depart">

                  <div className="pading">
                    <label className="recherche-label">Type de chambre
                    <div className="select">
                     <Select  
                     defaultValue={options[0]}
                     onChange={this.onChangeChambre.bind(this)}
                     //isMulti 
                     value={this.state.chambre} 
                     options={options}
                     >
                     </Select>
                    </div>
                    </label>
                   </div>

                   {/* <div className="pading">
                    <label className="recherche-label"><p className="recherche-label">Type</p></label>
                    <input type="textArea" className="input" value={this.state.chambre} onChange={this.onChangeChambre}/>
                  </div> */}


                  <div className="pading">
                    <label className="recherche-label"><p className="recherche-label">Arrivée</p></label>
                    <input type="date" className="input" value={this.state.dateA} onChange={this.onChangeDateA.bind(this)}/>
                  </div>
                    
                  <div className="pading">
                    <label className="recherche-label"><p className="recherche-label">Départ</p></label>
                    <input type="date" className="input" value={this.state.dateD} onChange={this.onChangeDateD.bind(this)} />
                  </div>

                  
                  <div className="pading">
                  
                    <button className="btn-primary-r" onClick={this.reserver.bind(this)}>Réserver</button>
                  </div>
                  
                 </article>
                </div>



                   {/*reserver */}

                  </div>
                    </StyledHero>
                    

                    <div className="single-room-info">
                       <article className="desc">
                        <h3> A propos:</h3>
                        <p>{description}</p>
                       </article>

                       <article className="info">
                           <h3>Accés</h3>
                           <h5>Metro: <h6>ligne 1, ligne 3</h6></h5>
                           <h5>Bus: <h6>238, 12</h6></h5>
                           <h5>RER: <h6>RER A, RER C</h6></h5>
                           <h5>Tramway: <h6>T3a</h6></h5>

                       </article>
                     </div>

                    

                   
                    
            </>
        )      
    }
}