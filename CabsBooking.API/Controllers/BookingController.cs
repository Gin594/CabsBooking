using CabsBooking.Core.Models.Request;
using CabsBooking.Core.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CabsBooking.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _bookingService;
        public BookingController(IBookingService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetAll()
        {
            var bookings = await _bookingService.GetAllBookings();
            return Ok(bookings);
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddBooking(BookingRequestModel bookingRequest)
        {
            var booking = await _bookingService.AddBooking(bookingRequest);
            return Ok(booking);
        }

        [HttpPut]
        [Route("edit")]
        public async Task<IActionResult> EditBooking(BookingRequestModel bookingRequest)
        {
            var booking = await _bookingService.UpdateBooking(bookingRequest);
            return Ok(booking);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteBooking(int id)
        {
            await _bookingService.DeleteBooking(id);
            return Ok();
        }
    }
}
