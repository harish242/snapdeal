// import React from "react";
// import { Grid } from "@mui/material";
// Other imports...
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


// Other imports...

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

  console.log('PL/55',user)

  return (
    <main style={{ width: "100vw", overflow: "hidden", backgroundColor: "whitesmoke" }}>
      <h2 style={{ color: "#7C9D96", margin: "0" }}>
        {/* WELCOME {user?.toUpperCase()} */}
      </h2>

      <Grid container spacing={4} style={{ margin: "0" }}>
        {/* Sidebar */}
        <Grid item xs={12} sm={3} md={2} >
          <div className="sidebar">
            {/* Sidebar content */}
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

        {/* Main content */}
        <Grid item xs={12} sm={9} md={10}>
          <Grid container spacing={2}>
            {selectProducts.length > 0 ? (
              <SelectProducts />
            ) : filterdata.length > 0 ? (
              <FilteredData />
            ) : (
              state?.slice(page * 10 - 10, page * 10).map((item, index) => (
                <Grid key={index} xs={12} sm={6} md={3}>
                  {/* Item Card */}
                  {/* <div className="grid-container">
                    <div
                      className="grid-item grow"
                      onClick={() => awesome(item)}
                    >
                      <img
                        src={item.images[0]}
                        style={{ height: "200px", maxWidth: "100%" }}
                        alt="Product"
                      />
                      <h3>{item.title}</h3>
                      <p style={{ border: "1px solid #91C8E4" }}>{`price:$${item.price}`}</p>
                    </div>
                  </div> */}
                  <div className="grid-container">
  <div className="grid-item grow" onClick={() => awesome(item)}>
    <div className="product-image">
      <img
        src={item.images[0]}
        style={{ height: "200px", maxWidth: "100%" }}
        alt="Product"
      />
    </div>
    <div className="product-details">
      <h3 className="product-title">{item.title}</h3>
      <p className="product-price">{`Price: $${item.price}`}</p>
    </div>
  </div>
</div>

                </Grid>
              ))
            )}
          </Grid>

          {state.length > 0 && (
            <div className='pagination' >
              {/* Pagination controls */}
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

      {/* ******************************************************* */}
    </main>
  );
};

export default ProductList;
