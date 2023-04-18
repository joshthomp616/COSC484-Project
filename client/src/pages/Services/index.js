import * as React from 'react';
import Navbar from '../../nav'
import './services.css';
import Images from './Images/Index.js'


const servicePackages = [
  {
    name: 'Basic',
    price: {
      sedan: "60",
      midsizeSUV: "75",
      fullsizeSUV: "100"
    },
    items: [
      'Exterior hand wash',
      'Interior vacuuming',
      'Window cleaning',
      'Tire and rim cleaning',
      'Towel dry'
    ]
  },
  {
    name: 'Standard',
    price: {
      sedan: "150",
      midsizeSUV: "175",
      fullsizeSUV: "200"
    },
    items: [
      'Basic package +',
      'Interior wipe down',
      'Dashboard cleaning',
      'Seat cleaning',
      'Carpet and mat shampooing & Extraction'
    ]
  },
  {
    name: 'Premium',
    price: {
      sedan: "200",
      midsizeSUV: "250",
      fullsizeSUV: "300"
    },
    items: [
      'Standard package +',
      'Leather seat cleaning and conditioning',
      'Clay bar treatment',
      'Waxing'
    ]
  }
];


export default function Services() {
  return (
    <>
      <Navbar />
      <h1>Services</h1>
      {servicePackages.map((service) => (
        <div className = "service-packages" key={service.name}>
          <h2>{service.name}</h2>
          <ul>
            {service.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>Pricing:</h2>
          <ul>
            <li>Sedan: ${service.price.sedan}</li>
            <li>Midsize SUV: ${service.price.midsizeSUV}</li>
            <li>Fullsize SUV: ${service.price.fullsizeSUV}</li>
          </ul>
        </div>

      ))}
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


