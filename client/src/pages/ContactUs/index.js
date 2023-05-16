import * as React from 'react';
import Navbar from '../../nav';
import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';

function ContactUs() {

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Paper elevation={3} sx={{ p: 4, width: '60%', maxWidth: 500 }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" type="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Phone" type="tel" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Message" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="secondary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10vh', paddingLeft: '20px', paddingRight: '20px' }}>
        <div>
          <Typography variant="subtitle2" align="left" color="textSecondary" gutterBottom>
            Hours Of Operation <br />
            Monday – Friday: 7:30am – 5:00pm <br />
            Saturday: 8:00am – 12:00pm <br />
            Sunday: Closed
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" align="left" color="textSecondary" gutterBottom>
            Our Location <br />
            7800 York Road. <br />
            Towson, MD 21252 <br />
            443-123-4567
          </Typography>
        </div>
      </div>
      <Typography variant="subtitle2" align="center" color="textSecondary" gutterBottom>
        Call Us Today For A Free Estimate! 443-123-4567
      </Typography>
      <Grid container justifyContent="center">
        <Button variant="contained" color="secondary">
          Call Us
        </Button>
      </Grid>

    </>
  );
}

export default ContactUs;
