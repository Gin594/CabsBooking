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
    public class CabRepository : ICabRepository
    {
        private readonly CabsBookingDbContext _dbContext;
        public CabRepository(CabsBookingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Cab> AddAsync(Cab cab)
        {
            _dbContext.Cabs.Add(cab);
            await _dbContext.SaveChangesAsync();
            return cab;
        }

        public async Task DeleteAsync(Cab cab)
        {
            _dbContext.Cabs.Remove(cab);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<Cab> GetCabById(int id)
        {
            return await _dbContext.Cabs.FindAsync(id);
        }

        public async Task<IEnumerable<Cab>> ListAllAysnc()
        {
            return await _dbContext.Cabs.ToListAsync();
        }

        public async Task<Cab> UpdateAsync(Cab cab)
        {
            _dbContext.Entry(cab).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return cab;
        }
    }
}
