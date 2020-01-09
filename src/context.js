import React, { Component } from 'react';
import items from './data';
import itemsH from './dataH';

const ChambreContext = React.createContext();


export default class ChambreProvider extends Component {
    state={
      chambres:[],
      hotels:[],
      loading:true

    };
// Ajout du composant didmounth pour recuperer les données
    componentDidMount(){
        let chambre = this.formatData(items);
        this.setState({
            chambres:chambre,
            hotels:itemsH,
            loading:false
        });
    };

    formatData(items){
        let tempItems = items.map(item=>{
           let id = item.sys.id;
           let images = item.fields.images.map(img=>img.image.url);
           let chambre = {...item.fields,images,id};
           return chambre;
        });
        return tempItems
    };


    
    getRoom = (slug) => {
        let tempChambres = [...this.state.chambres];
        const chambre = tempChambres.find(room => room.slug === slug);
        return chambre;
      };

    getHotel = (slug) =>{
        let tempHotels = [...this.state.hotels];
        const hotel = tempHotels.find(hotel=>hotel.slug===slug);
        return hotel;
    };



    render() {
        return (
            <ChambreContext.Provider value={{
                ...this.state, 
                getRoom:this.getRoom,
                getHotel:this.getHotel}}>

               {this.props.children} 
            </ChambreContext.Provider>
        )
    }
}

const ChambreConsumer = ChambreContext.Consumer;
export {ChambreProvider,ChambreConsumer,ChambreContext};