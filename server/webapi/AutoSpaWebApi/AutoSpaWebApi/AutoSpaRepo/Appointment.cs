using System;
using System.Collections.Generic;

namespace AutoSpaWebApi.AutoSpaRepo;

public partial class Appointment
{
    public int CustomerId { get; set; }

    public DateTime DateOfAappointment { get; set; }

    public int? ServiceId { get; set; }

    public int? VehicleId { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Service? Service { get; set; }

    public virtual Vehicle? Vehicle { get; set; }
}
