using AutoSpaWebApi.AutoSpaRepo;
using Microsoft.AspNetCore.Components.Web;

namespace AutoSpaWebApi.Repository
{
    public class AppointmentRepository
    {
        private readonly SpaDBContext context;

        public AppointmentRepository(SpaDBContext _context)
        {
            context = _context;
        }
        public ICollection<Appointment> GetAllAppointments() {
            return context.Appointments.ToList();
        }
        public Appointment GetAppointment(int id, DateTime appDate)
        {
            return context.Appointments.FirstOrDefault(ap => ap.CustomerId == id && ap.DateOfAappointment.Equals(appDate));
        }
        public ICollection<Appointment> GetAppointmentsByCustomerID(int id)
        {
            return context.Appointments.Where(cst => cst.CustomerId == id).ToList();
        }
        public ICollection<Appointment> GetAppointmentByServiceID(int Id)
        {
            return context.Appointments.Where(cst => cst.ServiceId == Id).ToList();
        }
        public ICollection<Appointment> GetAppointmentsByDate(DateTime date)
        {
            return context.Appointments.Where(app => app.DateOfAappointment.Date.Equals(date.Date)).ToList();
        }
        public bool CreateAppointment(Appointment appointment)
        {
            context.Appointments.Add(appointment);
            return context.SaveChanges() > 0;
        }

        public bool UpdateAppointment(DateTime appDate, Appointment appointment)
        {
            var _appointment = context.Appointments.FirstOrDefault(ap => ap.CustomerId == appointment.CustomerId && 
            ap.DateOfAappointment.Equals(appDate));
            _appointment.DateOfAappointment = appointment.DateOfAappointment;
            _appointment.ServiceId = appointment.ServiceId;
            _appointment.VehicleId = appointment.VehicleId;

            context.Appointments.Update(_appointment);
            return context.SaveChanges() > 0;
        }
        public bool DeleteAppointment(Appointment appointment)
        {
            context.Appointments.Remove(appointment);
            return context.SaveChanges() > 0;
        }
    }
}
