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
    public class CabService : ICabService
    {
        private readonly ICabRepository _cabRepository;
        private readonly IMapper _mapper;
        public CabService(ICabRepository cabRepository, IMapper mapper)
        {
            _cabRepository = cabRepository;
            _mapper = mapper;
        }
        public async Task<CabResponseModel> AddCab(CabRequestModel cabRequest)
        {
            var cab = _mapper.Map<Cab>(cabRequest);
            var response = await _cabRepository.AddAsync(cab);
            return _mapper.Map<CabResponseModel>(response);
        }

        public async Task DeleteCab(int id)
        {
            var cab = await _cabRepository.GetCabById(id);
            if (cab == null)
            {
                throw new NotFoundException("No cab found");
            }
            await _cabRepository.DeleteAsync(cab);
        }

        public async Task<IEnumerable<CabResponseModel>> GetAllCabs()
        {
            var cabs = await _cabRepository.ListAllAysnc();
            var response = _mapper.Map<IEnumerable<CabResponseModel>>(cabs);
            return response;
        }

        public async Task<CabResponseModel> UpdateCab(CabRequestModel cabRequest)
        {
            var cab = _mapper.Map<Cab>(cabRequest);
            var resposne = await _cabRepository.UpdateAsync(cab);
            return _mapper.Map<CabResponseModel>(resposne);
        }
    }
}
