import React, { Component } from 'react';
import items from './data';

const ChambreContext = React.createContext();


export default class ChambreProvider extends Component {
    state={
      chambres:[],
      hotels:[],
      loading:true

    };

    componentDidMount(){
        let chambre = this.formatData(items);
        this.setState({
            chambres:chambre,
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

    }
    render() {
        return (
            <ChambreContext.Provider value={{...this.state}}>
               {this.props.children} 
            </ChambreContext.Provider>
        )
    }
}

const ChambreConsumer = ChambreContext.Consumer;
export {ChambreConsumer,ChambreProvider,ChambreContext};