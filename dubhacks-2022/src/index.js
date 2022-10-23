import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import coupon_data from "./backend/coupon.json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={coupon_data}/>
    </BrowserRouter>
    
  </React.StrictMode>
);


