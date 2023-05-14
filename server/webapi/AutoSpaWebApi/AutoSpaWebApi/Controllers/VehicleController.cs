using AutoMapper;
using AutoSpaWebApi.AutoSpaRepo;
using AutoSpaWebApi.DTOModel;
using AutoSpaWebApi.Helper;
using AutoSpaWebApi.Repository;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol;

namespace AutoSpaWebApi.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class VehicleController: Controller
    {
        private readonly VehicleRepostory vehicleRepostory;
        private readonly IMapper mapper;

        public VehicleController(VehicleRepostory vehicleRepostory, IMapper mapper
            )
        {
            this.vehicleRepostory = vehicleRepostory;
            this.mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(ICollection<VehicleDTO>))]
        [ProducesResponseType(400)]
        public IActionResult GetAllVehicles()
        {
            
            var vehicles = mapper.Map<ICollection<VehicleDTO>>(vehicleRepostory.GetVehicles());
            if(vehicles.Count > 0)
            {
                return Ok(vehicles);
            }
            return BadRequest();
        }
        
        [HttpGet("{Id}")]
        [ProducesResponseType(200, Type = typeof(VehicleDTO))]
        [ProducesResponseType(400)]
        public IActionResult GetVehicle(int Id)
        {
            var vehicle = mapper.Map<VehicleDTO>(vehicleRepostory.GetVehicle(Id));
            if(vehicle != null)
            {
                return Ok(vehicle);
            }
            return BadRequest();
        }
        [HttpGet("date/{year}")]
        [ProducesResponseType(200, Type = typeof(ICollection<VehicleDTO>))]
        [ProducesResponseType(400)]
        public IActionResult GetVehiclesByYear(string year)
        {
            var vehicles = mapper.Map<ICollection<VehicleDTO>>(vehicleRepostory.GetVehiclesByYear(year));
            if (vehicles != null)
            {
                return Ok(vehicles);
            }
            return BadRequest();
        }

        [HttpGet("customer/{custId}")]
        [ProducesResponseType(200, Type = typeof(ICollection<VehicleDTO>))]
        [ProducesResponseType(400)]
        public IActionResult GetVehiclesByCustomerId(int custId)
        {
            var vehicles = mapper.Map<ICollection<VehicleDTO>>(vehicleRepostory.GetVehiclesByCystomerId(custId));
            if (vehicles != null)
            {
                return Ok(vehicles);
            }
            return BadRequest();
        }

        [HttpGet("vehicleMake/{make}")]
        [ProducesResponseType(200, Type = typeof(ICollection<VehicleDTO>))]
        [ProducesResponseType(400)]
        public IActionResult GetVehiclesByMake(string make)
        {
            var vehicles = mapper.Map<ICollection<VehicleDTO>>(vehicleRepostory.GetVehiclesByMake(make));
            if (vehicles != null)
            {
                return Ok(vehicles);
            }
            return BadRequest();
        }

        [HttpPost("CreateVehicle")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateVehicle([FromBody]VehicleDTO vehicle)
        {
            if(vehicle == null)
                return BadRequest();
            var _vehicle = vehicleRepostory.GetVehicles().
                Where(ve => ve.CustomerId == vehicle.CustomerId && 
                ve.VehicleMake.Equals(vehicle.VehicleMake) && 
                ve.VehicleModel.Equals(vehicle.VehicleModel) && 
                ve.VehicleYear.Equals(vehicle.VehicleYear)).
                FirstOrDefault();
            if(_vehicle != null)
            {
                ModelState.AddModelError("Vehicle exist", "This vehicle already exist under the ownership of this customer. And there is a chance that they have a car of th same year, make and model, there is no need to add this to the database as it will only result in data redundancy.");
                return StatusCode(422, ModelState["Vehicle exist"]);
            }
            var vehicleMap = mapper.Map<Vehicle>(vehicle);
            if (vehicleRepostory.CreateVehicle(vehicleMap))
            {
                return Ok("The appointment has to be created");
            }
            return BadRequest();
        }
        [HttpPut("{vehicleId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult EditVehicle(int vehicleId,
            [FromBody]VehicleDTO vehicle) {
            if(vehicle == null || vehicleId != vehicle.VehicleId)
            {
                return BadRequest();
            }
            if(vehicleRepostory.GetVehicle(vehicleId) == null)
            {
                return NotFound();
            }
            var vehicleVap = mapper.Map<Vehicle>(vehicle);
            if(vehicleRepostory.UpdateVehicle(vehicleVap))
            {
                return Ok("Vehicle has been Successfully Updated");
            }
            ModelState.AddModelError("NoUpdate", "Something went wrong when updating the Vehicle");
            return StatusCode(500, ModelState["NoUpdate"]);
        }

        [HttpDelete("{vehicleId}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult DeleteVehicle(int vehicleId)
        {
            var vehicle = vehicleRepostory.GetVehicle(vehicleId);
            if (vehicle == null)
            {
                return BadRequest();
            }
            if(vehicleRepostory.DeleteVehicle(vehicle))
                return Ok("This vehicle has been deleted");
            ModelState.AddModelError("NoDelete", "The was a problem when deleting the vehicle");
            return StatusCode(500, ModelState["NoDelete"]);
        }
    }
}
