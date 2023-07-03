import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { CartState } from "../component/Home";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Emptycard from '../component/Emptycard'
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import Button from "@mui/joy/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Modals from "../component/Modal";
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
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {selectedProducts.length===0?<Emptycard/>:selectedProducts.map((item) => {
            return (
              <Item key={item.id} style={{margin:'20px'}}>
                <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.image} />
                </ListItemAvatar>
                <ListItemText  secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.title.slice(0, 10)}
              </Typography>
              {`-${item.description.slice(0,40)}`}
            </React.Fragment>
          }></ListItemText>
                </ListItem>
               
                <div style={{display:'flex'}}>
                <ListItem>Qty:</ListItem>
                <ListItem>
                  <AddIcon onClick={() => onSelect(item)} />
                </ListItem>
                <ListItem>{item.count}</ListItem>
                <ListItem>
                  <RemoveIcon onClick={() => onSelectRemove(item)} />
                </ListItem>

                <ListItem>{`Rate:${item.rating.rate}`}</ListItem>
                <ListItem>
                  <DeleteOutlineIcon onClick={() => HandleDelete(item)} />
                </ListItem>
                </div>
               

                <Divider variant="inset" component="li" />
              </Item>
            );
          })}
        </Grid>
        <Grid item xs={6} >
          <Item
            sx={{
              bgcolor: "#FFECEC",
              height: "85vh",
              color: "white",
              marginTop: "20px",
              backgroundImage:"url('https://img.freepik.com/free-photo/orange-copy-space-background-with-sale-idea_23-2148305925.jpg?w=1060&t=st=1688323597~exp=1688324197~hmac=7c556ad5f2f5cda8dc5c6daec22ca67890bd994b4d4900b19c76a9348a45f533')",
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover'
            }}
          >
            <div
              style={{ fontSize: "30px", color: "white", marginTop: "130px",marginLeft:'300px',fontWeight:'bolder' }}
            >
              Total items:{totalSelected}
            </div>
            <br />
            <br />
            <div style={{ fontSize: "20px", color: "white",fontWeight:'bold',marginLeft:'300px' }}>
              Total Cost:${cost.toFixed(2)}
            </div>
            <br />
            <br />
            <br />

            <Modals />
          </Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
