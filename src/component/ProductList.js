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

const ProductList = () => {
  const [selectProducts,setSelectProducts]=useState('')
  const {
    selectedProducts,
    onSelect,
    HandleDelete,
    user,
    state,
    setState,
    awesome,
    filterdata,
  } = CartState();
  const locationDetails = useLocation();

  const catchd = useRef(locationDetails);
  const stateRed=state.reduce((acc,curr)=>{
        const found=acc.find(item=>item.category===curr.category)
        if(!found){
          acc.push(curr)
        }
        return acc
  },[])
  console.log('product/39',stateRed)

  if (state.length === 0) {
    return <h1>Loading...</h1>;
  }
  const handleSelectProducts=(it)=>{
    //  console.log('pL/46',it)
     const filterSideBarItems=state.filter(item=>item.category===it.category)
  // console.log('pL/48','hi')

     setSelectProducts(filterSideBarItems)
  }
  console.log('pL/50',selectProducts)

  return (
    <main style={{width:'100vw',overflow:'hidden'}}>
      <h2 style={{ color: "#7C9D96", margin: "0" }}>
        WELCOME {user?.toUpperCase()}
      </h2>

      <Grid container spacing={3} style={{margin:'0'}}>
        
        <Grid xs={2} style={{marginLeft:'10px'}}>
          {/* <Item>xs=6</Item> */}
          <div className="sidebar">
          <h4 style={{textAlign:'center',margin:'0',padding:'0'}}>Select Your products</h4>
          {stateRed&&stateRed.map((item)=>{
            return(  
              <div style={{padding:'3px',color:'grey',cursor:'pointer'}} className="inner" onClick={()=>handleSelectProducts(item)}>
              <Item>{item.category}</Item>
              </div>            
            )
          })}
           </div>
        </Grid>
        <Grid xs={9.7}>
          <Item>
          {filterdata.length > 0 ? (
        <FilteredData />
      ) : (
        <Grid container spacing={0}>
          {state?.map((item, index) => {
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

        </Grid>
      </Grid>

      {/* *******************************************************  */}
     
    </main>
  );
};

export default ProductList;


