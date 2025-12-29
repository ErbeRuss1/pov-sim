import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeFaro } from '@grafana/faro-web-sdk';

// Initialize Faro Web SDK
initializeFaro({
  url: process.env.REACT_APP_FARO_URL || 'http://localhost:12347/collect',
  app: {
    name: 'pov-sim-frontend',
    version: '0.1.0',
    environment: process.env.NODE_ENV,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
