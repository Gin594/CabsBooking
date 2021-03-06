using CabsBooking.Core.Entities;
using CabsBooking.Core.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Infrastructure.Services
{
    public class PlaceService : IPlaceService
    {
        public Task<Place> AddPlace(Place place)
        {
            throw new NotImplementedException();
        }

        public Task DeletePlace(Place place)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Place>> GetAllPlaces()
        {
            throw new NotImplementedException();
        }

        public Task<Place> UpdatePlace(Place place)
        {
            throw new NotImplementedException();
        }
    }
}
