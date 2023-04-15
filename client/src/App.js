import * as React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';


import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
        <Routes>

          
          <Route path="/login" element={<Login /> } />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
        
        </Routes>
    </div>
  );
}

export default App;
