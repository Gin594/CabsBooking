using AutoMapper;
using CabsBooking.Core.Entities;
using CabsBooking.Core.Models.Request;
using CabsBooking.Core.Models.Response;
using System;
using System.Collections.Generic;
using System.Text;

namespace CabsBooking.Infrastructure.Helpers
{
    public class CabsBookingMappingProfile : Profile
    {
        public CabsBookingMappingProfile()
        {
            CreateMap<Booking, BookingResponseModel>();
            CreateMap<BookingRequestModel, Booking>();
            CreateMap<Place, PlaceResponseModel>();
            CreateMap<PlaceRequestModel, Place>();
            CreateMap<Cab, CabResponseModel>();
            CreateMap<CabRequestModel, Cab>();
            CreateMap<BookingHistory, BookingHistoryResponseModel>();
            CreateMap<BookingHistoryRequestModel, BookingHistory>();
        }
    }
}
