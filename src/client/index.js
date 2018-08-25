import thunkMiddleware from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import App from './containers/App';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';

import {BrowserRouter as Router} from "react-router-dom";
import {checkLoggedIn} from "./actions/login";

import {createBrowserHistory} from 'history'
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router'

const history = createBrowserHistory();

const loggerMiddleware = createLogger();

const store = createStore(
    connectRouter(history)(rootReducer),
    // rootReducer,
    applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        loggerMiddleware
    )
);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router>
                <App/>
            </Router>
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);


store.dispatch(checkLoggedIn());
