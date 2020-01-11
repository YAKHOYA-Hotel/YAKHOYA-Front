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


        this.onChangeChambre = this.onChangeChambre.bind(this);
        this.onChangeDateA = this.onChangeDateA.bind(this);
        this.onChangeDateD = this.onChangeDateD.bind(this);


     this.state={
         slug : this.props.match.params.slug,
         chambre:'',
         dateA:'',
         dateD:'',
         defaultBcg
     };
    }

    onChangeChambre(e){
        
        this.setState({
        chambre: e.target.value
        });
     }

     onChangeDateA(e){
        this.setState({
            dateA : e.target.value
        });
     }

     onChangeDateD(e){
        this.setState({
            dateD : e.target.value
        });
     }



    // onSubmit(e){
    //   e.preventDefault();

    //   const newReservation={
    //    hotels : this.state.slug,
    //    chambre : this.state.chambre,
    //    dateA : this.state.dateA,
    //    dateD : this.state.dateD

    //   }
    
    //   //je poste la reservation

    //   this.setState({
    //       chambre:'',
    //       dateA:'',
    //       dateD:''
    //   })

    // }




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
                     onChange={this.onChangeChambre} 
                     value={this.state.chambre} 
                     options={options}>
                     </Select>
                    </div>
                    </label>
                   </div>


                  <div className="pading">
                    <label className="recherche-label"><p className="recherche-label">Arrivée</p></label>
                    <input type="date" className="input" value={this.state.dateA} onChange={this.onChangeDateA}/>
                  </div>
                    
                  <div className="pading">
                    <label className="recherche-label"><p className="recherche-label">Départ</p></label>
                    <input type="date" className="input" value={this.state.dateD} onChange={this.onChangeDateD} />
                  </div>

                  
                  <div className="pading">
                  
                    <button type="submit" className="btn-primary-r">Réserver</button>
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
