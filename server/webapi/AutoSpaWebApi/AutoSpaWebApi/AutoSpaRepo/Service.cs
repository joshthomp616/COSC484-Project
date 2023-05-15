using System;
using System.Collections.Generic;

namespace AutoSpaWebApi.AutoSpaRepo;

public partial class Service
{
    public int ServiceId { get; set; }

    public decimal? ServiceRate { get; set; }

    public string? ServiceName { get; set; }

    public string? ServiceDescription { get; set; }

    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
}
