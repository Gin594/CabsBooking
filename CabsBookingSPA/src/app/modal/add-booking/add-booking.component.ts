import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from 'src/app/core/services/booking.service';
import { CabService } from 'src/app/core/services/cab.service';
import { PlaceService } from 'src/app/core/services/place.service';
import { BookingRequest } from 'src/app/shared/models/bookingRequest';
import { BookingResponse } from 'src/app/shared/models/bookingResponse';
import { CabResponse } from 'src/app/shared/models/cabResponse';
import { PlaceResponse } from 'src/app/shared/models/placeResponse';

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
      .error {
        color: red;
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
      <form (ngSubmit)='addBooking()' #f='ngForm' >
        <div class="row">
          <div class="col">
              <div class="form-group">
              <label for="txtEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="txtEmail"
                name="email"
                pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                #email = "ngModel"
                required
                [(ngModel)]="booking.email"
              />
              <small class="error" *ngIf="email.invalid && email.touched">Invalid Email Format</small>
            </div>
          </div>
          <div class="col"> 
              <div class="form-group">
                <div>
                  <label>Pickup Date</label>
                </div>
                <div class="input-group">
                  <input class="form-control" id="bookDate" placeholder="yyyy-mm-dd" #pickupDate="ngModel"
                        name="dp" [ngModel]="booking.pickupDate | date: 'MM/dd/yyyy'" ngbDatepicker #d="ngbDatepicker">
                        <div class="input-group-append">
                    <button class="btn btn-outline-secondary calendar" (click)="d.toggle()" type="button"></button>
                  </div>
                </div>
                <small class="error" *ngIf="pickupDate.invalid && pickupDate.touched">Required</small>

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
                required
                #pickupTime="ngModel"
                [(ngModel)]="booking.pickupTime"
              />
              <small class="error" *ngIf="pickupTime.invalid && pickupTime.touched">Required</small>
            </div>
            </div>
            <div class="col">
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" class="form-control" id="phone" #phone="ngModel" name="phone"
                      pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                      [(ngModel)]="booking.contactNo">
              <small class="error" *ngIf="phone.invalid && phone.touched">Format: 123-456-7890</small>
            </div>
            </div>
        </div>

        <div class= "row" [formGroup]='form'>
            <div class="col">
            <div class="form-group" >
              <label for="from">From</label>
              <select class="form-control" formControlName='from'  name="fromPlace" id="from" #selectFrom (change)="getFromPlaceId(selectFrom.value)" required>
              <option hidden></option>
              <option *ngFor="let place of places" [value]="place.placeId">{{place.placeName}}</option>
              </select>
              <small class="error" *ngIf="form.get('from')?.invalid && form.get('from')?.touched">Required</small>
            </div>
            </div>
            <div class="col">
            <div class="form-group">
              <label for="to">To</label>
              <select class="form-control" id="to" formControlName='to' name="toPlace" #selectTo (change)="getToPlaceId(selectTo.value)">
                <option hidden></option>
                <option *ngFor="let place of places" [value]="place.placeId">{{place.placeName}}</option>
              </select>
              <small class="error" *ngIf="form.get('to')?.invalid && form.get('to')?.touched">Required</small>
            </div>
            </div>
        </div>

        <div class="row" >
          <div class = "col">
          <div class="form-group" [formGroup] = "form">
              <label for="cab">Cab Type</label>
              <select class="form-control" id="cab" formControlName='cab' name="cabType" #selectCab (change)="getCabTypeId(selectCab.value)">
                <option hidden></option>
                <option *ngFor="let cab of cabs" [value]="cab.cabTypeId">{{cab.cabTypeName}}</option>
              </select>
              <small class="error" *ngIf="form.get('cab')?.invalid && form.get('cab')?.touched">Required</small>
            </div>
          </div>
          <div class = "col">
          <div class="form-group">
              <label for="txtLandmark">landmark</label>
              <input
                type="text"
                class="form-control"
                id="txtLandmark"
                name="landmark"
                #landmark='ngModel'
                required
                [(ngModel)]="booking.landMark"
              />
              <small class="error" *ngIf="landmark.invalid && landmark.touched">Required</small>
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
                #pickupAddress = "ngModel"
                required
                [(ngModel)]="booking.pickupAddress"
              />
              <small class="error" *ngIf="pickupAddress.invalid && pickupAddress.touched">Required</small>
            </div>
          </div>
        </div>
 
        <input type="submit" class="btn btn-primary" [disabled]="f.invalid" value="Adding" />
      </form>
    </div>
  </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class AddBookingModalContent {

  form = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    cab: new FormControl('', Validators.required),
    
  })

  @Input() places:PlaceResponse[] = [];
  @Input() cabs: CabResponse[] = [];

  booking: BookingRequest = {
    id:undefined, email: '', bookingDate: new Date(),
    bookingTime: undefined, cabTypeId: undefined, contactNo: '',
    fromPlace: undefined, toPlace: undefined, landMark: '', pickupAddress: '',
    pickupDate: new Date(), pickupTime: ''
  };
  constructor(public activeModal: NgbActiveModal, private bookingService: BookingService) { }

  addBooking() {
    console.log(this.booking)
    var hour = new Date().getHours().toString();
    var minute = new Date().getMinutes().toString();
    this.booking.bookingTime = hour+ ":" + minute
    this.bookingService.addBooking(this.booking).subscribe(
      res => {
        console.log("Inside add booking method")
        console.log(res);
        this.onClose();
      },
      error => {
        console.log(error);
      }
    )
  }

  getFromPlaceId(value:any){
    this.booking.fromPlace = value;
  }

  getToPlaceId(value:any){
    this.booking.toPlace = value;
  }

  getCabTypeId(value:any) {
    this.booking.cabTypeId = value;
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

  places: PlaceResponse[] = [];
  cabs : CabResponse[] = [];
  constructor(private modalService: NgbModal, private placeService:PlaceService, private cabService:CabService) { }

  ngOnInit(): void {
    this.placeService.getAll().subscribe(
      res => {
        this.places = res;
        console.log("Inside the AddBookingComponent ngOnInit method, loading places...")
        console.log(this.places);
      }
    )
    this.cabService.getAll().subscribe(
      res => {
        console.log("Inside the AddBookingComponent ngOnInit method, loading cabs...")
        this.cabs = res;
        console.log(this.cabs);
      }
    )
  }
  open() {
    console.log("Inside add booking Modal")
    const modalRef = this.modalService.open(AddBookingModalContent);
    modalRef.componentInstance.places = this.places;
    modalRef.componentInstance.cabs = this.cabs;
  }
}
