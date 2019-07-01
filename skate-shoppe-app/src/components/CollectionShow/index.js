import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

// Component that 
class collectionShow extends Component {
  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s6 collectionImage">
        </div>
        <div className="col s6 buttonCol">
        <Link to="/shop/pants" className="waves-effect grey lighten-4 black-text btn-large button">Shop Pants</Link>
        </div>
      </div>
      <div className="row">
        <div className="col s6 buttonCol">
        <Link to="/shop/shirts" className="waves-effect grey lighten-4 black-text btn-large button">Shop Shirts</Link>
        </div>
        <div className="col s6 collectionImage3">
        </div>
      </div>
      <div className="row">
      <div className="col s6 collectionImage2">
        </div>
        <div className="col s6 buttonCol">
        <Link to="/shop/decks" className="waves-effect grey lighten-4 black-text btn-large button">Shop Decks</Link>
        </div>
      </div>
      </div>
    );
  }
}

export default collectionShow;
