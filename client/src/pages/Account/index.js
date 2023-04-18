import * as React from 'react';
import Navbar from '../../nav';
import { useState } from 'react';
import { Container, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Profile = () => {
  const [services, setServices] = useState([
    { date: '2023-04-15', package: 'Basic (Sedan)', price: 60},
   { date: '2023-04-15', package: 'Standard (Midsize SUV)', price: 175},
   { date: '2023-04-16', package: 'Standard (Fullsize SUV)', price: 200},
   { date: '2023-04-17', package: 'Premium (Sedan)', price: 200},
   { date: '2023-04-17', package: 'Basic (Midsize SUV)', price: 75}
  ]);

  return (
    <>
      <div><Navbar /></div>

      <div style={{ padding: '20px' }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
           User
        </Typography>
         
      <h1>Services</h1>


        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date Completed:</TableCell>
                <TableCell>Package:</TableCell>
                <TableCell>Price:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map(service => (
                <TableRow key={service.date + service.package}>
                  <TableCell>{service.date}</TableCell>
                  <TableCell>{service.package}</TableCell>
                  <TableCell>${service.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Profile;
