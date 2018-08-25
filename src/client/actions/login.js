import fetch from 'cross-fetch'
import {postData} from "./notes";

// import { createBrowserHistory } from 'history';
//
// const history = createBrowserHistory();

import { push } from 'connected-react-router'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGGED_IN_SUCCESS = 'LOGGED_IN_SUCCESS';
export const LOGGED_IN_FAILURE = 'LOGGED_IN_FAILURE';

export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export const FILL_LOGIN_DETAILS_FROM_STORE = 'FILL_LOGIN_DETAILS_FROM_STORE';

export function loginRequest({email, password}) {
    return function (dispatch) {
        return postData('/api/auth/login', {email, password}).then(result => {
            dispatch({type: LOGIN_SUCCESS, entity: result})
            return dispatch(showMainPage())
        }, err => {
            return dispatch({type: LOGIN_FAILURE, entity: err})
        })
    }
}

export function logout() {
    return function (dispatch) {
        dispatch({type: LOGOUT_ACTION})
        return dispatch(showLogin())
    }
}

export function showRegister() {
    return function (dispatch) {
        return dispatch(push('/register'))
    }
}

export function showLogin() {
    return function (dispatch) {
        return dispatch(push('/login'))
        // history.push("/login")
    }
}

export function showMainPage() {
    return function (dispatch) {
        return dispatch(push('/'))
        // history.push("/")
    }
}

export function checkLoggedIn() {
    return function (dispatch) {
        // get token from localStorage
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token && userId) {
            dispatch({
                type: FILL_LOGIN_DETAILS_FROM_STORE,
                token,
                userId
            })
            return dispatch(checkLoggedInWithRequest());
        } else {
            return dispatch(showLogin())
        }
    }
}

export function checkLoggedInWithRequest() {
    return function (dispatch, getState) {
        return fetch(`/api/auth/loggedin`, {
            'Authorization': 'Bearer ' + getState().token,
        }).then(
            response => {
                dispatch({type: LOGGED_IN_SUCCESS, entity: response.json()});
                return dispatch(showMainPage())
            },
            error => {
                dispatch({type: LOGGED_IN_FAILURE, entity: error})
                dispatch({type: LOGOUT_ACTION})
                dispatch(showLogin())
            }
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

