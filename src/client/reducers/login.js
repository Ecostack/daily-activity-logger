import {
    FILL_LOGIN_DETAILS_FROM_STORE,
    LOGIN_FAILURE,
    LOGIN_SUCCESS, LOGOUT_ACTION,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from "../actions/login";

function login(state = {
                   userId: null,
                   token: null,
                    showLogin: false
               },
               action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.entity.token);
            localStorage.setItem("userId", action.entity.user.id);
            return Object.assign({}, state, {
                token: action.entity.token,
                userId: action.entity.user.id
            });
        case LOGIN_FAILURE:
            console.log(action.entity);
            return state;
        case FILL_LOGIN_DETAILS_FROM_STORE:
            // localStorage.setItem("token", action.entity.token);
            // localStorage.setItem("userId", action.entity.userId);
            return Object.assign({}, state, {
                token: action.token,
                userId: action.userId
            });
        case LOGOUT_ACTION:
            localStorage.setItem("token", null);
            localStorage.setItem("userId", null);
            return Object.assign({}, state, {
                token: null,
                userId: null
            });
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