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
    public class BookingHistoryRepository : IBookingHistoryRepository
    {
        private readonly CabsBookingDbContext _dbContext;
        public BookingHistoryRepository(CabsBookingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<BookingHistory> AddAsync(BookingHistory history)
        {
            _dbContext.BookingHistories.Add(history);
            await _dbContext.SaveChangesAsync();
            return history;
        }

        public async Task DeleteAsync(BookingHistory history)
        {
            _dbContext.BookingHistories.Remove(history);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<BookingHistory>> ListAllAysnc()
        {
            return await _dbContext.BookingHistories.ToListAsync();
        }

        public async Task<BookingHistory> UpdateAsync(BookingHistory history)
        {
            _dbContext.Entry(history).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return history;
        }
    }
}
