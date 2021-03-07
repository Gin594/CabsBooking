import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from 'src/app/core/services/booking.service';
import { CabService } from 'src/app/core/services/cab.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { BookingRequest } from 'src/app/shared/models/bookingRequest';
import { BookingResponse } from 'src/app/shared/models/bookingResponse';
import { CabResponse } from 'src/app/shared/models/cabResponse';
import { PlaceResponse } from 'src/app/shared/models/placeResponse';

@Component({
  selector: 'app-edit-modal-content',
  template: `
  <style>
    button.calendar, button.calendar:active {
  width: 2.75rem;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;
  background-repeat: no-repeat;
  background-size: 23px;
  background-position: center;
}
  .error {
    color: red;
  }
  </style>
  <div class="modal-header">
<h4 class="modal-title">Edit Booking</h4>
<button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
  <span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<div class="row justify-content-center">
<form (ngSubmit)='editBooking()' #f='ngForm'>
  <div class="row">
    <div class="col">
        <div class="form-group">
        <label for="txtEmail">Email</label>
        <input
          type="email"
          class="form-control"
          id="txtEmail"
          name="email"
          [(ngModel)]="editRequest.email"
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
                  name="dp" [value]="booking.pickupDate|date:'yyyy-MM-dd'" ngbDatepicker #d="ngbDatepicker">
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
          [(ngModel)]="editRequest.pickupTime"
        />
      </div>
      </div>
      <div class="col">
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" [(ngModel)]="editRequest.contactNo" class="form-control" id="phone" name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                #phone="ngModel"
                required>
        <small class="error" *ngIf="phone.invalid">Format: 123-456-7890</small>
      </div>
      </div>
  </div>

  <div class= "row">
      <div class="col">
      <div class="form-group">
        <label for="from">From</label>
        <select class="form-control" name="fromPlace" id="from" #selectFrom (change)="getFromPlaceId(selectFrom.value)" required>
        <option selected hidden>{{booking.from.placeName}}</option>
        <option *ngFor="let place of places" [value]="place.placeId">{{place.placeName}}</option>
        </select>
      </div>
      </div>
      <div class="col">
      <div class="form-group">
        <label for="to">To</label>
        <select class="form-control" id="to" name="toPlace" #selectTo (change)="getToPlaceId(selectTo.value)">
        <option selected hidden>{{booking.to.placeName}}</option>
          <option *ngFor="let place of places" [value]="place.placeId">{{place.placeName}}</option>
        </select>
      </div>
      </div>
  </div>

  <div class="row">
    <div class = "col">
    <div class="form-group">
        <label for="cab">Cab Type</label>
        <select class="form-control" id="cab" name="cabType" #selectCab (change)="getCabTypeId(selectCab.value)">
          <option selected hidden>{{booking.cab.cabTypeName}}</option>
          <option *ngFor="let cab of cabs" [value]="cab.cabTypeId">{{cab.cabTypeName}}</option>
        </select>
      </div>
    </div>
    <div class = "col">
    <div class="form-group">
        <label for="txtLandmark">Landmark</label>
        <input
          type="text"
          class="form-control"
          id="txtLandmark"
          name="Landmark"
          [(ngModel)]="editRequest.landMark"
        />
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
          [(ngModel)]="editRequest.pickupAddress"
        />
      </div>
    </div>
  </div>

  <input type="submit" class="btn btn-primary" [disabled]="f.invalid" value="Edit" />
</form>
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Close</button>
</div>
`
})
export class EditBookingModalContent {

  @Input()
  booking!: BookingResponse;
  @Input() places:PlaceResponse[] = [];
  @Input() cabs: CabResponse[] = [];

  editRequest: BookingRequest={
    id:undefined, email: '', bookingDate: undefined,
    bookingTime: undefined, cabTypeId: undefined, contactNo: '',
    fromPlace: undefined, toPlace: undefined, landMark: '', pickupAddress: '',
    pickupDate: undefined, pickupTime: ''
  };
  constructor(public activeModal: NgbActiveModal, private bookingService: BookingService) {
  }

  ngOnInit(){
    this.editRequest.email = this.booking.email;
    this.editRequest.bookingDate = this.booking.bookingDate;
    this.editRequest.bookingTime = this.booking.bookingTime;
    this.editRequest.fromPlace = this.booking.from.placeId;
    this.editRequest.toPlace = this.booking.to.placeId;
    this.editRequest.pickupAddress = this.booking.pickupAddress;
    this.editRequest.pickupDate = this.booking.pickupDate;
    this.editRequest.pickupTime = this.booking.pickupTime;
    this.editRequest.landMark = this.booking.landMark;
    this.editRequest.cabTypeId = this.booking.cab.cabTypeId;
    this.editRequest.contactNo = this.booking.contactNo;
    this.editRequest.id = this.booking.id;
  }

  editBooking(){
    console.log(this.editRequest)
    this.bookingService.updateBooking(this.editRequest).subscribe(
      res => {
        console.log("Inside edit booking method...")
        console.log(res);
        this.onClose();
      },
      error => {
        console.log(error);
      }
    )
  }

  onClose() {
    this.activeModal.close();
    this.bookingService.filter("Booking edited");
  }
  getFromPlaceId(value:any){
    this.editRequest.fromPlace = value;
  }

  getToPlaceId(value:any){
    this.editRequest.toPlace = value;
  }

  getCabTypeId(value:any) {
    this.editRequest.cabTypeId = value;
  }


}


@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  @Input()
  booking!: BookingResponse;

  places: PlaceResponse[] = [];
  cabs : CabResponse[] = [];
  constructor(private modalService: NgbModal, private placeService:PlaceService, private cabService:CabService) { }

  ngOnInit(): void {
    this.placeService.getAll().subscribe(
      res => {
        this.places = res;
        console.log("Inside the EditBookingComponent ngOnInit method, loading places...")
        console.log(this.places);
      }
    )
    this.cabService.getAll().subscribe(
      res => {
        console.log("Inside the EditBookingComponent ngOnInit method, loading cabs...")
        this.cabs = res;
        console.log(this.cabs);
      }
    )
  }

  open() {
    console.log("Inside edit booking Modal");
    const modalRef = this.modalService.open(EditBookingModalContent);
    modalRef.componentInstance.booking = this.booking;
    modalRef.componentInstance.places = this.places;
    modalRef.componentInstance.cabs = this.cabs;
  }
}
