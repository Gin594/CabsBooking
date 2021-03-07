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
    public class BookingService : IBookingService
    {
        private readonly IBookingRepository _bookingRepository;
        private readonly IMapper _mapper;

        public BookingService(IBookingRepository bookingRepository, IMapper mapper)
        {
            _bookingRepository = bookingRepository;
            _mapper = mapper;
        }
        public async Task<BookingResponseModel> AddBooking(BookingRequestModel bookingRequest)
        {
            var booking = _mapper.Map<Booking>(bookingRequest);
            booking.Status = "pending";
            var response = await _bookingRepository.AddAsync(booking);
            return _mapper.Map<BookingResponseModel>(response);

        }

        public async Task DeleteBooking(int id)
        {
            var booking = await _bookingRepository.GetBookingById(id);
            if (booking == null)
            {
                throw new NotFoundException("No booking found");
            }
            await _bookingRepository.DeleteAsync(booking);
        }

        public async Task<IEnumerable<BookingResponseModel>> GetAllBookings()
        {
            var bookings = await _bookingRepository.ListAllAsync();
            return _mapper.Map<IEnumerable<BookingResponseModel>>(bookings);
        }

        public async Task<BookingResponseModel> UpdateBooking(BookingRequestModel bookingRequest)
        {
            var booking = _mapper.Map<Booking>(bookingRequest);
            var response = await _bookingRepository.UpdateAsync(booking);
            return _mapper.Map<BookingResponseModel>(response);
        }
    }
}
