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
    public class CabController : ControllerBase
    {
        private readonly ICabService _cabService;

        public CabController(ICabService cabService)
        {
            _cabService = cabService;
        }
        
        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetAllCabs()
        {
            var cabs = await _cabService.GetAllCabs();
            return Ok(cabs);
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddCab(CabRequestModel cabRequest)
        {
            var place = await _cabService.AddCab(cabRequest);
            return Ok(place);
        }

        [HttpPut]
        [Route("edit")]
        public async Task<IActionResult> UpdatePlace(CabRequestModel cabRequest)
        {
            var place = await _cabService.UpdateCab(cabRequest);
            return Ok(place);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeltePlace(int id)
        {
            await _cabService.DeleteCab(id);
            return Ok();
        }

    }

}
