/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// project imports
import 'assets/css/style.css';
import ScrollToTop from 'common/scrollTop/index';
// import 'assets/js/main.js';
import App from './App';
import config from './config';

// thrid party
import reportWebVitals from './reportWebVitals';

// import { Provider } from 'react-redux';
// import { persistor, store } from './store/store';
// import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename={config.basename}>
        <ScrollToTop />
        <App />
    </BrowserRouter>
    // </PersistGate>
    // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
