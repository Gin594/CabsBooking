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
    public class BookingHistoryService : IBookingHistoryService
    {
        private readonly IBookingHistoryRepository _historyRepository;
        private readonly IMapper _mapper;

        public BookingHistoryService(IBookingHistoryRepository historyRepository, IMapper mapper)
        {
            _historyRepository = historyRepository;
            _mapper = mapper;
        }
        public async Task<BookingHistoryResponseModel> AddHistory(BookingHistoryRequestModel historyRequest)
        {
            var history = _mapper.Map<BookingHistory>(historyRequest);
            history.Status = "completed";
            var response = await _historyRepository.AddAsync(history);
            return _mapper.Map<BookingHistoryResponseModel>(response);
        }

        public async Task DeleteHistory(int id)
        {
            var history = await _historyRepository.GetHistoryById(id);
            if (history == null)
            {
                throw new NotFoundException("No history found");
            }
            await _historyRepository.DeleteAsync(history);
        }

        public async Task<IEnumerable<BookingHistoryResponseModel>> GetAllHistorys()
        {
            var histories = await _historyRepository.ListAllAysnc();
            return _mapper.Map<IEnumerable<BookingHistoryResponseModel>>(histories);
        }

        public async Task<BookingHistoryResponseModel> UpdateHistory(BookingHistoryRequestModel historyRequest)
        {
            var history = _mapper.Map<BookingHistory>(historyRequest);
            var response = await _historyRepository.UpdateAsync(history);
            return _mapper.Map<BookingHistoryResponseModel>(response);
        }
    }
}
