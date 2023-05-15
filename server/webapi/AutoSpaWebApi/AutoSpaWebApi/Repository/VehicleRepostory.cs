using AutoSpaWebApi.AutoSpaRepo;

namespace AutoSpaWebApi.Repository
{
    public class VehicleRepostory
    {
        private readonly SpaDBContext context;

        public VehicleRepostory(SpaDBContext _context)
        {
            context = _context;
        }
         
        public ICollection<Vehicle> GetVehicles()
        {
            return context.Vehicles.ToList();
        }
        public Vehicle GetVehicle(int _VehicleId)
        {

            return context.Vehicles.Where(ve => ve.VehicleId == _VehicleId).FirstOrDefault();
        }
        public ICollection<Vehicle> GetVehiclesByCystomerId(int id)
        {
            return context.Vehicles.Where(ve => ve.CustomerId == id).ToList(); 
        }
        public ICollection<Vehicle> GetVehiclesByMake(string Make)
        {
            return context.Vehicles.Where(ve => ve.VehicleMake.Equals(Make)).ToList();

        }
        public ICollection<Vehicle> GetVehiclesByYear(string Year)
        {
            return context.Vehicles.Where(ve => ve.VehicleYear.Equals(Year)).ToList();
        }

        public bool CreateVehicle(Vehicle vehicle)
        {
            int id;
            if (!context.Vehicles.Any())
                id = 1;
            else
                id = context.Vehicles.OrderBy(ve => ve.VehicleId).Last().VehicleId + 1;
            vehicle.VehicleId = id;
            context.Vehicles.Add(vehicle);
            return context.SaveChanges() > 0 ? true : false;
        }
        public bool UpdateVehicle(Vehicle vehicle)
        {
            var _vehicle = context.Vehicles.FirstOrDefault(ve =>  ve.VehicleId == vehicle.VehicleId);
            _vehicle.VehicleMake = vehicle.VehicleMake;
            _vehicle.VehicleYear = vehicle.VehicleYear;
            _vehicle.VehicleModel = vehicle.VehicleModel;
            context.Update(_vehicle);
            return context.SaveChanges() > 0;
        }
        public bool DeleteVehicle(Vehicle vehicle)
        {
            context.Vehicles.Remove(vehicle);
            return context.SaveChanges() > 0;
        }
    }
}
