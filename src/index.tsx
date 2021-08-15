import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import reportWebVitals from './reportWebVitals';
import { registerServiceWorker } from './serviceWorker';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './services/firebase';

import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
// serviceWorkerRegistration.register();
// reportWebVitals();
