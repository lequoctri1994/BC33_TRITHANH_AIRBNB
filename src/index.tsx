import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';


import HeaderHome from './Components/HeaderHome/HeaderHome';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HeaderHome />
);


