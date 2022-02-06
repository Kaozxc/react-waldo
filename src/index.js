import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);