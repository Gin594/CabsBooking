using CabsBooking.Core.Entities;
using CabsBooking.Core.Models.Request;
using CabsBooking.Core.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.ServiceInterfaces
{
    public interface IBookingService
    {
        Task<BookingResponseModel> AddBooking(BookingRequestModel bookingRequest);
        Task<BookingResponseModel> UpdateBooking(BookingRequestModel booking);
        Task DeleteBooking(int id);
        Task<IEnumerable<BookingResponseModel>> GetAllBookings();
    }
}
