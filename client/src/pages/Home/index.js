import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../nav'
import './home.css';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className= 'home-container'>
      <video src = "/video1.mp4" autoPlay loop muted />
      <h1> WELCOME TO AUTO SPA</h1>
      <h2> A New Era In The Automotive Service</h2>
      <p> Schedule Your Next Appointment With Us</p>

      <div className = 'home-btns'>
        { <Button href ="/appointment" 
          sx = {{marginTop:3, borderRadius:3}} variant= "contained" color= "secondary" size= "large" >
          Request Appointment</Button>  }
        </div>
    </div>
    </>
  );
}