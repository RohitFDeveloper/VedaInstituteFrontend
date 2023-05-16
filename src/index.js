/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client';
// project imports
// import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

// thrid party
import { BrowserRouter } from 'react-router-dom';

// style + assets
import 'assets/scss/style.scss';
import config from './config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={config.basename}>
        <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
