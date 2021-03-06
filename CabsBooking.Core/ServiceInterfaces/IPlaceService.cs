using CabsBooking.Core.Entities;
using CabsBooking.Core.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface IPlaceService
    {
        Task<PlaceResponseModel> AddPlace(Place place);
        Task<PlaceResponseModel> UpdatePlace(Place place);
        Task DeletePlace(Place place);
        Task<IEnumerable<PlaceResponseModel>> GetAllPlaces();
    }
}
