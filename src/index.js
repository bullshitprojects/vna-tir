import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleReset } from 'atomize';

import App from './components/app/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleReset />
    <App />
  </React.StrictMode>
);
