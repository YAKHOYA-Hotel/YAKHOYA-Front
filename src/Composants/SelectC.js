import React, { Component } from 'react';
import Select from 'react-select';


export default function SelectC(){
    
  const options =[
    {value:'simple',label:'Chambre simple'},
    {value:'double',label:'Chambre double'},
    {value:'familiale',label:'Chambre familiale'},
    {value:'presidentielle',label:'Chambre présidentielle'}
    ];
    return(
        <Select
      closeMenuOnSelect={false}
      defaultValue={[options[0], options[1]]}
      isMulti
      options={options}
    />
    );
}