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
    public class ServiceController : Controller
    {

        private readonly ServiceRepository serviceRepository;
        private readonly IMapper mapper;

        public ServiceController(ServiceRepository serviceRepository, IMapper mapper)
        {
            this.serviceRepository = serviceRepository;
            this.mapper = mapper;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(ICollection<ServiceDTO>))]
        [ProducesResponseType(400)]
        public IActionResult GetServices()
        {
            var services = mapper.Map<ICollection<ServiceDTO>>(serviceRepository.GetServices());
            if (services != null)
            {
                return Ok(services);
            }
            return BadRequest();
        }
        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(ServiceDTO))]
        [ProducesResponseType(400)]
        public IActionResult GetService(int id)
        {
            var service = mapper.Map<ServiceDTO>(serviceRepository.GetService(id));
            if (service != null)
            {
                return Ok(service);
            }
            return BadRequest();
        }

        [HttpGet("servicename/{name}")]
        [ProducesResponseType(200, Type = typeof(ServiceDTO))]
        [ProducesResponseType(400)]
        public IActionResult getSertviceByName(string name)
        {
            var service = mapper.Map<ServiceDTO>(serviceRepository.GetServiceByName(name));
            if (service != null)
            {
                return Ok(service);
            }
            return BadRequest();
        }


        [HttpPost("CreateService")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateService([FromBody]ServiceDTO service)
        {
            if(service == null)
                return BadRequest(ModelState);
            var _service = serviceRepository.GetServices().
                Where(se => se.ServiceName.Trim().ToLower().
                Equals(service.ServiceName.ToLower())).
                FirstOrDefault();
            if(_service != null)
            {
                ModelState.AddModelError("Already Exist", "Service already exists in the database");
                return StatusCode(422, ModelState["Already Exist"]);
            }
            var serviceMap = mapper.Map<Service>(service);
            if(serviceRepository.CreateService(serviceMap))
            {
                return Ok("Successfully created a service");
            }
            return BadRequest();
        }


        [HttpPut("{serviceId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateService(int serviceId, [FromBody]ServiceDTO service)
        {
            if((service == null) || (serviceId != service.ServiceId))
                return BadRequest(ModelState);
            if(serviceRepository.GetService(serviceId) == null)
                {
                return NotFound();
            }
            var serviceMap = mapper.Map<Service>(service);
            if (serviceRepository.UpdateService(serviceMap))
            {
                return Ok("Service has been successfully Updated");
            }
            ModelState.AddModelError("NoUpdate", "Something went wrong when updating the service");
            return StatusCode(500, ModelState["NoUpdate"]);
        }


        [HttpDelete("{serviceId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult DeleteService(int serviceId)
        {
            var _service = serviceRepository.GetService(serviceId);
            if (_service == null) return NotFound();
            if(serviceRepository.RemoveService(_service))
            {
                return Ok("Service has been deleted");
            }
            ModelState.AddModelError("NoDelete", "The was a problem when deleting the service");
            return StatusCode(500, ModelState["NoDelete"]);
        }
    }
}
