/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../imagens/logoTheLook.png";
import {ShoppingCart} from "@mui/icons-material"
import { Badge } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src= {logo}
            sx= {{mr: 5}}
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ flexGrow: 10 }}>
            <strong>THE LOOK Tienda de Ropa</strong>
          </Typography>
          <IconButton aria-label="show cart items" color="inherit">
            <Badge badgeContent={20} color= "error" />
              <ShoppingCart frontSize="large" color= "inherit" sx= {{mr:2}} />
           </IconButton>
          <Button 
          color="inherit"
          variant="outlined"
          >
          <strong>Iniciar Sesion</strong>
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
