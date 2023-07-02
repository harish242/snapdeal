import React from "react";
// import {useState,useEffect} from 'react'
import ProductList from './component/ProductList'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Layout from './component/Layout'
import Modals from './component/Modal.js'
import CongratCard from "./component/Congratulations";
function App() {  
  return (  
    <>     
    <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Layout><ProductList/></Layout>}/>
      <Route path='/cart' element={<Layout><Cart /></Layout>} />
      <Route path='/modal' element={<Layout><Modals/></Layout>} />
      <Route path='/success' element={<Layout><CongratCard/></Layout>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
