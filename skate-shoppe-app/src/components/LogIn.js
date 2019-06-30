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
// import passport from "passport"

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
                
       <div className="container z-depth-3" style={{ marginTop: "50px", width: "700px", backgroundColor: "white", padding:"35px"}}>
          <h2 style={{marginBottom: "40px", marginTop: "0px"}}>Login</h2>
                       <form onSubmit={ this.handleSubmit }>
                           <div className="form-group">
                               <input
                               type="email"
                               placeholder="Email"
                               className="form-control"
                               name="email"
                               onChange={ this.handleInputChange }
                               value={ this.state.email }
                               />
                           </div>
                           <div className="form-group">
                               <input
                               type="password"
                               placeholder="Password"
                               className="form-control"
                               name="password"
                               onChange={ this.handleInputChange }
                               value={ this.state.password }
                               />
                           </div>
                           <div className="form-group">
                               <button type="submit" className="btn btn-primary">
                                   Login User
                               </button>
                           </div>
                       </form>
                   </div>
                   )
               }
              }
            }


            export default LoginForm;
