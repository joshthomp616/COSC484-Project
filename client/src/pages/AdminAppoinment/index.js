import React, { useState } from 'react';
import axios from 'axios';
import './admin.css'; // Import the CSS file for styling

const AppointmentForm = () => {
  const [appointments, setAppointments] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [date, setDate] = useState('');

  const fetchAppointmentsByCustomerId = async () => {
    try {
      const response = await axios.get(`https://autospaapi.azurewebsites.net/Appointment/customer/${customerId}`);
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAppointmentsByServiceId = async () => {
    try {
      const response = await axios.get(`https://autospaapi.azurewebsites.net/Appointment/service/${serviceId}`);
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAppointmentsByDate = async () => {
    try {
      const response = await axios.get(`https://autospaapi.azurewebsites.net/Appointment/appointmentsDate/${date}`);
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAppointmentByCustomerIdAndDate = async () => {
    try {
      const response = await axios.get(`https://autospaapi.azurewebsites.net/Appointment/customerAppointment/${customerId}/${date}`);
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCustomerIdChange = (event) => {
    setCustomerId(event.target.value);
  };

  const handleServiceIdChange = (event) => {
    setServiceId(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="appointment-page">
      <h2>Appointments</h2>

      <div className="input-group">
        <label htmlFor="customerId">Customer ID:</label>
        <input type="text" id="customerId" value={customerId} onChange={handleCustomerIdChange} />

        <button className="spaced-button" onClick={fetchAppointmentsByCustomerId}>Get by Customer ID</button>
      </div>

      <div className="input-group">
        <label htmlFor="serviceId">Service ID:</label>
        <input type="text" id="serviceId" value={serviceId} onChange={handleServiceIdChange} />

        <button className="spaced-button" onClick={fetchAppointmentsByServiceId}>Get by Service ID</button>
      </div>

      <div className="input-group">
        <label htmlFor="date">Date:</label>
        <input type="text" id="date" value={date} onChange={handleDateChange} />

        <button className="spaced-button" onClick={fetchAppointmentsByDate}>Get by Date</button>
      </div>

      <div className="input-group">
        <label htmlFor="customerIdAndDate">Customer ID:</label>
        <input type="text" id="customerIdAndDate" value={customerId} onChange={handleCustomerIdChange} />

        <label htmlFor="date">Date:</label>
        <input type="text" id="date" value={date} onChange={handleDateChange} />

        <button className="spaced-button" onClick={fetchAppointmentByCustomerIdAndDate}>Get by Customer ID and Date</button>
      </div>

      {appointments.length > 0 && (
  <table className="appointment-table">
    <thead>
      <tr>
        <th>Customer ID</th>
        <th>Date</th>
        <th>Service ID</th>
        <th>Vehicle ID</th>
      </tr>
    </thead>
    <tbody>
      {appointments.map((appointment, index) => (
        <tr key={index}>
          <td>{appointment.customerId}</td>
          <td>{appointment.dateOfAappointment}</td>
          <td>{appointment.serviceId}</td>
          <td>{appointment.vehicleId}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}
</div>
);
};

export default AppointmentForm;

