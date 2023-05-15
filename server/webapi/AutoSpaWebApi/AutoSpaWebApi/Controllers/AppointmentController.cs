using AutoMapper;
using AutoSpaWebApi.AutoSpaRepo;
using AutoSpaWebApi.DTOModel;
using AutoSpaWebApi.Repository;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol;

namespace AutoSpaWebApi.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class AppointmentController : Controller
    {
        private readonly AppointmentRepository appointmentRepository;
        private readonly IMapper mapper;

        public AppointmentController(AppointmentRepository appointmentRepository, IMapper mapper)
        {
            this.appointmentRepository = appointmentRepository;
            this.mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(ICollection<AppointmentDTO>))]
        [ProducesResponseType(400)]
        public IActionResult getAppointments() { 
            var appointments = mapper.Map<ICollection<AppointmentDTO>>(appointmentRepository.GetAllAppointments());
            if(appointments != null) {
                return Ok(appointments);
            }
            return BadRequest();
        }
        [HttpGet("customer/{customerId}")]
        [ProducesResponseType(200, Type = typeof(ICollection<AppointmentDTO>))]
        [ProducesResponseType(400)]
        public IActionResult getAppointmentsByCustomerId(int customerId) {
            var appointments = mapper.Map<ICollection<AppointmentDTO>>(appointmentRepository.GetAppointmentsByCustomerID(customerId));
            if(appointments != null)
            {
                return Ok(appointments);
            }
            return BadRequest();
        }


        [HttpGet("service/{serviceId}")]
        [ProducesResponseType(200, Type = typeof(ICollection<AppointmentDTO>))]
        [ProducesResponseType(400)]
        public IActionResult getAppointmentsByServiceId(int serviceId)
        {
            var appointments = mapper.Map<ICollection<AppointmentDTO>>(appointmentRepository.GetAppointmentByServiceID(serviceId));
            if(appointments != null)
            {
                return Ok(appointments);
            }
            return BadRequest();
        }

        [HttpGet("appointmentsDate/{date}")]
        [ProducesResponseType(200, Type = typeof(ICollection<AppointmentDTO>))]
        [ProducesResponseType(400)]
        public IActionResult getAppointmentsByDate(DateTime date)
        {
            var appointments = mapper.Map<ICollection<AppointmentDTO>>(appointmentRepository.GetAppointmentsByDate(date));
            if (appointments != null)
            {
                return Ok(appointments);
            }
            return BadRequest();
        }
        [HttpGet("customerAppointment/{customerId}/{date}")]
        [ProducesResponseType(200, Type = typeof(AppointmentDTO))]
        [ProducesResponseType(400)]
        public IActionResult getCustomerAppointment(int customerId, DateTime date)
        {
            var appointments = mapper.Map<AppointmentDTO>(appointmentRepository.GetAllAppointments().
                Where(ap => (ap.CustomerId == customerId) && (ap.DateOfAappointment.Date.Equals(date.Date)) && (ap.DateOfAappointment.Hour == date.Hour)).FirstOrDefault());
            if (appointments != null)
            {
                return Ok(appointments);
            }
            return BadRequest();
        }
        [HttpPost("CreateAppointment")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateAppointment([FromBody] AppointmentDTO appointment)
        {
            if(appointment == null)
                return BadRequest();
            var _appointment = appointmentRepository.GetAllAppointments().
                Where(ap => ap.CustomerId == appointment.CustomerId && 
                (ap.DateOfAappointment.Date.Equals(appointment.DateOfAappointment.Date)) && 
                ap.DateOfAappointment.Hour.Equals(appointment.DateOfAappointment.Hour)).
                FirstOrDefault();
            if(_appointment != null)
            {
                ModelState.AddModelError("Already exist", "This Customer entiy already has an appointment on this day and at this time. Please choose another time during this day, or another available day");
                return StatusCode(422, ModelState["Already exist"]);
            }
            var appointmentMap = mapper.Map<Appointment>(appointment);
            if (appointmentRepository.CreateAppointment(appointmentMap))
            {
                return Ok("Appointment has been successfully creates");
            }
            return BadRequest();
        }
        [HttpPut("{customerId}/{appDate}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateAppointment(int customerId, DateTime appDate,
            [FromBody] AppointmentDTO newApp
            ) {
           if( newApp == null || newApp.CustomerId != customerId) return BadRequest();
           if(appointmentRepository.GetAppointment(customerId, appDate) == null) return NotFound();
           var newAppMap = mapper.Map<Appointment>(newApp);
            if(appointmentRepository.UpdateAppointment(appDate, newAppMap))
            {
                return Ok("Appointment has been success fully updated");
            }
            ModelState.AddModelError("NoUpdate", "Something went wrong when updating the Vehicle");
            return StatusCode(500, ModelState["NoUpdate"]);
        }

        [HttpDelete("{customerId}/{date}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult DeleteAppointment(int customerId, DateTime date) {
            var appointment = appointmentRepository.GetAppointment(customerId, date);
            if(appointment == null) return NotFound();
            if (appointmentRepository.DeleteAppointment(appointment))
            {
                return Ok("Appointment has been deleted");
            }
            ModelState.AddModelError("NoDelete", "The was a problem when deleting the appointment entity");
            return StatusCode(500, ModelState["NoDelete"]);
        }
    }
}
