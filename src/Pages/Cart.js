import React, { useEffect } from "react";
import { CartState } from "../component/Home";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Emptycard from '../component/Emptycard'
import Modals from "../component/Modal";
import '../styles/Cart.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FixedContainer() {
  const {
    selectedProducts,
    onSelect,
    onSelectRemove,
    totalSelected,
    HandleDelete,
  } = CartState();
  console.log(selectedProducts);
  const cost = selectedProducts.reduce((acc, curr) => {
    return acc + curr.count * curr.price;
  }, 0);

  return (
    <main style={{
      width: "100%",
      overflow: "hidden",
      backgroundColor: "whitesmoke",
      padding: "20px",
      // marginTop:'70px'
    }} >
    <Grid container spacing={2} style={{marginTop:'50px'}} >
      <Grid item xs={12} md={6} >
        {/* Render the selected products */}
        {selectedProducts.length === 0 ? (
          <Emptycard />
        ) : (
          selectedProducts.map((item) => (
            <Item key={item.id} style={{ margin: '20px' }}>
              {/* List item details */}
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.images[0]} />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.title.slice(0, 10)}
                      </Typography>
                      {`-${item.description.slice(0, 40)}`}
                    </React.Fragment>
                  }
                />
              </ListItem>

              {/* Quantity and action controls */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='flex-container'>
                <Typography>Qty: {item.count}</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <RemoveIcon onClick={() => onSelectRemove(item)} />
                  <AddIcon onClick={() => onSelect(item)} />
                  <DeleteOutlineIcon onClick={() => HandleDelete(item)} />
                </div>
              </div>

              <Divider variant="inset" component="li" />
            </Item>
          ))
        )}
      </Grid>
      <Grid item xs={12} md={6} style={{marginTop:'20px'}}>
        {/* Total summary */}
        <Item
          sx={{
            bgcolor: "#FFECEC",
            color: "black",
            padding: "20px",
            backgroundImage: "url('your-image-url')",  // Replace with your image URL
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Typography variant="h5">Total items: {totalSelected}</Typography>
          <Typography variant="h6" >Total Cost: ${cost.toFixed(2)}</Typography>
          {/* Responsive Modals */}
          <div className="responsive-modals" style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
            <Modals />
          </div>
        </Item>
      </Grid>
    </Grid>
    </main>
  );
}