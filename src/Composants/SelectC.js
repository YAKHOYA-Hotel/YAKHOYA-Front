import React, { Component } from 'react'
import Select from 'react-select';


export default class SelectC extends Component {
    render() {
        const options =[
            {value:'simple',label:'Chambre simple'},
            {value:'double',label:'Chambre double'},
            {value:'familiale',label:'Chambre familiale'},
            {value:'presidentielle',label:'Chambre présidentielle'}
            ];
        return (
            <div>
                <div className="pading">
                   
                    <div className="select">
                     <Select
                       closeMenuOnSelect={false}
                       defaultValue={[options[0], options[1]]}
                       isMulti
                       options={options}
                      // onChange={this.onChangeChambre}
                      // value={this.state.chambre}
                     />
                    </div>
                    
                   </div>
            </div>
        )
    }
}
