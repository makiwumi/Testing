/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import axios from 'axios';
import './sign-up';

class Signup extends Component {
    constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }
    
    //sets the state to the text that is typed for email and password when the form is submitted
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new email/password
		axios.post('/user/', {
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('email already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
    }
    
    render() {
        return (


            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 login-section-wrapper">
                        <div className="brand-wrapper">
                        <img src="assets/images/logo.svg" alt="logo" className="logo" />
                        </div>
                        <div className="login-wrapper my-auto">
                        <h1 className="login-title">Log in</h1>
                        <form action="#!">
                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-input"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            </div>
                            <div className="form-group mb-4">
                            <label htmlFor="password">Password</label>
                            <input className="form-input"
                                placeholder="password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            </div>
                            <input className="btn btn-dark btn-block login-btn" onClick={this.handleSubmit}
                            type="submit" />
                        </form>
                        <a href="#!" className="forgot-password-link">Forgot password?</a>
                        <p className="login-wrapper-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="assets/images/login.jpg" alt="login image" className="login-img" />
                    </div>
                </div>
            </div>
        

            
        );
    }
}


export default Signup;