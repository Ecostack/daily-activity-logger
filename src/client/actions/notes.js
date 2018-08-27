import {getData, postData} from "./actionUtils";

export const ADD_NOTE = 'ADD_NOTE';
export const REQUEST_NOTES = "REQUEST_NOTES";
export const RECEIVE_NOTES = 'RECEIVE_NOTES';

export function addNote(text) {
    return function (dispatch, getState) {
        return postData(`/api/note`, {notice: text}, getState().login.token).then(result => {
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
    return {
        type: RECEIVE_NOTES,
        notes: json,
        receivedAt: Date.now()
    }
}


export function fetchNotes() {
    console.log(`fetch Notes`);
    return function (dispatch, getState) {
        dispatch(requestNotes());
        return getData(`/api/note`, getState().login.token)
            .then(json => dispatch(receivesNotes(json)))
    }
}

export function fetchNotesWithCategory(category) {
    console.log(`fetch notes with category: ` + category);
    return function (dispatch, getState) {
        dispatch(requestNotes());
        return getData(`/api/note/category/${category}`, getState().login.token)
            .then(json => dispatch(receivesNotes(json)))
    }
}