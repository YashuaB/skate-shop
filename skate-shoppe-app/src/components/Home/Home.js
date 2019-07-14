import React from "react";
import { Parallax, Background } from "react-parallax";
import CollectionShow from '../CollectionShow/index';
import "./style.css";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Parallax>
      <Background className="custom-bg">
          <img
            src="https://images.unsplash.com/photo-1477895082347-7ec2776ba66c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&h=780&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            alt="Skateboard"
          />
        </Background>
        {/* Search bar */}
        <div className="white">
          <ul className="hide-on-med-and-down right">
            <li>
              <div className="center row">
                <div className="col s12 ">
                  <div className="row" id="topbarsearch">
                    <div className="input-field col s12 white-text">
                      <i className="white-text material-icons prefix">search</i>
                      <input
                        type="text"
                        placeholder="Search Items"
                        id="autocomplete-input"
                        className="autocomplete white-text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div style={{ height: "500px" }} />
      </Parallax>
      {/* Middle white section */}
      <div className="section white">
        <div className="row container">
          <h2 className="header">SHOP YOUR FAVORITE SKATE BRANDS</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Ready for the summer?
          </p>
        </div>
      </div>
      <Parallax strength={500}>
        <Background className="custom-bg">
          <img
            src="https://images.unsplash.com/photo-1493040949342-4a493f766e87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&h=1080&fit=crop&ixid=eyJhcHBfaWQiOjF9"
            alt="Skateboards"
          />
        </Background>
        <div style={{ height: "500px" }} />
      </Parallax>
      <CollectionShow />
      <Footer />
    </div>
  );
};
export default Home;
