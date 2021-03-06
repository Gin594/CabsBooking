using CabsBooking.Core.RepositoryInterfaces;
using CabsBooking.Core.ServiceInterfaces;
using CabsBooking.Infrastructure.Repositories;
using CabsBooking.Infrastructure.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace CabsBooking.Infrastructure.Helpers
{
    public static class ServiceCollectionExtensions
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddTransient<IBookingRepository, BookingRepository>();
            services.AddTransient<IBookingHistoryRepository, BookingHistoryRepository>();
            services.AddTransient<ICabRepository, CabRepository>();
            services.AddTransient<IPlaceRepository, PlaceRepository>();
        }

        public static void AddServices(this IServiceCollection services)
        {
            services.AddTransient<IBookingService, BookingService>();
            services.AddTransient<IBookingHistoryService, BookingHistoryService>();
            services.AddTransient<ICabService, CabService>();
            services.AddTransient<IPlaceService, PlaceService>();

        }
    }
}
