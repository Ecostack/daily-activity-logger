import fetch from 'cross-fetch'
import {postData, receivesNotes} from "./notes";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGGED_IN_SUCCESS = 'LOGGED_IN_SUCCESS';
export const LOGGED_IN_FAILURE = 'LOGGED_IN_FAILURE';


export function loginRequest({email, password}) {
	return function (dispatch) {
		// dispatch(requestNotes());

		return postData('/api/auth/login', {email, password}).then(result => {
			return dispatch({type: LOGIN_SUCCESS, entity: result})
		}, err => {
			return dispatch({type: LOGIN_FAILURE, entity: err})
		})
	}
}

export function checkLoggedIn() {
	return function (dispatch) {
		fetch(`/api/auth/loggedin`).then(
			response => dispatch({type: LOGGED_IN_SUCCESS, entity: response.json()}),
			error => dispatch({type: LOGGED_IN_FAILURE, entity: err})
		);
	}
}

export function registerRequest({email, password, passwordConf}) {
	return function (dispatch) {
		return postData('/api/auth/create', {email, password, passwordConf}).then(result => {
			return dispatch({type: REGISTER_SUCCESS, entity: result})
		}, err => {
			return dispatch({type: REGISTER_FAILURE, entity: err})
		})
	}
}

