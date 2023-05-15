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
    public class CustomerController : Controller
    {
        private readonly CustomerRepository _customerRepository;
        private readonly IMapper mapper;

        public CustomerController(CustomerRepository customerRepository, IMapper mapper)
        {
            _customerRepository = customerRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(ICollection<CustomerDTO>))]
        public IActionResult GetCustomers() {
            var cutomers = mapper.Map<ICollection<CustomerDTO>>(_customerRepository.GetAllCutomers());
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(cutomers);
        }
        [HttpGet("{custId}")]
        [ProducesResponseType(200, Type = typeof(CustomerDTO))]
        [ProducesResponseType(400)]
        public IActionResult GetCustomer(int custId) {
            var customer = mapper.Map<CustomerDTO>(_customerRepository.GetCustomerById(custId));
            if (customer != null)
            {
                return Ok(customer);
            }
            return NotFound();
        }
        [HttpGet("firstname/{Fname}")]
        [ProducesResponseType(200, Type = typeof(ICollection<CustomerDTO>))]
        [ProducesResponseType(400)]
        public IActionResult GetCustomersByFname(string Fname)
        {
            var customer = mapper.Map<ICollection<CustomerDTO>>(_customerRepository.GetCustomersByFName(Fname));
            if (customer != null)
            {
                return Ok(customer);
            }
            return NotFound();
        }
        [HttpGet("lastname/{Lname}")]
        [ProducesResponseType(200, Type = typeof(ICollection<CustomerDTO>))]
        [ProducesResponseType(400)]
        public IActionResult GetCustomerByLname(string Lname)
        {
            var customer = mapper.Map<ICollection<CustomerDTO>>(_customerRepository.GetCustomerByLName(Lname));
            if (customer != null)
            {
                return Ok(customer);
            }
            return NotFound();
        }

        [HttpPost("CreateCustomer")] 
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreatCustomer([FromBody]CustomerDTO customer)
        {
            if (customer == null)
                return BadRequest();
            var _customer = _customerRepository.GetAllCutomers().
                Where(se => se.Fname.Trim().ToLower().Equals(customer.Fname.Trim().ToLower()) && 
                se.Lname.Trim().ToLower().Equals(customer.Lname)).
                FirstOrDefault();
            if(_customer != null)
            {
                ModelState.AddModelError("Already Exist", "Customer already exist in the database");
                return StatusCode(422, ModelState["Already Exist"]);
            }
            var customerMap = mapper.Map<Customer>(customer);
            if(_customerRepository.CreateCustomer(customerMap))
            {
                return Ok("Successfully created a customer");
            }
            return BadRequest();
        }
        [HttpPut("{customerId}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateCustomer(int customerId, [FromBody]CustomerDTO customer)
        {
            if(customer == null || customerId == customer.CustomerId)
                return BadRequest();
            if(_customerRepository.GetCustomerById(customerId) == null)
                return NotFound();
            var serviceMap = mapper.Map<Customer>(customer);
            if(_customerRepository.EditCustomer(serviceMap))
            {
                return Ok("Customer Has been Successfully Updated");
            }
            ModelState.AddModelError("NoUpdate", "Something went wrong when updating the customer");
            return StatusCode(500, ModelState["NoUpdate"]);
        }


        [HttpDelete("{customerId}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult DeleteCustomer(int customerId)
        {
            var customer = _customerRepository.GetCustomerById(customerId);
            if(customer == null)
            {
                return NotFound();
            }
            if (_customerRepository.DeleteCustomer(customer))
            {
                return Ok("Customer has been deleted");
            }
            ModelState.AddModelError("NoDelete", "The was a problem when deleting the service");
            return StatusCode(500, ModelState["NoDelete"]);
        }
    }
}
