import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {

    render() {
       return (
        <div>
        <div className="parallax-container">
        <div className="parallax">
        <img src="./images/parallax1.jpg" alt="Venice" />
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header">SHOP YOUR FAVORITE SKATE BRANDS</h2>
          <p className="grey-text text-darken-3 lighten-3">Ready for the summer?</p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax"><img src="images/parallax2.jpg" alt="LA"/></div>
      </div>     
      </div>  
       )
    }

}

export default Home;

