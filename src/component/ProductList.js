import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import { CartState } from "./Home";
import { useLocation } from "react-router-dom";
import "../styles/ProductList.css";
import FilteredData from "./FilteredData";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import '../styles/sidebar.css'
import SelectProducts from "./selectProducts"

const ProductList = () => {
  const {
    selectedProducts,
    onSelect,
    HandleDelete,
    user,
    state,
    setState,
    awesome,
    filterdata,
    handleSelectProducts,
    stateRed,
    selectProducts,
    setPage,
    page,
    setSelectProducts,setFilterData
  } = CartState();
  const locationDetails = useLocation();

  const catchd = useRef(locationDetails);

  console.log('product/39',stateRed)

  if (state.length === 0) {
    return <h1>Loading...</h1>;
  }

  const handleSelectedpage=(ind)=>{
    if(ind>=1&&ind<=state.length/10&&ind!==page)
   setPage(ind)
  }
  const handleAllProducts=()=>{
    console.log('PL/51','now i clicked')
    setSelectProducts([])
    setFilterData([])
  }

  console.log('PL/55',selectProducts)

 

  return (
    <main style={{width:'100vw',overflow:'hidden',backgroundColor:'whitesmoke'}}>
      <h2 style={{ color: "#7C9D96", margin: "0" }}>
        WELCOME {user?.toUpperCase()}
      </h2>

      <Grid container spacing={4} style={{margin:'0'}}>
        
        <Grid xs={2} style={{marginLeft:'10px'}}>
          {/* <Item>xs=6</Item> */}
          <div className="sidebar">
          <h4 style={{textAlign:'center',margin:'0',padding:'0'}}>Select Your products</h4>
          <>
          <div className='inner' onClick={handleAllProducts} style={{padding:'3px',color:'grey',cursor:'pointer'}}>All</div>
          {stateRed&&stateRed.map((item)=>{
            return(  
              <div style={{padding:'3px',color:'grey',cursor:'pointer'}} className="inner" onClick={()=>handleSelectProducts(item)}>
              <Item>{item.category}</Item>
              </div>            
            )
          })}
          </>
         
           </div>
        </Grid>
        <Grid xs={9.7}>
          <Item>
          {selectProducts.length>0?<SelectProducts
          />:filterdata.length > 0 ? (
        <FilteredData />
      ) : (
        <Grid container spacing={0}>
          {state?.slice(page*10-10,page*10).map((item, index) => {
            return (
              <Grid xs={3} spacing={20}>
                <Item>
                  <div className="grid-container">
                    <div
                      className="grid-item grow"
                      onClick={() => awesome(item)}
                      key={index}
                    >
                      <img
                        src={item.images[0]}
                        style={{ height: "200px", maxWidth: "100%" }}
                      ></img>
                      <h3>{item.title}</h3>
                      <p
                        style={{ border: "1px solid #91C8E4" }}
                      >{`price:$${item.price}`}</p>
                    </div>
                  </div>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      )}
          </Item>
      {/* <span>Hi pages</span>
       */}
       {(state.length>0)&&(
        <div className={`pagination ${selectProducts.length < 10 && state.length === 0 ? 'dim' : ''}`}>
          <span className={page>1?'':'page-Disabled'} onClick={()=>handleSelectedpage(page-1)}>◀</span>
          {[...Array(state.length/10)].map((_,index)=>{
            return(
              <span className={page===index+1?'page-selected':''} key={index} onClick={()=>handleSelectedpage(index+1)} >{index+1}</span>
            )
          })}
          <span className={page<state.length/10?'':'page-Disabled'}onClick={()=>handleSelectedpage(page+1)}>▶</span>
        </div>
       )}
         
        </Grid>

      </Grid>

      {/* *******************************************************  */}
     
    </main>
  );
};

export default ProductList;


