import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";
//import 'animate.css';
import {Cards} from './Components/Home.js';
import {Indv} from './Components/indv.js'


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
      
      <Route path="/recipes/:coupon_name" element={
            <> {
             
            <Indv data={[].concat(props.data)}/>
             
            }
            </>
      } />
    </Routes>
   </div>
  );
}

export default App;
