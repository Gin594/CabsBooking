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
    public class CabService : ICabService
    {
        private readonly ICabRepository _cabRepository;
        private readonly IMapper _mapper;
        public CabService(ICabRepository cabRepository, IMapper mapper)
        {
            _cabRepository = cabRepository;
            _mapper = mapper;
        }
        public Task<CabResponseModel> AddCab(Cab cab)
        {
            throw new NotImplementedException();
        }

        public Task DeleteCab(Cab cab)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CabResponseModel>> GetAllCabs()
        {
            var cabs = await _cabRepository.ListAllAysnc();
            var response = _mapper.Map<IEnumerable<CabResponseModel>>(cabs);
            return response;
        }

        public Task<CabResponseModel> UpdateCab(Cab cab)
        {
            throw new NotImplementedException();
        }
    }
}
