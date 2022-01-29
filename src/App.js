import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import AddPlaces from './components/pages/AddPlaces'

import './App.css';
import Footer from './components/Footer';
const App = () =>{
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path ='/' exact element={<Home/>} ></Route>
          <Route path ='/services' exact element={<Services/>} ></Route>
          <Route path ='/products' exact element={<Products/>} ></Route>
          <Route path ='/signup' exact element={<SignUp/>} ></Route>
          <Route path ='/addPlaces' exact element={<AddPlaces/>} ></Route>


        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
