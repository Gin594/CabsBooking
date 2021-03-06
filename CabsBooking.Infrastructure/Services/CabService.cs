using CabsBooking.Core.Entities;
using CabsBooking.Core.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Infrastructure.Services
{
    public class CabService : ICabService
    {
        public Task<Cab> AddCab(Cab cab)
        {
            throw new NotImplementedException();
        }

        public Task DeleteCab(Cab cab)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Cab>> GetAllCabs()
        {
            throw new NotImplementedException();
        }

        public Task<Booking> UpdateCab(Cab cab)
        {
            throw new NotImplementedException();
        }
    }
}
