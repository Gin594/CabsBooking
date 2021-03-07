using CabsBooking.Core.Entities;
using CabsBooking.Core.Exceptions;
using CabsBooking.Core.RepositoryInterfaces;
using CabsBooking.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Infrastructure.Repositories
{
    public class PlaceRepository : IPlaceRepository
    {
        private readonly CabsBookingDbContext _dbContext;
        public PlaceRepository(CabsBookingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Place> AddAsync(Place place)
        {
            _dbContext.Places.Add(place);
            await _dbContext.SaveChangesAsync();
            return place;
        }

        public async Task DeleteAsync(Place place)
        {
            try
            {
                _dbContext.Places.Remove(place);
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw new ConflictException("property may used in mutiple cascading table, make sure you delete it in parents table first");
            }
           
        }

        public async Task<Place> GetPlaceById(int id)
        {
            return await _dbContext.Places.FindAsync(id);
        }

        public async Task<IEnumerable<Place>> ListAllAsync()
        {
            return await _dbContext.Places.ToListAsync();
        }

        public async Task<Place> UpdateAsync(Place place)
        {
            _dbContext.Entry(place).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return place;
        }
    }
}
