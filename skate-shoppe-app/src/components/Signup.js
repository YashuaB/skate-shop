import React, { Component } from 'react'
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
				
				
				
				
				














		//</div>
		// <div className="SignupForm">
		// 	<h4>Sign up</h4>
		// 	<form className="form-horizontal">
		// 		<div className="form-group">
		// 			<div className="col-1 col-ml-auto">
		// 				<label className="form-label" htmlFor="username">Username</label>
		// 			</div>
		// 			<div className="col-3 col-mr-auto">
		// 				<input className="form-input"
		// 					type="text"
		// 					id="username"
		// 					name="username"
		// 					placeholder="Username"
		// 					value={this.state.username}
		// 					onChange={this.handleChange}
		// 				/>
		// 			</div>
		// 		</div>
		// 		<div className="form-group">
		// 			<div className="col-1 col-ml-auto">
		// 				<label className="form-label" htmlFor="password">Password: </label>
		// 			</div>
		// 			<div className="col-3 col-mr-auto">
		// 				<input className="form-input"
		// 					placeholder="password"
		// 					type="password"
		// 					name="password"
		// 					value={this.state.password}
		// 					onChange={this.handleChange}
		// 				/>
		// 			</div>
		// 		</div>
		// 		<div className="form-group ">
		// 			<div className="col-7"></div>
		// 			<button
		// 				className="btn btn-primary col-1 col-mr-auto"
		// 				onClick={this.handleSubmit}
		// 				type="submit"
		// 			>Sign up</button>
		// 		</div>
		// 	</form>
		// </div>

	)}
}

export default SignUp



























// import React, { Component } from "react";
// import axios from "axios"
// class SignUp extends Component {

//     constructor() {
//         super();
//         this.state = {
//             username: "",
//             email: "",
//             password: "",
//             // password_confirm: "",
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
//             username: this.state.name,
//             email: this.state.email,
//             password: this.state.password,
//             // password_confirm: this.state.password_confirm
//         }
//         console.log(user);

//         axios.post("/register", { user })
//         .then(res => {
//           console.log(res);
//           console.log(res.data);

//           if(res.data){
//               console.log("you are now registered")
//               this.setState({
//                   redirectTo: "/login"
//               })
//           } else {
//               console.log("not able to sign up")
//           }
//         //   res.redirect("/")
//         })
//     }

   

  

//     render() {
//         return(
//         <div className="container z-depth-3" style={{ marginTop: "50px", width: "700px", backgroundColor: "white", padding:"35px", oppacity: "0.5"}}>
//             <h2 style={{marginBottom: "20px", marginTop: "0px"}}>Registration</h2>
//             <form onSubmit={ this.handleSubmit }>
//                 <div className="form-group">
//                     <input
//                     type="text"
//                     placeholder="Name"
//                     className="form-control"
//                     name="name"
//                     onChange={ this.handleInputChange }
//                    	value={ this.state.username }
//                     />
//                 </div>
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
//                     <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     className="form-control"
//                     name="password_confirm"
//                     onChange={ this.handleInputChange }
//                     value={ this.state.password_confirm }
//                     />
//                 </div>
//                 <div className="form-group">
//                     <button type="submit" className="btn btn-primary">
//                         Register
//                     </button>
//                 </div>
//             </form>
//         </div>
//         )
//     }
// }

// export default SignUp;




