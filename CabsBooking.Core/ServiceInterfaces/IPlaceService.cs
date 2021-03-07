using CabsBooking.Core.Entities;
using CabsBooking.Core.Models.Request;
using CabsBooking.Core.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface IPlaceService
    {
        Task<PlaceResponseModel> AddPlace(PlaceRequestModel placeRequest);
        Task<PlaceResponseModel> UpdatePlace(PlaceRequestModel placeRequest);
        Task DeletePlace(int id);
        Task<IEnumerable<PlaceResponseModel>> GetAllPlaces();
    }
}
