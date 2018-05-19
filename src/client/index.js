import thunkMiddleware from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './containers/App';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
	addNote, fetchNotes
} from './actions/notes';

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, document.getElementById('root')
);


store
	.dispatch(fetchNotes())