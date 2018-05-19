import fetch from 'cross-fetch'

export const ADD_NOTE = 'ADD_NOTE';
export const REQUEST_NOTES = "REQUEST_NOTES";
export const RECEIVE_NOTES = 'RECEIVE_NOTES';


export function postData(url, data) {
	return fetch(url, {
		method: "post",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},

		//make sure to serialize your JSON body
		body: JSON.stringify(data)
	}).then(response => response.json())

}

export function addNote(text) {
	return function (dispatch) {
		// dispatch(requestNotes());

		return postData('/api/note', {notice: text}).then(result => {
			return dispatch({type: ADD_NOTE, entity: result})
		})
	}
}

function requestNotes() {
	return {
		type: REQUEST_NOTES,
		// from / to?
	}
}

export function receivesNotes(json) {
	// console.log(json);
	return {
		type: RECEIVE_NOTES,
		notes: json,
		receivedAt: Date.now()
	}
}


export function fetchNotes() {
	console.log(`fetch Notes`);
	return function (dispatch) {
		dispatch(requestNotes());
		return fetch(`/api/note`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json => dispatch(receivesNotes(json))
			)
	}
}