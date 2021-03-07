using CabsBooking.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CabsBooking.Core.RepositoryInterfaces
{
    public interface ICabRepository
    {
        Task<Cab> AddAsync(Cab cab);
        Task<Cab> UpdateAsync(Cab cab);
        Task DeleteAsync(Cab cab);
        Task<IEnumerable<Cab>> ListAllAysnc();
        Task<Cab> GetCabById(int id);
    }
}
