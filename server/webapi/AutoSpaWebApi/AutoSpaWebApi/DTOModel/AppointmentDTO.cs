namespace AutoSpaWebApi.DTOModel
{
    public class AppointmentDTO
    {
        public int CustomerId { get; set; }

        public DateTime DateOfAappointment { get; set; }

        public int? ServiceId { get; set; }
        public int? VehicleId { get; set; }
    }
}
