import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { store } from './app/store';  //from @reduxjs/toolkit
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
         <App />   {/* app inside provider  accacable for storek*/}
    </Provider>
  </React.StrictMode>
);


