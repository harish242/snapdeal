import React, { useEffect } from "react";
import { CartState } from "./Home";
import "../styles/ProductList.css";
import Grid from "@mui/material/Grid";

const FilteredData = () => {
  const {
    state,
    setFilterData,
    filterdata,
    value,
    awesome,
    handleSelectedpage,
    page,
    selectProducts,
    
  } = CartState();

  return (
    <Grid container spacing={2}>
      {filterdata?.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
       
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
  );
};

export default FilteredData;
