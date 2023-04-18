import * as React from 'react';
import Navbar from '../../nav'
import './services.css';
import Images from './Images/Index.js'
import SoapIcon from '@mui/icons-material/Soap';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';
import {Box, Grid, Card, CardContent, CardHeader, List, ListItem, ListItemText, ListItemIcon,
  Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel  } from '@mui/material';

const basicPrices = {package: 0,sedan: 60, midsize: 75, fullsize: 100, currentPrice: 60}
const basicServices = 
["Exterior hand wash", 
"Interior vacuuming", 
"Window cleaning",
"Tire and rim cleaning",
"Towel dry"]
const standardPrices = {package: 1, sedan: 150, midsize: 175, fullsize: 200, currentPrice: 150}
const standardServices = 
["Basic package +", 
"Interior wipe down", 
"Dashboard cleaning",
"Seat cleaning",
"Carpet and mat shampooing & Extraction"]
const premiumPrices = {package: 2, sedan: 200, midsize: 250, fullsize: 300, currentPrice: 200}
const premiumServices = 
["Standard package +", 
"Leather seat cleaning and conditioning", 
"Clay bar treatment",
"Waxing"]
const allServices = [
  ["Basic Package", basicPrices, basicServices], 
  ["Standard Package",standardPrices, standardServices],
  ["Premium Package", premiumPrices, premiumServices]]




function Services() {
  const [prices, setPrice] = React.useState([
    basicPrices, standardPrices, premiumPrices
  ]);

  

  return (
    <>
      <Navbar />
      <Box sx = {{flexGrow: 1, m: 2}}>
        { allServices.map((service, index) =>(
          <Card sx={{minWidth: 300, m: 2, boxShadow: "5px 5px 10px #22e3c3"}}>
          <CardHeader
            title = {service[0]}
          />
          <CardContent>
            <Grid container rowSpacing={2} alignItems="center">
              <Grid item xs={6}>
                <List>
                  {service[2].map((feature) => (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <DoubleArrowSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary={feature}/>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={3}>
                <FormControl>
                  <FormLabel id="basicPackageRadioGroupLabel">Car Type</FormLabel>
                  <RadioGroup 
                  defaultValue="sedan" 
                  aria-labelledby='basicPackageRadioGroupLabel'
                  onChange={
                  {/*
                    
                    (event) => {

                      const updatedPrices = prices.map(price => {
                        if(price.package === index) {
                          price.currentPrice = price[event.target.value]
                        } 
                      })
                      setPrice(updatedPrices);
                  }} 
                  */}}
                  >
                    <FormControlLabel value="sedan" control={<Radio/>} label="Sedan"/>
                    <FormControlLabel value="midsize" control={<Radio/>} label="Midsize SUV"/>
                    <FormControlLabel value="fullsize" control={<Radio/>} label="Fullsize SUV"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6">
                  Price: {prices[index].currentPrice}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        ))
        }      
       
      </Box>
      {/*
      <h1>Services</h1>
      {servicePackages.map((service) => (
        <div className = "service-packages" key={service.name}>
          <h2>{service.name}</h2>
          <ul>
            {service.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>Pricing:</p>
          <ul>
            <li>Sedan: ${service.price.sedan}</li>
            <li>Midsize SUV: ${service.price.midsizeSUV}</li>
            <li>Fullsize SUV: ${service.price.fullsizeSUV}</li>
          </ul>
        </div>

      ))}
      */}
      <h3>Before & After</h3>
      
      <div className="image-container">
      <img src={Images.B1} />
      <img src={Images.A1} />
      </div>
      <div className="image-container">
      <img src={Images.B2} />
      <img src={Images.A2} />
      </div>
      <div className="image-container">
      <img src={Images.B3} />
      <img src={Images.A3} />
      </div>
      <div className="image-container">
      <img src={Images.B4} />
      <img src={Images.A4} />
      </div>

    </>
  );
  
}
export default Services;

