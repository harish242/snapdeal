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
          {/* Item Card */}
          <div className="grid-container">
            <div className="grid-item grow" onClick={() => awesome(item)}>
              <img
                src={item.images[0]}
                style={{ height: "200px", maxWidth: "100%" }}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <p style={{ border: "1px solid #91C8E4" }}>{`price:$${item.price}`}</p>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilteredData;
