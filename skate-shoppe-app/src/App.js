import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn";
// import Register from "./components/Register";
import SignUp from "./components/SignUp";
import ShoppingPage from "./components/ShoppingPage";
import ShoppingCart from "./components/ShoppingCart";
import Profile from "./components/SideNav";
import CheckoutPage from "./components/CheckoutPage";



class App extends Component() {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }
  getUser() {
    axios.get('/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop/:item?" component={ShoppingPage} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/sidenav" component={Profile} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    </Router>
  );
}
}
export default App;
