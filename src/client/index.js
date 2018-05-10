import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import rootReducer from './reducers';
import {
  addNote
} from './actions/notes';

const store = createStore(rootReducer);

store.dispatch(addNote('Tesstttt'));

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);