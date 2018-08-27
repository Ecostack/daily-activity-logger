import fetch from 'cross-fetch'

export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

function requestCategories() {
	return {
		type: REQUEST_CATEGORIES,
		// from / to?
	}
}

export function receivesCategories(json) {
	// console.log(json);
	return {
		type: RECEIVE_CATEGORIES,
		categories: json,
		receivedAt: Date.now()
	}
}

export function fetchCategories() {
	console.log(`fetch categories`);
	return function (dispatch) {
		dispatch(requestCategories());
		return fetch(`/api/category`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json => dispatch(receivesCategories(json))
			)
	}
}