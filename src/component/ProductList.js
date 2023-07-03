import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState,useEffect,useRef } from 'react';
import Container from '@mui/material/Container';
import { CartState } from './Home';
import { useLocation,useNavigate } from 'react-router-dom';
import '../styles/ProductList.css'

const ProductList = () => {
    const [state,setState]=useState([]);
   const {selectedProducts,onSelect,HandleDelete}=CartState()
   const locationDetails=useLocation()
   const navigate=useNavigate()
   const awesome=(item)=>{
      navigate('/itemdetails',{state:{item}})
   }
  //  console.log(locationDetails)
   const catchd=useRef(locationDetails)
   console.clear()

   console.log(catchd.current)

   
    useEffect(()=>{
      (async ()=>{
        try{
          const response=await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
          if(!response.ok){
            throw new Error("Api is failed")
          }
          const data=await response.json()
          setState(data)
        }catch(error){
          console.log(error.message)
        }
      })()
    },[])
    if(state.length===0){
        return <h1>Loading...</h1>
      }
      // console.log(state)
     

  return (
    <>
    <h6 style={{color:'#00425A',margin:'0'}}>WELCOME {locationDetails?.state?.username?.toUpperCase()}</h6>
    <div class='grid-container'>
      {state?.map(item=>{
      return(
        <div class='grid-item grow' onClick={()=>awesome(item)}>
          <img src={item.image} style={{height:'200px'}}></img>
          <h3>{item.title}</h3>
          <p>{`price:$${item.price}`}</p>
          <p>{`rate:${item.rating.rate}`}</p>
         
        </div>
      )
      })}
    </div>
    </>
  )

}

export default ProductList