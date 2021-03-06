using CabsBooking.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface IPlaceService
    {
        Task<Place> AddPlace(Place place);
        Task<Place> UpdatePlace(Place place);
        Task DeletePlace(Place place);
        Task<IEnumerable<Place>> GetAllPlaces();
    }
}
