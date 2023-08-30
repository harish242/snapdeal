import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ItemDetails.css";
import Button from "@mui/material/Button";
import { CartState } from "./Home";

const ItemDetails = () => {
  const data = useLocation();
  const fin = data?.state.item;
  const [isDisabled, setIsDisabled] = useState(true);

  const { onSelect, onSelectRemove, selectedProducts } = CartState();
  console.log("itemD/12", selectedProducts);

  // const isDisabled=selectedProducts[2]?.count===0?true:false
  const item = selectedProducts?.find((item) => item.id === fin.id);
  // let coun=item?.count
  useEffect(() => {
    item?.count === 0 ? setIsDisabled(true) : setIsDisabled(false);
  }, [item?.count]);
  // if(item.count===undefined){
  //   isDisabled=true
  // }
  console.log("itemD/16", item);
  return (
    <div className="container">
      <div className="details">
        <img src={fin?.images[0]} className="img" />
        <div
          style={{
            color: "#001C30",
            padding: "0px 20px",
            fontWeight: "bolder",
          }}
        >{`${fin.title.slice(0, 36)}`}</div>
        {/* <div style={{position:'relative',left:'400px',bottom:'30px',fontSize:'20px',color:'#FF8989'}}>{`Rating:${fin.rating.rate}`}</div> */}

        <div
          style={{ color: "#001C30", padding: "0px 20px" }}
        >{`${fin.description.slice(0, 100)}.`}</div>
        <div className="inside">
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              marginTop: "5px",
              color: "#001C30",
            }}
          >{`Price:$${fin.price}`}</div>
        </div>
        <div className="small-images">
          {item?.images?.map((item,index)=>{
           return <span key={index}><img src={item} alt="small images" style={{height:'60px'}}/></span>
          })}
          
        </div>

        <div className="btn">
          <Button
            variant="outlined"
            style={{ margin: "20px", color: "#FF8989" }}
            onClick={() => onSelect(fin)}
          >
            ADDTOCART
          </Button>

          <Button
            variant="outlined"
            style={{ margin: "20px", color: "#FF8989" }}
            onClick={() => onSelectRemove(fin)}
            disabled={isDisabled}
          >
            REMOVECART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
