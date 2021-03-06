using CabsBooking.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface IBookingHistoryService
    {
        Task<BookingHistory> AddHistory(BookingHistory history);
        Task<BookingHistory> UpdateHistory(BookingHistory history);
        Task DeleteHistory(BookingHistory history);
        Task<IEnumerable<BookingHistory>> GetAllHistorys();
    }
}
