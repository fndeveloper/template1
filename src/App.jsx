import { useState,useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
import './App.css'
// BOOTSTRAP 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// BOOTSTRAP 
// PAGES
import Navbar from './assets/pages/navbar';
import Home from './assets/pages/home';

// PAGES

function App() {
  // const currentURL = window.location.href; 

  return (
    <>
    <BrowserRouter>

<Navbar/>
      <Routes>
        <Route>
        <Route path='/' element={<Home />}/>
  

        </Route>
      </Routes>



    </BrowserRouter>
    </>
  );
}

export default App;