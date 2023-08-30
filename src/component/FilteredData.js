import React,{useEffect} from "react"
import { CartState } from "./Home"
import '../styles/ProductList.css'
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
const FilteredData=()=>{
    const{state,setFilterData,filterdata,value,awesome}=CartState()
   
return(
  <Grid xs={12} style={{marginLeft:'20px'}}>
  <Item>

<Grid container spacing={0}>
  {filterdata?.map((item, index) => {
    return (
      <Grid xs={3} spacing={20} style={{margin:'0'}}>
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
</Item>
</Grid> 
    
    
)

}
export default FilteredData;