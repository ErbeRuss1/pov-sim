import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { matchRoutes, createRoutesFromChildren, Routes, useLocation, useNavigationType } from 'react-router-dom';
import { initializeFaro, createReactRouterV6DataOptions, ReactIntegration, getWebInstrumentations, ReactRouterVersion } from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

if (!process.env.REACT_APP_FARO_COLLECTOR_URL) {
  // Warn early if the collector URL is missing to avoid silent failures.
  // eslint-disable-next-line no-console
  console.warn('Faro collector URL is not set; frontend telemetry will not be sent.');
} else {
  initializeFaro({
    url: process.env.REACT_APP_FARO_COLLECTOR_URL,
    app: {
      name: process.env.REACT_APP_FARO_APP_NAME || 'POV-SIM_Folly_demo',
      version: '1.0.0',
      environment: process.env.REACT_APP_ENV || 'production'
    },
    instrumentations: [
      // Mandatory, omits default instrumentations otherwise.
      ...getWebInstrumentations(),

      // Tracing package to get end-to-end visibility for HTTP requests.
      new TracingInstrumentation(),

      // React integration for React applications.
      new ReactIntegration({
        router: createReactRouterV6DataOptions({
          matchRoutes,
        }),
      }),
    ],
  });
}


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
