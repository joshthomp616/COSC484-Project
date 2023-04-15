import * as React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

export default function Services() {
  return (
    <>
      <h1>Services</h1>

<div className="service-package">
  <h2>Basic Package</h2>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
  </ul>
  <button>Select Basic Package</button>
</div>

<div className="service-package">
  <h2>Standard Package</h2>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
    
  </ul>
  <button>Select Standard Package</button>
</div>

<div className="service-package">
  <h2>Premium Package</h2>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
    
  </ul>
  <button>Select Premium Package</button>
</div>
    </>
  );
  
}

