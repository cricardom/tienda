/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { typography } from '@mui/system';
import accounting from 'accounting';
import imagen from "../imagens/levis-blue-501.jpeg"

export default function Product() {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            levis
          </Avatar>
        }
        action={
          <typography
          variant='h5'
          color='textSecundary'
          >
          {accounting.formatMoney(150000)} 
          </typography>
        }
        title="LEVIS 501"
        subheader="ORIGINAL INDIGO"
      />
      <CardMedia
        component="img"
        height="245"
        img src= {imagen}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Original Levis Strauss 501, 5 bolsillos, indigo, botones. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="AddShoppingCart">
          <AddShoppingCart />
        </IconButton>        
      </CardActions>
    </Card>
  );
}
