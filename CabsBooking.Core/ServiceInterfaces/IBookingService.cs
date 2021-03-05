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
        Task<Booking> UpdateBooking(Booking booking);
        Task<Booking> DeleteBooking(Booking booking);
        Task<IEnumerable<Booking>> GetAllBookings();
    }
}
