using CabsBooking.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.RepositoryInterfaces
{
    public interface IPlaceRepository
    {
        Task<Place> AddAsync(Place place);
        Task<Place> UpdateAsync(Place place);
        Task DeleteAsync(Place place);
        Task<IEnumerable<Place>> ListAllAsync();
    }
}
