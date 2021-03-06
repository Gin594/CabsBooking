using System;
using System.Collections.Generic;
using System.Text;

namespace CabsBooking.Core.Models.Response
{
    public class BookingResponseModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public DateTime BookingDate { get; set; }
        public string BookingTime { get; set; }
        public string PickupAddress { get; set; }
        public string LandMark { get; set; }
        public DateTime PickupDate { get; set; }
        public string PickupTime { get; set; }
        public string ContactNo { get; set; }
        public string Status { get; set; }

        public PlaceResponseModel From { get; set; }
        public PlaceResponseModel To { get; set; }
        public CabResponseModel Cab { get; set; }
    }


}
