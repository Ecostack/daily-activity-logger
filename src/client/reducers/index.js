import {combineReducers} from 'redux';
import notes from './notes';
import login from "./login";
import categories from "./categories";

const rootReducer = combineReducers({
	notes,
	categories,
	login
});

export default rootReducer;