import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from 'src/app/core/services/booking.service';
import { BookingRequest } from 'src/app/shared/models/bookingRequest';
import { BookingResponse } from 'src/app/shared/models/bookingResponse';

@Component({
  selector: 'app-modal-content',
  template: `
        <style>
          button.calendar, button.calendar:active {
        width: 2.75rem;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;
        background-repeat: no-repeat;
        background-size: 23px;
        background-position: center;
      }
        </style>
        <div class="modal-header">
      <h4 class="modal-title">Add Booking</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div class="row justify-content-center">
      <form (ngSubmit)='addBooking()' >
        <div class="row">
          <div class="col">
              <div class="form-group">
              <label for="txtEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="txtEmail"
                name="email"
                [(ngModel)]="booking.email"
              />
            </div>
          </div>
          <div class="col"> 
              <div class="form-group">
                <div>
                  <label>Pickup Date</label>
                </div>
                <div class="input-group">
                  <input class="form-control" id="bookDate" placeholder="yyyy-mm-dd"
                        name="dp" [ngModel]="booking.pickupDate | date: 'MM/dd/yyyy'" ngbDatepicker #d="ngbDatepicker">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary calendar" (click)="d.toggle()" type="button"></button>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class= "row">
            <div class="col">
            <div class="form-group">
              <label for="time">Pickup Time</label>
              <input
                type="time"
                class="form-control"
                id="time"
                name="pickupTime"
                [(ngModel)]="booking.pickupTime"
              />
            </div>
            </div>
            <div class="col">
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" class="form-control" id="phone" name="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required>
              <small>Format: 123-456-7890</small>
            </div>
            </div>
        </div>

        <div class= "row">
            <div class="col">
            <div class="form-group">
              <label for="from">From</label>
              <select class="form-control" name="fromPlace" id="from" [(ngModel)]="booking.fromPlace">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            </div>
            <div class="col">
            <div class="form-group">
              <label for="to">To</label>
              <select class="form-control" id="to" name="toPlace" [(ngModel)]="booking.toPlace">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            </div>
        </div>

        <div class="row">
          <div class = "col">
          <div class="form-group">
              <label for="txtAddress">Pickup Address</label>
              <input
                type="text"
                class="form-control"
                id="txtAddress"
                name="pickupAddress"
                [(ngModel)]="booking.pickupAddress"
              />
            </div>
          </div>
        </div>
 
        <input type="submit" class="btn btn-primary" value="submit" />
      </form>
    </div>
  </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class AddBookingModalContent {

  booking: BookingRequest = {
    email: '', bookingDate: new Date(),
    bookingTime: new Date().toTimeString(), cabTypeId: undefined, contactNo: '',
    fromPlace: undefined, toPlace: undefined, landMark: '', pickupAddress: '',
    pickupDate: new Date(), pickupTime: ''
  };
  result!: BookingResponse;
  constructor(public activeModal: NgbActiveModal, private bookingService: BookingService) { }

  addBooking() {
    console.log(this.booking)
    // this.bookingService.addBooking(this.booking).subscribe(
    //   res => {
    //     console.log(res);
    //     this.onClose();
    //   }
    // )
  }

  onClose() {
    this.activeModal.close();
    this.bookingService.filter("Booking added");
  }
}

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }
  open() {
    console.log("Inside add booking component")
    const modalRef = this.modalService.open(AddBookingModalContent);
  }
}
