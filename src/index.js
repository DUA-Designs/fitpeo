import React from 'react';
import ReactDOM from 'react-dom/client';
 import "./fitpeo/media.css"
import reportWebVitals from './reportWebVitals';
 import "./fitpeo/fit.css"
 
 
 
 import Fitpeo from './fitpeo/dash';
 
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Fitpeo/>

  
    
     
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
