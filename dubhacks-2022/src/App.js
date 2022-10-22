import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";
//import 'animate.css';
import {NavBar} from './js/Navbar.js';
import {Home} from './js/Home.js';
import {Journey} from './js/Journey.js';


function App(props) {
  let navigate = useNavigate();
  

  return (

    // rendering the app
   <div>
    <Routes>
      <Route path="/" element={
        <>
          {/* put components here */      
              <Home data={coupons}/>
          }
        </>
      } />
    </Routes>
   </div>
  );
}

export default App;
