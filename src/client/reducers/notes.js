import {ADD_NOTE, RECEIVE_NOTES, REQUEST_NOTES} from './../actions/notes'

function notes(state = {
				   isFetching: false,
				   didInvalidate: false,
				   notes: []
			   },
			   action) {
	switch (action.type) {
		case ADD_NOTE:
			const array = [].concat(state.notes);
			array.push(action.entity)
			return Object.assign({}, state, {
				notes: array
			})
		case REQUEST_NOTES:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_NOTES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				notes: action.notes,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

export default notes