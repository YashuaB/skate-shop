import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import ShoppingPage from "./components/pages/ShoppingPage";
import Register from "./components/pages/Register"



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/collections" component={ShoppingPage} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
