using CabsBooking.Core.Models.Request;
using CabsBooking.Core.Models.Response;
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
    public class PlaceController : ControllerBase
    {
        private readonly IPlaceService _placeService;

        public PlaceController(IPlaceService placeService)
        {
            _placeService = placeService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetAllPlaces()
        {
            var places = await _placeService.GetAllPlaces();
            return Ok(places);
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddPlace(PlaceRequestModel placeRequest)
        {
            var place = await _placeService.AddPlace(placeRequest);
            return Ok(place);
        }

        [HttpPut]
        [Route("edit")]
        public async Task<IActionResult> UpdatePlace(PlaceRequestModel placeRequest)
        {
            var place = await _placeService.UpdatePlace(placeRequest);
            return Ok(place);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeltePlace(int id)
        {
            await _placeService.DeletePlace(id);
            return Ok();
        }



    }
}
