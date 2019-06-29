import React, { Component } from "react";
// import passport from "passport"
import axios from "axios"
class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
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

      //         axios.get('http://localhost:3001/login', function (req, res) {
//         if (req.session.userLogged) {
//             res.send("welcome")
//         } else {
//             res.send("unauthorized")} 
// })
   // username: "dingdong", email: "bigdong@yahoo.com", password: "$2a$10$zD3T4ehXjgqQsByEiK8Ce.yBrsFDkYH/m2T7yDBBMiSNusqTzgUaC", updatedAt: "2019-06-27T00:46:52.143Z", …}



    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);

        axios.get('/login', function(req, res){
            if (req.session.userLogged) {
                            res.send("welcome")
                        } else {
                            res.send("unauthorized")}
            }
            );
    }

    render() {
        return(
        <div className="container z-depth-3" style={{ marginTop: "50px", width: "700px", backgroundColor: "white", padding:"35px"}}>
            <h2 style={{marginBottom: "40px"}}>Login</h2>
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

export default Login;