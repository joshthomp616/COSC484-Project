import * as React from 'react';

import Navbar from '../../nav';
import {Container,TextField,Button, Typography, Grid, Paper,} from '@mui/material';

export default function AboutUs() {
  return (
    <>
    <Navbar />
    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65vh' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Expert Car Wash and Auto Detail In Towson</h2>
          <h4>Founded in 2023 by Towson University Students, Auto Spa car wash and detailing Center is a leader in changing the landscape of Car care in the Baltimore, MD, area. At our car wash and detailing center, we are committed to providing exceptional customer service, and we strive to exceed your expectations with every visit. So why wait? Come see us today and experience the difference that our professional car wash and detailing services can make for you and your vehicle.</h4>
        </div>
      </div>
      <Typography
      variant="subtitle2"
      align="center"
      color="textSecondary"
      gutterBottom
    >
      Need help ? Give us a call at 443-123-4567!
    </Typography>       
      <Grid container justifyContent="center">
                <Button variant="contained" color="secondary">
                  Call Us
                   
                </Button>
              </Grid>  
    </>
  );
}
