import React, { Component } from 'react'
import "../../src/App.css";
import {Link} from 'react-router-dom';


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


export default class RecupPass extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         
          email: null,
          password: null,
          
        };
      }
    
      handleSubmit = e => {
     //   e.preventDefault();
    
      //  if (formValid(this.state)) {
      //    console.log(`
           
      //      Email: ${this.state.email}
       //     Password: ${this.state.password}
       //   `);
      //  } else {
    //      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    //    }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
         
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    
      render() {
        const { formErrors } = this.state;
    
        return (
          <div className="wrapper">
            <div className="form-wrapper">


             <div className="col-md-12">
              <form onSubmit={this.handleSubmit} noValidate>
               <h1 className="h1">Récuperer votre mot de passe</h1>
                

                <div className="createAccount">
                
                <div className="email">
                 
                  <label htmlFor="email">Email</label>
                  <input
                    
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                  />
                 
                </div>
                </div>
              
    
                <div className="createAccount">
                  
                <div className="col-md-4">
                <Link to='/Accueil'>
                <button className="submit"> Envoyer </button>
                </Link>
                </div>
                </div>
    
    
               
              </form>
              </div>
            </div>
          </div>
        );
      }
}
