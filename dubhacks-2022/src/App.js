import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";
//import 'animate.css';
import {Cards} from './js/Home.js';


function App(props) {
  let navigate = useNavigate();
  

  return (

    // rendering the app
   <div>
    <Routes>
      <Route path="/" element={
        <>
          {/* put components here */      
              <Cards data={props.data}/>
          }
        </>
      } />
    </Routes>
   </div>
  );
}

export default App;
