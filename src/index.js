import React from 'react';
import ReactDOM from 'react-dom/client';
import "./components/style.css";
import Mynav from './pages/Mynav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ladingpage from './pages/Ladingpage';
import Myform from './pages/Myform';
import {Myerrorpage} from './pages/Myerrorpage';
import Myjsondata from './pages/Myjsondata';
import Detailspage from './pages/Detailspage';
import Myjsform from './pages/Myjsform';
import Myaxios from './networkapi/Myaxios';
import ApiDetails from './networkapi/ApiDetails';
import Mycharts from './networkapi/Mycharts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
  <BrowserRouter>
  <Mynav/>
      <Routes>
            <Route path='' element={<Ladingpage/>}/>
            <Route path='myform' element={<Myform/>}/>
            <Route path='*' element={<Myerrorpage/>}/>
            <Route path='mydata' element={<Myjsondata/>}/>
            <Route path='mydata/:id' element={<Detailspage/>}/>
            <Route path='myjsform' element={<Myjsform/>}/>
            <Route path='myaxios' element={<Myaxios/>}/>
            <Route path='myaxios/:id' element={<ApiDetails/>}/>
            <Route path='mychart' element={<Mycharts/>}/>
      </Routes>
  </BrowserRouter>
    
  </React.StrictMode>
);

