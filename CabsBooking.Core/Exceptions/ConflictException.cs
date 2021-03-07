using System;
using System.Collections.Generic;
using System.Text;

namespace CabsBooking.Core.Exceptions
{
    public class ConflictException : Exception
    {
        public ConflictException(string message) : base(message)
        {

        }
    }
}
