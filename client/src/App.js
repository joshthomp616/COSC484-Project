import * as React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Account from "./pages/Account";
import Appointment from "./pages/Appointment";
import ContactUs from "./pages/ContactUs";
import './App.css';

import AppointmentForm from './pages/AdminAppoinment/index';

import Apps from "./pages/Admin/components/App";



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
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/about" element={<AboutUs />} />
         // <Route path="/contact" element={<ContactUs />} />
         <Route path="/adminApp" element={<AppointmentForm />} />
         <Route path="/admin" element={<Apps />} />
        </Routes>
    </div>
  );
}

export default App;
