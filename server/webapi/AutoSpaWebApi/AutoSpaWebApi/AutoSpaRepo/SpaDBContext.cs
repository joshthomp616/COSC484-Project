using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AutoSpaWebApi.AutoSpaRepo;

public partial class SpaDBContext : DbContext
{
    public SpaDBContext()
    {
    }

    public SpaDBContext(DbContextOptions<SpaDBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Appointment> Appointments { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Service> Services { get; set; }

    public virtual DbSet<Vehicle> Vehicles { get; set; }

//    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseMySQL("server=localhost; Database=autospa; Uid=root;port=3306;Pwd=@1234Passw0rd");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Appointment>(entity =>
        {
            entity.HasKey(e => new { e.CustomerId, e.DateOfAappointment }).HasName("PRIMARY");

            entity.ToTable("appointment");

            entity.HasIndex(e => e.ServiceId, "serviceId_idx");

            entity.HasIndex(e => e.VehicleId, "vehicle_Id_idx");

            entity.Property(e => e.DateOfAappointment).HasColumnType("datetime");
            entity.Property(e => e.ServiceId).HasColumnName("serviceId");
            entity.Property(e => e.VehicleId).HasColumnName("vehicleId");

            entity.HasOne(d => d.Customer).WithMany(p => p.Appointments)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Customer_Id");

            entity.HasOne(d => d.Service).WithMany(p => p.Appointments)
                .HasForeignKey(d => d.ServiceId)
                .HasConstraintName("serviceId");

            entity.HasOne(d => d.Vehicle).WithMany(p => p.Appointments)
                .HasForeignKey(d => d.VehicleId)
                .HasConstraintName("vehicle_Id");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("PRIMARY");

            entity.ToTable("customer");

            entity.Property(e => e.CustomerId).HasColumnName("customerId");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Fname).HasMaxLength(45);
            entity.Property(e => e.Lname)
                .HasMaxLength(45)
                .HasColumnName("LName");
            entity.Property(e => e.Password).HasMaxLength(45);
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(45)
                .HasColumnName("phoneNumber");
        });

        modelBuilder.Entity<Service>(entity =>
        {
            entity.HasKey(e => e.ServiceId).HasName("PRIMARY");

            entity.ToTable("service");

            entity.Property(e => e.ServiceDescription).HasMaxLength(300);
            entity.Property(e => e.ServiceName).HasMaxLength(45);
            entity.Property(e => e.ServiceRate).HasPrecision(10);
        });

        modelBuilder.Entity<Vehicle>(entity =>
        {
            entity.HasKey(e => e.VehicleId).HasName("PRIMARY");

            entity.ToTable("vehicle");

            entity.HasIndex(e => e.CustomerId, "customerID_idx");

            entity.Property(e => e.VehicleMake).HasMaxLength(45);
            entity.Property(e => e.VehicleModel).HasMaxLength(45);
            entity.Property(e => e.VehicleYear)
                .HasMaxLength(45)
                .HasColumnName("vehicleYear");

            entity.HasOne(d => d.Customer).WithMany(p => p.Vehicles)
                .HasForeignKey(d => d.CustomerId)
                .HasConstraintName("customerID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
