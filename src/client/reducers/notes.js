import {ADD_NOTE} from './../actions/notes'

function notes(state = [], action) {
	switch (action.type) {
		case ADD_NOTE:
			return [].concat(state).push({text:action.text})
		default:
			return state
	}
}

export default notes