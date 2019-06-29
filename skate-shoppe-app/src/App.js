import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import ShoppingPage from "./components/ShoppingPage";
import ShoppingCart from "./components/ShoppingCart";
import SideNav from "./components/SideNav";
import Profile from "./components/SideNav";
import CheckoutPage from "./components/CheckoutPage";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop/:item?" component={ShoppingPage} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sidenav" component={Profile} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
