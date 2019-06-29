import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import ShoppingPage from "./components/ShoppingPage";
import ShoppingCart from "./components/ShoppingCart";
import SideNav from "./components/SideNav";
import Profile from "./components/SideNav";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={ShoppingPage} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sidenav" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
