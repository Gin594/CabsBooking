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
    public class BookingHistoryController : ControllerBase
    {
        private readonly IBookingHistoryService _historyService;
        public BookingHistoryController(IBookingHistoryService historyService)
        {
            _historyService = historyService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetAll()
        {
            var histories = await _historyService.GetAllHistorys();
            return Ok(histories);
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddHistory(BookingHistoryRequestModel historyRequest)
        {
            var history = await _historyService.AddHistory(historyRequest);
            return Ok(history);
        }

        [HttpPut]
        [Route("edit")]
        public async Task<IActionResult> EditHistory(BookingHistoryRequestModel historyRequest)
        {
            var history = await _historyService.UpdateHistory(historyRequest);
            return Ok(history);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteHistory(int id)
        {
            await _historyService.DeleteHistory(id);
            return Ok();
        }
    }
}
