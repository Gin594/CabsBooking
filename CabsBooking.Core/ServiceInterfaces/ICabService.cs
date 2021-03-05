using CabsBooking.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface ICabService
    {
        Task<Cab> AddCab(Cab cab);
        Task<Booking> UpdateCab(Cab cab);
        Task<Booking> DeleteCab(Cab cab);
        Task<IEnumerable<Cab>> GetAllCabs();
    }
}
