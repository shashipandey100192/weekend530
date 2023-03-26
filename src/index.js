import React from 'react';
import ReactDOM from 'react-dom/client';
import Aboutpage, { Contactus, Myfun, Second } from './components/About';
import Myform from './components/Myform';
import "./components/style.css";
import Mycontact from './components/Contactus';
import Myhooks from './components/Myhooks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myhooks/>
    <Aboutpage />
    <Contactus/>
    <Myfun />
    <Second></Second>
    <Myform/>
    <Mycontact/>
    
  </React.StrictMode>
);

