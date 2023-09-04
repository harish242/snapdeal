import React from "react";
// import {useState,useEffect} from 'react'
import ProductList from './component/ProductList'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Layout from './component/Layout'
import Modals from './component/Modal.js'
import CongratCard from "./component/Congratulations";
import ItemDetails from "./component/ItemDetails";
import FilteredData from './component/FilteredData'
import Home from './component/Home'
import Example from "./component/carousel";

function App() {  
  return (  
    <>     
    <BrowserRouter>
    <Home>
    <Routes>  
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Layout><ProductList/></Layout>}/>
      <Route path='/cart' element={<Layout><Cart /></Layout>} />
      <Route path='/modal' element={<Layout><Modals/></Layout>} />
      <Route path='/success' element={<Layout><CongratCard/></Layout>}/>
      <Route path='/itemdetails' element={<Layout><ItemDetails/></Layout>}/>
      <Route path='/fildata' element={<Layout><FilteredData/></Layout>}/>
      {/* <Route path='/main' element={<Layout><Home/></Layout>}/> */}
      {/* <Route path='/interview' element={<Example/>}></Route> */}
    </Routes>
    </Home>
    </BrowserRouter>
    </>
  );
}

export default App;
