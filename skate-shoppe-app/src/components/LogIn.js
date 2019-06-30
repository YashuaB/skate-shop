import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {

            username: '',
            password: '',
            redirectTo: null,
            loggedIn: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

       
         

        axios
            .post('http://localhost:8080/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    
                  this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    console.log(response.data.username)
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
            //////////////////////////////////////////////////////////////////////////////////
            // for logined user home page
            // axios.get('http://localhost:8080/login').then(response => {
            //   console.log('Get user response: ')
            //   console.log(response.data)
            //   if (response.data.user) {
            //     console.log('Get User: There is a user saved in the server session: ' )
        
            //     this.setState({
            //       loggedIn: true,
            //       username: response.data.username
            //     })
            //   } else {
            //     console.log( response.data.user)
            //     console.log('Get user: no user');
            //     this.setState({
            //       loggedIn: false,
            //       username: null
            //     })
            //   }
            // })
            //////////////////////////////////////////////////////////////////////////////////
    }

//     render() {
//         if (this.state.redirectTo) {
//             return <Redirect to={{ pathname: this.state.redirectTo }} />
//         } else {
//             return (
//                 <div>
//                     <h4>Login</h4>
//                     <form className="form-horizontal">
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="username">Username</label>
//                             </div>
//                             <div className="col-3 col-mr-auto">
//                                 <input className="form-input"
//                                     type="text"
//                                     id="username"
//                                     name="username"
//                                     placeholder="Username"
//                                     value={this.state.username}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="password">Password: </label>
//                             </div>
//                             <div className="col-3 col-mr-auto">
//                                 <input className="form-input"
//                                     placeholder="password"
//                                     type="password"
//                                     name="password"
//                                     value={this.state.password}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group ">
//                             <div className="col-7"></div>
//                             <button
//                                 className="btn btn-primary col-1 col-mr-auto"
                               
//                                 onClick={this.handleSubmit}
//                                 type="submit">Login</button>
//                         </div>
//                     </form>
//                 </div>
//             )
//         }
//     }
// }


/////////////////////////////////////MONIKA Changes


// class LoginForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: "",
//       redirectTo: null
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }


//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log("handleSubmit");

//     axios
//       .post("/user/login", {
//         username: this.state.username,
//         password: this.state.password
//       })
//       .then(response => {
//         console.log("login response: ");
//         console.log(response);
//         if (response.status === 200) {
//           // update App.js state
//           this.props.updateUser({
//             loggedIn: true,
//             username: response.data.username
//           });
//           // update the state to redirect to home
//           this.setState({
//             redirectTo: "/"
//           });
//         }
//       })
//       .catch(error => {
//         console.log("login error: ");
//         console.log(error);
//       });
//   }

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
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={this.state.username}
                          onChange={this.handleChange}
                            />
                        </div>
                           {/*<div className="form-group">
                               <input
                               type="email"
                               placeholder="Email"
                               className="form-control"
                               name="email"
                               onChange={ this.handleInputChange }
                               value={ this.state.email }
                               />
                            </div>*/}
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
