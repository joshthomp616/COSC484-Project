using System;
using System.Collections.Generic;

namespace AutoSpaWebApi.AutoSpaRepo;

public partial class Customer
{
    public string? Fname { get; set; }

    public string? Lname { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Email { get; set; }

    public int CustomerId { get; set; }

    public string? Password { get; set; }

    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();

    public virtual ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
}
