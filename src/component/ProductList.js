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
    // const [user,setUser]=useState('')
   const {selectedProducts,onSelect,HandleDelete,user}=CartState()
   const locationDetails=useLocation()
  //  useEffect(()=>{
  //   if(locationDetails.state){

  //     console.log('fromuseEffectLine 20',locationDetails.state)

  //     setUser(locationDetails.state.username)
  //   }
    
  //  },[locationDetails.state?.username])
   const navigate=useNavigate()
   const awesome=(item)=>{
      navigate('/itemdetails',{state:{item}})
   }
  //  console.log(locationDetails)
   const catchd=useRef(locationDetails)
  //  console.clear()

  //  console.log(catchd.current)
   

   
    useEffect(()=>{
      (async ()=>{
        try{
          const response=await fetch('https://dummyjson.com/products?limit=100')
          if(!response.ok){
            throw new Error("Api is failed")
          }
          const data=await response.json()
          setState(data.products)
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
    <h6 style={{color:'#00425A',margin:'0'}}>WELCOME {user.toUpperCase()}</h6>
    <div className='grid-container'>
      {state?.map((item,index)=>{
      return(
        <div className='grid-item grow' onClick={()=>awesome(item)} key={index}>
          <img src={item.images[0]} style={{height:'200px'}}></img>
          <h3>{item.title}</h3>
          <p>{`price:$${item.price}`}</p>
          {/* <p>{`rate:${item.rating.rate}`}</p> */}
         
        </div>
      )
      })}
    </div>
    </>
  )

}

export default ProductList