import * as React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <>
    
    <h1>Home page</h1>
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">AboutUs</Link></li>
          
        </ul>
      </nav>


      
    </>
  );
}