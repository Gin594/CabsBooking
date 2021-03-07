using AutoMapper;
using CabsBooking.Core.Entities;
using CabsBooking.Core.Exceptions;
using CabsBooking.Core.Models.Request;
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
        public async Task<PlaceResponseModel> AddPlace(PlaceRequestModel placeRequest)
        {
            var place = _mapper.Map<Place>(placeRequest);
            var response = await _placeRepository.AddAsync(place);
            return _mapper.Map<PlaceResponseModel>(response);
        }

        public async Task DeletePlace(int id)
        {
            var place = await _placeRepository.GetPlaceById(id);
            if (place == null)
            {
                throw new NotFoundException("No place found");
            }
            await _placeRepository.DeleteAsync(place);
        }

        public async Task<IEnumerable<PlaceResponseModel>> GetAllPlaces()
        {
            var places = await _placeRepository.ListAllAsync();
            return _mapper.Map<IEnumerable<PlaceResponseModel>>(places);
        }

        public async Task<PlaceResponseModel> UpdatePlace(PlaceRequestModel placeRequest)
        {
            var place = _mapper.Map<Place>(placeRequest);
            var response = await _placeRepository.UpdateAsync(place);
            return _mapper.Map<PlaceResponseModel>(response);
        }
    }
}
