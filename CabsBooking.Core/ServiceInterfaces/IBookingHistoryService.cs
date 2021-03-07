using CabsBooking.Core.Entities;
using CabsBooking.Core.Models.Request;
using CabsBooking.Core.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface IBookingHistoryService
    {
        Task<BookingHistoryResponseModel> AddHistory(BookingHistoryRequestModel historyRequest);
        Task<BookingHistoryResponseModel> UpdateHistory(BookingHistoryRequestModel historyRequest);
        Task DeleteHistory(int id);
        Task<IEnumerable<BookingHistoryResponseModel>> GetAllHistorys();
    }
}
