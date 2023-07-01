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
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/joy/Button";
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
      <CssBaseline />
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {selectedProducts.map((item) => {
                return (
                  <Item key={item.id}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={item.image} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.title}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {item.category}
                              </Typography>
                              {`-${item.description}`}
                              <ListItem>
                              qty:
                              </ListItem>
                              <ListItem><AddIcon onClick={() => onSelect(item)} /></ListItem>
                              <ListItem>{item.count}</ListItem>
                              <ListItem><RemoveIcon onClick={() => onSelectRemove(item)}/></ListItem>
                               </React.Fragment>
                          }
                        />
                        <span>{`Rate:${item.rating.rate}`}</span>
                        <span>
                          <DeleteOutlineIcon
                            onClick={() => HandleDelete(item)}
                          />
                        </span>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </List>
                  </Item>
                );
              })}
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ bgcolor: "grey", height: "200px", color: "white" }}>
                <div>Total items:{totalSelected}</div>
                <br />
                <br />
                <div>Total Cost:${cost}</div>
                <br />
                <br />
                <br />

                <Modals />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
