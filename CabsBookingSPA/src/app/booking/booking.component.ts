import { Component, OnInit } from '@angular/core';
import { BookingService } from '../core/services/booking.service';
import { BookingResponse } from '../shared/models/bookingResponse';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings!: BookingResponse[];
  constructor(private bookingService:BookingService) {
    this.bookingService.listen().subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
   }

  ngOnInit(): void {
    this.bookingService.getAll().subscribe(
      res => {
        this.bookings = res;
        console.log("Inside booking ngOnInit")
        console.log(this.bookings);
      }
    )
  }

  deleteBooking(id:number){
    if(confirm("Are you sure to delete this booking?")) {
      this.bookingService.deleteBooking(id).subscribe(
        res => {
          console.log("Deleted");
          this.bookingService.filter("Booking deleted");
        }
      )
    }
  }

}
