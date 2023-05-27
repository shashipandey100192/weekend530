import React , {lazy, Suspense}from 'react';
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
import Reactbootstrappage from './networkapi/Reactbootstrappage';
import Uimetrialpage from './networkapi/Uimetrialpage';
import Mainpage from './pages/Layout/Mainpage';
import Mycontextapi from './pages/Mycontextapi';
import { Provider } from 'react-redux';
import { store } from './redux/storage';
import { Mycounter } from './redux/Mycounter';
const Mylazy = lazy(()=> import('./pages/Mylazypage'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
  <BrowserRouter>
  <Provider store={store}>
  <Mynav/>
      <Routes>
            {/* <Route path='' element={<Ladingpage/>}/> */}
            <Route path='' element={<Mycounter/>}/>
            <Route path='myform' element={<Myform/>}/>
            <Route path='*' element={<Myerrorpage/>}/>
            <Route path='mydata' element={<Myjsondata/>}/>
            <Route path='mydata/:id' element={<Detailspage/>}/>
            <Route path='myjsform' element={<Myjsform/>}/>
            <Route path='myaxios' element={<Myaxios/>}/>
            <Route path='myaxios/:id' element={<ApiDetails/>}/>
            <Route path='mychart' element={<Mycharts/>}/>
            <Route path='rboot' element={<Reactbootstrappage/>}/>
            <Route path='uimetrial' element={<Uimetrialpage/>}/>
            <Route path="lazy" element={
              <Suspense fallback={<h1 style={{color:'red'}}>Loading</h1>}>
                <Mylazy/>
              </Suspense>
            }></Route>
            <Route path='myprops' element={<Mainpage/>}/>
            <Route path='context' element={<Mycontextapi/>}/>
           
      </Routes>

      </Provider>
  </BrowserRouter>
    
  </React.StrictMode>
);

