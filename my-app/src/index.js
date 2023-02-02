import React from 'react';
import ReactDOM from 'react-dom/client';
import Cookie from './Cookie';
import CookieJar from './CookieJar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookieJar />
  </React.StrictMode>
);

