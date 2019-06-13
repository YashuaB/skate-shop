import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";








function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/collections" component={Collections} />
          <Route exact path="/login" component={LogIn} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
