using System;
using System.Collections.Generic;
using System.Text;

namespace CabsBooking.Core.Entities
{
    public class Place
    {
        public int PlaceId { get; set; }
        public string PlaceName { get; set; }

        public ICollection<Booking> BookingsFrom { get; set; }
        public ICollection<Booking> BookingsTo { get; set; }
        public ICollection<BookingHistory> HistoriesFrom { get; set; }
        public ICollection<BookingHistory> HistoriesTo { get; set; }
    }
}
