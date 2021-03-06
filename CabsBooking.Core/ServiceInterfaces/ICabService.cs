using CabsBooking.Core.Entities;
using CabsBooking.Core.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface ICabService
    {
        Task<CabResponseModel> AddCab(Cab cab);
        Task<CabResponseModel> UpdateCab(Cab cab);
        Task DeleteCab(Cab cab);
        Task<IEnumerable<CabResponseModel>> GetAllCabs();
    }
}
