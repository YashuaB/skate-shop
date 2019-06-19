import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text" />
            <p className="grey-text text-lighten-8" />
            This application was created for UNCC coding bootcamp final project! Click on a collaborator's name to see more of our projects!
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Skate Shoppe</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="https://docs.google.com/document/d/1iAKgo-GXe1-BNeAm4n21wV2_5oM-QY1I55I7KqNRO78/edit">
                  Madelyn
                </a>
              </li>

              <li>
                <a className="grey-text text-lighten-3" href="https://monikanikolova.herokuapp.com/">
                  Monika
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Yashua
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Diop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2019 Copyright</div>
      </div>
    </footer>
  );
};

export default Navbar;
