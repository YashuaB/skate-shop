import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class LoginForm extends Component {
    
    constructor(props) {
        super(props)
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
            .post('/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if(this.state.loggedIn === true ){
                    console.log("user already logged in")
                }
               else if (response.status === 200) {
                    
                  this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    console.log(this.state.loggedIn)
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
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={this.state.username}
                          onChange={this.handleChange}
                            />
                        </div>
                           
                           <div className="form-group">
                               <input
                               type="password"
                               placeholder="Password"
                               className="form-control"
                               name="password"
                               onChange={ this.handleChange }
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
