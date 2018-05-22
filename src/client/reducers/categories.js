import {REQUEST_CATEGORIES, RECEIVE_CATEGORIES} from './../actions/categories'

function categories(state = {
				   isFetching: false,
				   didInvalidate: false,
				   categories: []
			   },
			   action) {
	switch (action.type) {
		case REQUEST_CATEGORIES:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_CATEGORIES:
		console.log(action.categories)
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				categories: action.categories,
			})
		default:
			return state
	}
}

export default categories