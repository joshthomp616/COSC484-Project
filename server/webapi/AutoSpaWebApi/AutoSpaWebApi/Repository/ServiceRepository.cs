using AutoSpaWebApi.AutoSpaRepo;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace AutoSpaWebApi.Repository
{
    public class ServiceRepository
    {
        private readonly SpaDBContext context;

        public ServiceRepository(SpaDBContext _context)
        {
            context = _context;
        }
        public ICollection<Service> GetServices()
        {
            return context.Services.ToList();
        }
        public bool CreateService(Service service)
        {
            int id;
            if (!context.Services.Any())
                id = 1;
            else
                id = context.Services.OrderBy(se => se.ServiceId).Last().ServiceId + 1;
            service.ServiceId = id;
            context.Services.Add(service);
            return context.SaveChanges() > 0 ? true : false;
        }
        public Service GetService(int id)
        {
            return context.Services.Where(se => se.ServiceId == id).FirstOrDefault();
        }
        public Service GetServiceByName(string name)
        {
            return context.Services.Where(se => se.ServiceName.Equals(name)).FirstOrDefault();
        }
        public bool RemoveService(Service service)
        {
            context.Services.Remove(service);
            return context.SaveChanges() > 0;
        }
        public bool UpdateService(Service service)
        {
            var _service = context.Services.FirstOrDefault(se => se.ServiceId == service.ServiceId); 
            _service.ServiceName = service.ServiceName;
            _service.ServiceRate = service.ServiceRate;
            _service.ServiceDescription = service.ServiceDescription;
            context.Services.Update(_service);
            return context.SaveChanges() > 0 ? true : false;
        }
    }
}
