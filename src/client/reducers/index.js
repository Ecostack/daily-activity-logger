import {combineReducers} from 'redux';
import notes from './notes';
import login from "./login";

const rootReducer = combineReducers({
	notes,
	login
});

export default rootReducer;