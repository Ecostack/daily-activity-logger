import thunkMiddleware from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import {
	addNote, fetchNotes
} from './actions/notes';

// if (!global._babelPolyfill) {
// 	require('babel-polyfill');
// }

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware // neat middleware that logs actions
	)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


store
	.dispatch(fetchNotes())