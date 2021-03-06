using CabsBooking.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.RepositoryInterfaces
{
    public interface IBookingRepository
    {
        Task<Booking> AddAsync(Booking booking);
        Task<Booking> UpdateAsync(Booking booking);
        Task DeleteAsync(Booking booking);
        Task<IEnumerable<Booking>> ListAllAsync();
        Task<Booking> GetBookingById(int id);
    }
}
