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


const initialPrices = [basicPrices['sedan'], standardPrices['sedan'], premiumPrices['sedan']]
const allPrices = [basicPrices, standardPrices, premiumPrices];
const initalSelected = ['sedan', 'sedan', 'sedan']

function Services() {
  const [prices, setPrices] = React.useState(initialPrices);
  const [selected, setSelected] = React.useState(initalSelected);


  

  return (
    <>
      <Navbar />
      <Box sx = {{flexGrow: 1, m: 2, display: {xs: 'none', md: 'flex' }, flexDirection: "column"}}>
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
                  defaultValue={selected[index]} 
                  aria-labelledby='basicPackageRadioGroupLabel'
                  onChange={(event) => {
                    setPrices(existingPrices => {
                        return [
                          ...existingPrices.slice(0, index),
                          existingPrices[index] = allPrices[index][event.target.value],
                          ...existingPrices.slice(index + 1),
                        ]
                    })
                  }}
                  >
                    <FormControlLabel value="sedan" control={<Radio/>} label="Sedan"/>
                    <FormControlLabel value="midsize" control={<Radio/>} label="Midsize SUV"/>
                    <FormControlLabel value="fullsize" control={<Radio/>} label="Fullsize SUV"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6">
                  Price: {prices[index]}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        ))
        }      
      {/*For xs services */}
      </Box>
      <Box sx = {{flexGrow: 1, m: 2, display: {xs: 'flex', md: 'none' }, flexDirection: "column"}}>
        { allServices.map((service, index) =>(
          <Card sx={{minWidth: 300, m: 2, boxShadow: "5px 5px 10px #22e3c3"}}>
          <CardHeader
            title = {service[0]}
          />
          <CardContent>
            <Grid container rowSpacing={2} alignItems="center">
              <Grid item xs={12}>
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
                  key={index} 
                  aria-labelledby='basicPackageRadioGroupLabel'
                  onChange={(event) => {
                    setPrices(existingPrices => {
                        return [
                          ...existingPrices.slice(0, index),
                          existingPrices[index] = allPrices[index][event.target.value],
                          ...existingPrices.slice(index + 1),
                        ]
                    })
                  }}
                  >
                    <FormControlLabel value="sedan" control={<Radio/>} label="Sedan"/>
                    <FormControlLabel value="midsize" control={<Radio/>} label="Midsize SUV"/>
                    <FormControlLabel value="fullsize" control={<Radio/>} label="Fullsize SUV"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6">
                  Price: {prices[index]}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        ))
        }      
      </Box>
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

