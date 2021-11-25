/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './product';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {
  return (
    <Box sx={{ flexGrow: 12 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
            <Product/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Product/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <Product/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Product/>
        </Grid>
        
      </Grid>
    </Box>
  );
}
