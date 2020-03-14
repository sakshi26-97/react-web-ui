import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import authReducer from './store/reducers/auth'
import provisonReducer from './store/reducers/provision'
import createReducer from './store/reducers/create'
import copyReducer from './store/reducers/copy'

/* for async code */
import thunk from 'redux-thunk';

/* for redux dev-tools */
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  authReducer: authReducer,
  provisonReducer: provisonReducer,
  createReducer: createReducer,
  copyReducer: copyReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
