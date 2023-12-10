import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const cd = new Date().toLocaleDateString();
const ct = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1 style={{ color: '#fa9191', textAlign: 'center', fontSize: 100 }}>Hola guys</h1>
    <p style={{ textAlign: 'center', fontSize: 50 }}>Date : {cd} </p>
    <p style={{ textAlign: 'center', fontSize: 50 }}>Time : {ct}</p>
  </>, document.getElementById("root"));





