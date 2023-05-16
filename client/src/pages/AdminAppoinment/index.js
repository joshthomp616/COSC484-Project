import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('https://autospaapi.azurewebsites.net/Appointment');
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Appointments:</h2>
      <button onClick={fetchAppointments}>Load Appointments</button>
      <table>
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
    </div>
  );
};

export default AppointmentForm;
