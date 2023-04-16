import * as React from 'react';
import Navbar from '../../nav';
import { useState } from 'react';
import {Container,TextField,Button, Typography, Grid, Paper,} from '@mui/material';

var Appointment = () => {
  var [date, setDate] = useState('');
  var [time, setTime] = useState('');
  var [Email, setEmail] = useState('');
  var [FirstName, setFirstName] = useState('');
  var [LastName, setLastName] = useState('');
  var [TelephoneNumber, setTelephoneNumber] = useState('');

  var handleSubmit = (event) => {
    event.preventDefault();
    console.log({ Email, TelephoneNumber, FirstName, LastName, date, time });
  };
  var handleCallUs = (event) => {
    console.log("Call us button clicked");
    event.preventDefault();
  };

  
  return (
    <div
    
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120vh',
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 1 }}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Make an Appointment
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  required
                  fullWidth
                  id="FirstName"
                  label=" First Name"
                  value={FirstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  required
                  fullWidth
                  id="LastName"
                  label="Last Name"
                  value={LastName}
                  onChange={(event) => setLastName(event.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="TelephoneNumber"
                  label="Telephone Number"
                  type="TelephoneNumber"
                  value={TelephoneNumber}
                  onChange={(event) => setTelephoneNumber(event.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  type="Email"
                  value={Email}
                  onChange={(event) => setEmail(event.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  label="Preferred Date"
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="time"
                  label="Preferred Time"
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ step: 300 }}
                />
              </Grid>
              <Grid item xs={12} justifyContent="center">
                <Button variant="contained" color="primary" type="submit">
                  Submit
               
   </Button>
              </Grid>
              </Grid>
              </form>
              <Typography
                variant="subtitle2"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Don't have time to fill out this form? Give us a call at 443-123-4567!
              </Typography>
              <Grid container justifyContent="center">
                <Button variant="contained" color="secondary">
                  Call Us
                   
                </Button>
              </Grid>  
            

           
            
          
        </Paper>
      </Container>
    </div>
  );
};

export default Appointment;
