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
    }

}
