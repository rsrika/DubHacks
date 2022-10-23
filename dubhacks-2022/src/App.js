import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import "./css/style.css";
//import 'animate.css';
import {CouponsPage} from './Components/Home.js';
import {Indv} from './Components/indv.js'
import {NavBar} from './Components/NavBar.js'

function App(props) {
  

  return (

    // rendering the app
   <div>
    <Routes>
      <Route path="/recipes/:coupon_name" element={
              <> {
                <div>
                  <NavBar/>
                  <Indv data={[].concat(props.data)}/>
                </div>
             
              
              }
              </>
        } />

      <Route path="/recipes" element={
            <> {
             
              <div>
                <NavBar/>
                  
              </div>
            
             
            }
            </>
      } />

      <Route path="/coupons" element={
            <> {
             
            <div>
              <NavBar/>
              <CouponsPage data={props.data}/>
            </div>
             
            }
            </>
      } />

      <Route path="/profile" element={
        <>
          {/* put components here */      
            <div>
              <NavBar/>
                 
             </div>
           
          }
        </>
      } />

      <Route path="/" element={
        <>
          {/* put components here */      
            <div>
              <NavBar/>
            </div>
          
          }
        </>
      } />
      
      
    </Routes>
   </div>
  );
}

export default App;
