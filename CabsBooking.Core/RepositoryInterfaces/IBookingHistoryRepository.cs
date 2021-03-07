using CabsBooking.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.RepositoryInterfaces
{
    public interface IBookingHistoryRepository
    {
        Task<BookingHistory> AddAsync(BookingHistory history);
        Task<BookingHistory> UpdateAsync(BookingHistory history);
        Task DeleteAsync(BookingHistory history);
        Task<IEnumerable<BookingHistory>> ListAllAysnc();
        Task<BookingHistory> GetHistoryById(int id);
    }
}
