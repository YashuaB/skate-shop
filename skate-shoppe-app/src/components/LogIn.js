// import React, { Component } from "react";

// class Login extends Component {

//     constructor() {
//         super();
//         this.state = {
//             email: "",
//             password: "",
//             errors: {}
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInputChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const user = {
//             email: this.state.email,
//             password: this.state.password,
//         }
//         console.log(user);
//     }

//     render() {
//         return(
//         <div className="container z-depth-3" style={{ marginTop: "50px", width: "700px", backgroundColor: "white", padding:"35px"}}>
//             <h2 style={{marginBottom: "40px", marginTop: "0px"}}>Login</h2>
//             <form onSubmit={ this.handleSubmit }>
//                 <div className="form-group">
//                     <input
//                     type="email"
//                     placeholder="Email"
//                     className="form-control"
//                     name="email"
//                     onChange={ this.handleInputChange }
//                     value={ this.state.email }
//                     />
//                 </div>
//                 <div className="form-group">
//                     <input
//                     type="password"
//                     placeholder="Password"
//                     className="form-control"
//                     name="password"
//                     onChange={ this.handleInputChange }
//                     value={ this.state.password }
//                     />
//                 </div>
//                 <div className="form-group">
//                     <button type="submit" className="btn btn-primary">
//                         Login User
//                     </button>
//                 </div>
//             </form>
//         </div>
//         )
//     }
// }

// export default Login;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
import passport from "passport"
import axios from "axios"
class Login extends Component {

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        //     <div>
        //         <h4>Login</h4>
        //         <form className="form-horizontal">
        //             <div className="form-group">
        //                 <div className="col-1 col-ml-auto">
        //                     <label className="form-label" htmlFor="username">Username</label>
        //                 </div>
        //                 <div className="col-3 col-mr-auto">
        //                     <input className="form-input"
        //                         type="text"
        //                         id="username"
        //                         name="username"
        //                         placeholder="Username"
        //                         value={this.state.username}
        //                         onChange={this.handleChange}
        //                     />
        //                 </div>
        //             </div>
        //             <div className="form-group">
        //                 <div className="col-1 col-ml-auto">
        //                     <label className="form-label" htmlFor="password">Password: </label>
        //                 </div>
        //                 <div className="col-3 col-mr-auto">
        //                     <input className="form-input"
        //                         placeholder="password"
        //                         type="password"
        //                         name="password"
        //                         value={this.state.password}
        //                         onChange={this.handleChange}
        //                     />
        //                 </div>
        //             </div>
        //             <div className="form-group ">
        //                 <div className="col-7"></div>
        //                 <button
        //                     className="btn btn-primary col-1 col-mr-auto"


    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);

        axios.get('http://localhost:8080/login', function(req, res){
            if(req.isAuthenticated()) {
              res.redirect('/');
            } else {
              res.send("unauthorized") }
              
            }
            );
    }

        //                     onClick={this.handleSubmit}
        //                     type="submit">Login</button>
        //             </div>
        //         </form>
        //     </div>
        // )
        <div
          className="container z-depth-3"
          style={{
            marginTop: "50px",
            width: "700px",
            backgroundColor: "white",
            padding: "35px"
          }}
        >
          <h2 style={{ marginBottom: "40px", marginTop: "0px" }}>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;
