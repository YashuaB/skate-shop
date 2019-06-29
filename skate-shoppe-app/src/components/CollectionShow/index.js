import React, { Component } from "react";
import "./style.css";

class collectionShow extends Component {
  constructor() {
    super();
    this.state = {
      collections: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const collection = {
      name: this.state.name,
      image: this.state.image
    };
    console.log(collection);
  }

  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s6 collectionImage">
        </div>
        <div className="col s6 buttonCol">
        <a class="waves-effect grey lighten-4 black-text btn-large button">Shop Pants</a>
        </div>
      </div>
      <div className="row">
        <div className="col s6 buttonCol">
        <a class="waves-effect grey lighten-4 black-text btn-large button">Shop Decks</a>
        </div>
        <div className="col s6 collectionImage2">
        </div>
      </div>
      <div className="row">
      <div className="col s6 collectionImage3">
        </div>
        <div className="col s6 buttonCol">
        <a class="waves-effect grey lighten-4 black-text btn-large button">Shop Shirts</a>
        </div>
        
      </div>
      </div>
      
    );
  }
}

export default collectionShow;
