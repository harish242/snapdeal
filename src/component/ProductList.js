import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState,useEffect } from 'react';
import Container from '@mui/material/Container';
import { CartState } from './Home';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
    const [state,setState]=useState([]);
   const {selectedProducts,onSelect,HandleDelete}=CartState()
   const locationDetails=useLocation()
   console.log(onSelect)
   
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
        return <h1>No products</h1>
      }
     

  return (
    <>
    <h1 style={{color:'#00425A'}}>WELCOME {locationDetails.state?.username.toUpperCase()}</h1>
    <Container maxWidth="lg" style={{maxWidth:'100%',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:"20px",marginTop:"10px"}}>
      
        {state.map(item=>{
            // const disabled=selectedProducts?.find(items=>items.id===item.id)?.count===0
            return (
                <Card sx={{ maxWidth: 400}} key={item.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height=""
                    image={item.image}
                    alt={item.category}
                    
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title.slice(0,18)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={()=>{onSelect(item)}} size="small" color="primary">
                    Add
                  </Button>
                  {/* <Button onClick={()=>{onSelectRemove(item)}} disabled={disabled} size="small" color="primary">
                    Remove
                  </Button> */}
                  <Button onClick={()=>HandleDelete(item)}>Delete</Button>
                </CardActions>
              </Card>
            ) 
                
        })}
    </Container>
    </>
  )

}

export default ProductList