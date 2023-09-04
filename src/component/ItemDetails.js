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

  const item = selectedProducts?.find((item) => item.id === fin.id);

  useEffect(() => {
    // Check if fin.count is defined and greater than zero, and set isDisabled accordingly
    setIsDisabled(!(item?.count !== undefined && item.count > 0));
  }, [item?.count]);

  return (
    <div className="container">
      <div className="details" style={{marginTop:'100px'}}>
        <img src={fin?.images[0]} className="img" />
        <div className="info">
          <div
            style={{
              color: "#001C30",
              fontWeight: "bolder",
            }}
          >{`${fin.title.slice(0, 36)}`}</div>
          <div
            style={{ color: "#001C30" }}
          >{`${fin.description.slice(0, 100)}.`}</div>
          <div className="price">{`Price:$${fin.price}`}</div>
        </div>
        <div className="actions">
          <Button
            variant="outlined"
            className="action-button"
            onClick={() => onSelect(fin)}
          >
            ADD TO CART
          </Button>

          <Button
            variant="outlined"
            className="action-button"
            onClick={() => onSelectRemove(fin)}
            disabled={isDisabled}
          >
            REMOVE FROM CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
