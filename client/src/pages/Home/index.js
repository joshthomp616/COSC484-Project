import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../nav'
import './home.css';
import { Container,Button,TextField, Typography, Grid, Paper } from '@mui/material';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className= 'home-container'>
      <video src = "/video1.mp4" autoPlay loop muted />

      <div style={{ textAlign: 'center'}}> 
      <h1> WELCOME TO AUTO SPA</h1>
      <p> A New Era In The Automotive Service</p>
      </div>
      </div>
      

      <div className = 'home-btns'>
      <h2> Schedule Your Next Appointment With Us</h2>
        { <Button href ="/appointment" 
          sx = {{marginTop:3, borderRadius:3}} variant= "contained" color= "secondary" size= "large" >
          Request Appointment</Button>  }
        </div>
    
    </>
  );
}