using System;
using System.Collections.Generic;
using System.Text;

namespace CabsBooking.Core.Entities
{
    public class Cab
    {
        public int CabTypeId { get; set; }
        public string CabTypeName { get; set; }

        public ICollection<Booking> Bookings { get; set; }
        public ICollection<BookingHistory> Histories { get; set; }
    }
}
