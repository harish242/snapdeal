import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  
  <React.Fragment>
    <CardContent style={{marginTop:'10px'}}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Add some items
      </Typography>
      <Typography variant="h5" component="div">
        {/* be{bull}nev{bull}o{bull}lent */}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Enjoy browsing
      </Typography>
      <Typography variant="body2">
        Select the products
        <br />
        {'"What ever you needed"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to='/home'>
      <Button size="small">Continue Shopping</Button>
      </Link>
      
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}