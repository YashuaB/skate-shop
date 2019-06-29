import React, { Component } from "react";
import axios from "axios"
class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            // password_confirm: "",
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password,
            // password_confirm: this.state.password_confirm
        }
        console.log(user);

        axios.post("http://localhost:8080/register", { user })
        .then(res => {
          console.log(res);
          console.log(res.data);

          if(res.data){
              console.log("you are logged in")
              this.setState({
                  redirectTo: "/login"
              })
          } else {
              console.log("not able to sign up")
          }
        //   res.redirect("/")
        })
    }

   

  

    render() {
        return(
        <div className="container z-depth-3" style={{ marginTop: "50px", width: "700px", backgroundColor: "white", padding:"35px", oppacity: "0.5"}}>
            <h2 style={{marginBottom: "20px", marginTop: "0px"}}>Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
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
        )
    }
}

export default Register;




