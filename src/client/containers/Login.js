import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import Header from './../components/Header';
import Main from './../components/Main';

import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {loginRequest, registerRequest} from "../actions/login";

const WrapperLogin = styled.div`
@media all and (min-width: 480px) {

    padding: 60px 0;

}`;

const WrapperLoginForm = styled.div`
@media all and (min-width: 480px) {

    margin: 0 auto;
    max-width: 320px;

}`;

class Login extends React.Component {

	constructor(props) {
		super(props);
		console.log(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.dispatch = props.dispatch;
		this.isRegisterForm = props.isRegisterForm;
		this.state = {
			email: "",
			password: "",
			passwordConf: ""
		};
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0 && ((this.isRegisterForm && this.state.passwordConf.length > 0) || !this.isRegisterForm);
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.isRegisterForm) {
			this.dispatch(registerRequest(this.state));
		} else {
			this.dispatch(loginRequest(this.state));
		}
		// this.dispatch(loginRequest(this.state));
	}

	render() {
		return (
			<WrapperLogin>
				<div className="Login">
					<WrapperLoginForm>
						<form onSubmit={this.handleSubmit}>
							<FormGroup controlId="email" bsSize="large">
								<ControlLabel>Email</ControlLabel>
								<FormControl
									autoFocus
									type="email"
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</FormGroup>
							<FormGroup controlId="password" bsSize="large">
								<ControlLabel>Password</ControlLabel>
								<FormControl
									value={this.state.password}
									onChange={this.handleChange}
									type="password"
								/>
							</FormGroup>
							{this.isRegisterForm &&
							<FormGroup controlId="passwordConf" bsSize="large">
								<ControlLabel>Password confirm</ControlLabel>
								<FormControl
									value={this.state.passwordConf}
									onChange={this.handleChange}
									type="password"
								/>
							</FormGroup>
							}
							<Button
								block
								bsSize="large"
								disabled={!this.validateForm()}
								type="submit"
							>
								Login
							</Button>
						</form>
					</WrapperLoginForm>
				</div>
			</WrapperLogin>
		);
	}
}

export default connect()(Login);