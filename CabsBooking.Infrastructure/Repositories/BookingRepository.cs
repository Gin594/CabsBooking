using CabsBooking.Core.Entities;
using CabsBooking.Core.RepositoryInterfaces;
using CabsBooking.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Infrastructure.Repositories
{
    public class BookingRepository : IBookingRepository
    {
        private readonly CabsBookingDbContext _dbContext;
        public BookingRepository(CabsBookingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Booking> AddAsync(Booking booking)
        {
            _dbContext.Bookings.Add(booking);
            await _dbContext.SaveChangesAsync();
            return booking;
        }

        public async Task DeleteAsync(Booking booking)
        {
            _dbContext.Bookings.Remove(booking);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<Booking> GetBookingById(int id)
        {
            return await _dbContext.Bookings.FindAsync(id);
        }

        public async Task<IEnumerable<Booking>> ListAllAsync()
        {
            return await _dbContext.Bookings.ToListAsync();
        }

        public async Task<Booking> UpdateAsync(Booking booking)
        {
            _dbContext.Entry(booking).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return booking;
        }
    }
}
