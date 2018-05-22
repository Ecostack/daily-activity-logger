import {LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS} from "../actions/login";

function login(state = {
				   isLoggedIn: false,
				   userId: ''
			   },
			   action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			console.log(action.entity);
			return state;
		case LOGIN_FAILURE:
			console.log(action.entity);
			return state;
		case REGISTER_SUCCESS:
			console.log(action.entity);
			return state;
		case REGISTER_FAILURE:
			console.log(action.entity);
			return state;
		default:
			return state
	}
}

export default login