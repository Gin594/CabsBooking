using CabsBooking.Core.Entities;
using CabsBooking.Core.Models.Request;
using CabsBooking.Core.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface ICabService
    {
        Task<CabResponseModel> AddCab(CabRequestModel cabRequest);
        Task<CabResponseModel> UpdateCab(CabRequestModel cabRequest);
        Task DeleteCab(int id);
        Task<IEnumerable<CabResponseModel>> GetAllCabs();
    }
}
