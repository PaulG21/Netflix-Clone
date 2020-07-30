import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
// import {login, signup, logout} from './util/session'
import {login, signup, logout} from './actions/session'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();

    //TEST
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.store = store;
    //TEST

    ReactDOM.render(<Root store={store} />, root);
});