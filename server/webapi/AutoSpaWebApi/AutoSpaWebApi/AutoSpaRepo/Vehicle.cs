using System;
using System.Collections.Generic;

namespace AutoSpaWebApi.AutoSpaRepo;

public partial class Vehicle
{
    public int VehicleId { get; set; }

    public string? VehicleMake { get; set; }

    public string? VehicleModel { get; set; }

    public string? VehicleYear { get; set; }

    public int? CustomerId { get; set; }

    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();

    public virtual Customer? Customer { get; set; }
}
