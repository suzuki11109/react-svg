import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {State} from './state.js';

let state = new State();

ReactDOM.render(
  <App state={state} />,
  document.getElementById('root')
);
