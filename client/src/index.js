import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './Redux/Store'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'pi-pokemon-backend-production.up.railway.app'

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
);
