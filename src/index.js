import React from 'react';
import ReactDOM from 'react-dom/client';
import Aboutpage, { Contactus, Myfun, Second } from './components/About';
import Myform from './components/Myform';
import "./components/style.css";
import Mycontact from './components/Contactus';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aboutpage />
    <Contactus/>
    <Myfun />
    <Second></Second>
    <Myform/>
    <Mycontact/>
  </React.StrictMode>
);

