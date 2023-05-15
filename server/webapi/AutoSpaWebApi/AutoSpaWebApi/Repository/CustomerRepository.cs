using AutoSpaWebApi.AutoSpaRepo;

namespace AutoSpaWebApi.Repository
{
    public class CustomerRepository
    {
        private readonly SpaDBContext context;

        public CustomerRepository(SpaDBContext _context)
        {
            context = _context;
        }
        public ICollection<Customer> GetAllCutomers() {
        return context.Customers.ToList();
        }
        public Customer GetCustomerById(int id)
        {
            return context.Customers.FirstOrDefault(c => c.CustomerId == id);
        }
        public ICollection <Customer> GetCustomersByFName(string name) {
            return context.Customers.Where(cus => cus.Fname.Equals(name)).ToList();
        }
        public ICollection<Customer> GetCustomerByLName(string name)
        {
            return context.Customers.Where(cus => cus.Lname.Equals(name)).ToList();
        }
        public bool CreateCustomer(Customer customer)
        {
            int id;
            if (!context.Customers.Any())
                id = 1000;
            else 
                id = context.Customers.OrderBy(cu => cu.CustomerId).Last().CustomerId + 1;
            customer.CustomerId = id;
            context.Customers.Add(customer);
            return context.SaveChanges() > 0 ? true : false;
        }

        public bool DeleteCustomer(Customer customer)
        { 
            int customerId = customer.CustomerId;
            Appointment app = context.Appointments.FirstOrDefault(c => c.CustomerId == customerId);
            if(app != null)
            {
                context.Appointments.Remove(app);
            }
            Vehicle veh = context.Vehicles.FirstOrDefault(c => c.CustomerId == customerId);
            if(veh != null) context.Vehicles.Remove(veh);
            context.Customers.Remove(customer);
            return context.SaveChanges() > 0;
        }
        public bool EditCustomer(Customer customer)
        {
            var _customer = context.Customers.FirstOrDefault(cu => cu.CustomerId == customer.CustomerId);
            
                _customer.Fname = customer.Fname;
                _customer.Lname = customer.Lname;
                _customer.Email = customer.Email;
                _customer.PhoneNumber = customer.PhoneNumber;
            context.Customers.Update(customer);
            return context.SaveChanges() > 0;
        }
        
    }
}
