import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			username:'',
			email: '',
			password: '',
			// confirmPassword: '',
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {

		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		const user = {
									username: this.state.username,
									email: this.state.email,
			            password: this.state.password
			            // password_confirm: this.state.password_confirm
			        }
							console.log(user)
		

		axios.post('/register', {user
		
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
						console.log('successful signup')

					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
						console.log('username already taken')
				}
			}).catch(error => {
						console.log('signup error: ')
						console.log(error)

			})
	}


render() {
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />;
	} else {
	return (
		<div className="container z-depth-3" style={{ marginTop: "50px", width: "700px", backgroundColor: "white", padding:"35px", oppacity: "0.5"}}>
             <h2 style={{marginBottom: "20px", marginTop: "0px"}}>Registration</h2>
            <form onSubmit={ this.handleSubmit }>
               <div className="form-group">
                   <input
										type="text"
                    placeholder="username"
                    className="form-control"
                    name="username"
                    onChange={ this.handleInputChange }
                   	value={ this.state.username }
                    />
                </div>
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
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                   	value={ this.state.password_confirm }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </div>
            </form>
				</div>
				
				
				
				
				














		

	)}
}
}

export default SignUp






























