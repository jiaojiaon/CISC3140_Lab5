import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllCars from './components/cars/allCars';
import AllOwners from './components/owners/allOwners';
import AddOwners from './components/owners/addOwners';
import AddCars from './components/cars/addCars';
import UpdateOwners from './components/owners/updateOwners';
import UpdateCars from './components/cars/updateCars';




const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <BrowserRouter>

  <Routes>
    <Route path="/" element={ <React.StrictMode> <App /> </React.StrictMode> } />
    <Route path = "/cars/" element = {<AllCars />} />
    <Route path = "/owners/" element = {<AllOwners />} />
    <Route path = "/addowners/" element = {<AddOwners />} />
    <Route path = "/addcars/" element = {<AddCars />} />
    <Route path = "/updateowners/" element = {<UpdateOwners />} />
    <Route path = "/updatecars/" element = {<UpdateCars />} />




    
    </Routes>

</BrowserRouter>,
root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
    