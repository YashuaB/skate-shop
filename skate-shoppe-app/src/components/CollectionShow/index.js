import React, { Component } from "react";
import "./style.css";
import axios from 'axios';

class collectionShow extends Component {
  state = {
    inventory: []
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount(){
    // this.getPants();
    console.log("you clicked");
    
  }
  
  getPants = event => {
    axios
      .get("/inventory/pants/:pants?")
      .then(res => {
        const data = res.data;
        this.setState({ inventory: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s6 collectionImage">
        </div>
        <div className="col s6 buttonCol">
        <a className="waves-effect grey lighten-4 black-text btn-large button">Shop Pants</a>
        </div>
      </div>
      <div className="row">
        <div className="col s6 buttonCol">
        <a className="waves-effect grey lighten-4 black-text btn-large button">Shop Decks</a>
        </div>
        <div className="col s6 collectionImage2">
        </div>
      </div>
      <div className="row">
      <div className="col s6 collectionImage3">
        </div>
        <div className="col s6 buttonCol">
        <a onClick={(e) => this.getPants} className="waves-effect grey lighten-4 black-text btn-large button">Shop Shirts</a>
        </div>
        
      </div>
      </div>
      
    );
  }
}

export default collectionShow;
