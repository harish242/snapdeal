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
import "../styles/sidebar.css";
import SelectProducts from "./selectProducts";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import SwipeableViewsUtils from "react-swipeable-views-utils";
import {auth,provider} from '../firebase'
import { signInWithPopup } from "firebase/auth";

// Other imports...

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
    label: "Goč, Serbia",
    imgPath:
      "https://img.freepik.com/premium-photo/look-here-woman-showing-man-fashion-clothes-shop-window_116547-37597.jpg",
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://i.pinimg.com/1200x/5c/18/b0/5c18b066da9a67121b770d72a98631ae.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://img.freepik.com/premium-photo/happiness-winter-holidays-christmas-people-concept-smiling-young-woman-hat-scarf-with-pink-shopping-bags-blue-lights-background_380164-70419.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      // "https://i.pinimg.com/1200x/5c/18/b0/5c18b066da9a67121b770d72a98631ae.jpg",
      "https://img.freepik.com/premium-vector/cartoon-woman-group-with-shopping-bag-big-sale-banner_48369-12015.jpg",
  },

];

const ProductList = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [logstate,setLogState]=useState(true)
  // const{setUser,navigate}=CartState();

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
    setSelectProducts,
    setFilterData,
    setUser,
    navigate
  } = CartState();
  const locationDetails = useLocation();

  const catchd = useRef(locationDetails);
  const userNamed = user?.user?.displayName;
  if (userNamed) {
    // localStorage.setItem('username',JSON.stringify(userNamed))
    localStorage.setItem("username", userNamed || "");
  }

  console.log("pL/48", userNamed);

  console.log("product/39", stateRed);

  if (state.length === 0) {
    return <h1>Loading...</h1>;
  }

  const HandleClick1=()=>{
    signInWithPopup(auth,provider).then(result=>{        
        const username=result.user.displayName
        setUser(result.user.displayName)
        console.log('lgin/18',result)    
    }).catch((error)=>{
        console.log(error)
    })
}

  const handleSelectedpage = (ind) => {
    if (ind >= 1 && ind <= state.length / 10 && ind !== page) setPage(ind);
  };
  const handleAllProducts = () => {
    console.log("PL/51", "now i clicked");
    setSelectProducts([]);
    setFilterData([]);
  };

  console.log("PL/55", user);

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  const HandleClick=()=>{
    // console.log("Button is clicked")    
signInWithPopup(auth,provider).then(result=>{
    const username=result.user.displayName
    setUser(result)
    console.log('lgin/18',result)
//  navigate('/Home',{
//     state:{
//         username,
//     }
//  })
navigate('/')
}).catch((error)=>{
    console.log(error)
})
}
const Handlelogin=()=>{
  if(logstate){
    HandleClick1()
    setLogState(false)
  }
}

  return (
    <main
      style={{
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "whitesmoke",
        
        // marginTop:'50px'
      }}
      onClick={()=>Handlelogin()}
    >
      {/* <h2 style={{ color: "#7C9D96", margin: 0, padding: 0 }}>
        WELCOME {userNamed?.toUpperCase()}
      </h2> */}

      <Grid container spacing={4} style={{marginTop:'62px'}}>
        {/* Sidebar */}
        <Grid item xs={6} sm={3} md={2}>
          <div className="sidebar">
            {/* Sidebar content */}
            <h4 style={{ textAlign: "center", margin: "0", padding: "0" }}>
              Select Your products
            </h4>
            <>
              <div
                className="inner"
                onClick={handleAllProducts}
                style={{ padding: "3px", color: "grey", cursor: "pointer" }}
              >
                All
              </div>
              {stateRed &&
                stateRed.map((item) => {
                  return (
                    <div
                      style={{
                        padding: "3px",
                        color: "grey",
                        cursor: "pointer",
                      }}
                      className="inner"
                      onClick={() => handleSelectProducts(item)}
                    >
                      <Item>{item.category}</Item>
                    </div>
                  );
                })}
            </>
          </div>
        </Grid>

        {/* Main content */}
        <Grid item xs={6} sm={9} md={10}>
          <Grid container spacing={-4}>
            <Grid item xs={12} sm={6} md={9}>
              <Box sx={{ maxWidth: 750, flexGrow: 1,borderRadius:'10px' }}>
                {/* <Paper
                  square
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                    bgcolor: "background.default",
                  }}
                >
                  <Typography>{images[activeStep].label}</Typography>
                </Paper> */}
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            height: 300,
                            display: "block",
                            maxWidth: '100%',
                            overflow: "hidden",
                            width: "100%",
                            borderRadius:'3px'
                          }}
                          src={step.imgPath}
                          alt={step.label}
                        />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                {/* <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                /> */}
              </Box>
            </Grid>
            <Grid item xs={0} sm={6} md={3}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzXbmE862bd-3r5-7D4KTVnyelrNiIFdw-w&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          loginin to your
        </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica */}
         Snapdeal account
        </Typography>
        </div>
      
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <div style={{ textAlign: 'center',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',left:'85px' }}>
        <Button size="small" onClick={HandleClick1}>Login</Button>
        </div>
      </CardActions>
      <div style={{textAlign:'center',paddingBottom:'22px'}}>
      <Typography variant="body2" color="text.secondary">
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica */}
         Happy Shopping💕
        </Typography>
      </div>
     
    </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{marginTop:'8px',zIndex:'1'}}>
            {selectProducts.length > 0 ? (
              <SelectProducts />
            ) : filterdata.length > 0 ? (
              <FilteredData />
            ) : (
              state?.slice(page * 10 - 10, page * 10).map((item, index) => (
                <Grid key={index} xs={12} sm={6} md={3}>
                  <div className="grid-container">
                    <div
                      className="grid-item grow"
                      onClick={() => awesome(item)}
                    >
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
            <div className="pagination">
              {/* Pagination controls */}
              <span
                className={page > 1 ? "" : "page-Disabled"}
                onClick={() => handleSelectedpage(page - 1)}
              >
                ◀
              </span>
              {[...Array(state.length / 10)].map((_, index) => {
                return (
                  <span
                    className={page === index + 1 ? "page-selected" : ""}
                    key={index}
                    onClick={() => handleSelectedpage(index + 1)}
                  >
                    {index + 1}
                  </span>
                );
              })}
              <span
                className={page < state.length / 10 ? "" : "page-Disabled"}
                onClick={() => handleSelectedpage(page + 1)}
              >
                ▶
              </span>
            </div>
          )}
        </Grid>
      </Grid>

      {/* ******************************************************* */}
    </main>
  );
};

export default ProductList;
