using AutoMapper;
using CabsBooking.Core.Entities;
using CabsBooking.Core.Models.Response;
using CabsBooking.Core.RepositoryInterfaces;
using CabsBooking.Core.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Infrastructure.Services
{
    public class PlaceService : IPlaceService
    {
        private readonly IPlaceRepository _placeRepository;
        private readonly IMapper _mapper;
        public PlaceService(IPlaceRepository placeRepository, IMapper mapper)
        {
            _placeRepository = placeRepository;
            _mapper = mapper;
        }
        public Task<PlaceResponseModel> AddPlace(Place place)
        {
            throw new NotImplementedException();
        }

        public Task DeletePlace(Place place)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<PlaceResponseModel>> GetAllPlaces()
        {
            var places = await _placeRepository.ListAllAsync();
            return _mapper.Map<IEnumerable<PlaceResponseModel>>(places);
        }

        public Task<PlaceResponseModel> UpdatePlace(Place place)
        {
            throw new NotImplementedException();
        }
    }
}
