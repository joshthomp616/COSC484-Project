import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../nav'
import './home.css';

export default function Home() {
  return (
    <>
    <Navbar />
    <h1>This is the homepage</h1>
    </>
  );
}