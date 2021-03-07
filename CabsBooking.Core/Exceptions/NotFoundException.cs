using System;
using System.Collections.Generic;
using System.Text;

namespace CabsBooking.Core.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string message) : base(message)
        {

        }
    }
}
