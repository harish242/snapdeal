
import React,{useEffect} from "react"
import { CartState } from "./Home"
import '../styles/ProductList.css'
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Container from "@mui/material/Container"; 

const SelectProducts = () => {
  const {
    state,
    setFilterData,
    filterdata,
    value,
    awesome,
    selectProducts,
    handleSelectProducts,
    naviagte
  } = CartState();

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Grid container spacing={0}>
        {selectProducts?.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            {/* <div className="grid-container">
              <div
                className="grid-item grow"
                onClick={() => awesome(item)}
              >
                <img
                  src={item.images[0]}
                  style={{ height: "200px", maxWidth: "100%" }}
                  alt={item.title}
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
        ))}
      </Grid>
    </Container>
  );
};

export default SelectProducts;
