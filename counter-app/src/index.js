import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//create store is used to create a global store
import { createStore } from 'redux';
// provider allows react to access the global store AKA global state
import { Provider } from 'react-redux'
// import reducer so we can feed it to the store
import reducer from './store/reducer'

// create a store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(

// Provider component is passing the store to the root component of the app
// This allows all components to access the store
<Provider store = {store}>
    <App />
</Provider>    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
