using System;
using System.Collections.Generic;
using System.Text;

namespace CabsBooking.Core.Models.Request
{
    public class BookingRequestModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public DateTime BookingDate { get; set; }
        public string BookingTime { get; set; }
        public int FromPlace { get; set; }
        public int ToPlace { get; set; }
        public string PickupAddress { get; set; }
        public string LandMark { get; set; }
        public DateTime PickupDate { get; set; }
        public string PickupTime { get; set; }
        public string ContactNo { get; set; }
        public int CabTypeId  { get; set; }

    }
}
