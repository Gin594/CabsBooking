using CabsBooking.Core.Entities;
using CabsBooking.Core.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Infrastructure.Services
{
    public class BookingHistoryService : IBookingHistoryService
    {
        public Task<BookingHistory> AddHistory(BookingHistory history)
        {
            throw new NotImplementedException();
        }

        public Task DeleteHistory(BookingHistory history)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<BookingHistory>> GetAllHistorys()
        {
            throw new NotImplementedException();
        }

        public Task<BookingHistory> UpdateHistory(BookingHistory history)
        {
            throw new NotImplementedException();
        }
    }
}
