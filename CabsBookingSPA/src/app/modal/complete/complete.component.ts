import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from 'src/app/core/services/booking.service';
import { HistoryService } from 'src/app/core/services/history.service';
import { BookingResponse } from 'src/app/shared/models/bookingResponse';
import { HistoryRequest } from 'src/app/shared/models/historyRequest';

@Component({
  selector: 'complete-modal-content',
  template: `
  <style>
    .error {
      color: red;
    }
  </style>
    <div class="modal-header">
      <h4 class="modal-title">Order Complete</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="modal-body">
          <form (ngSubmit)='addHistory()' #f='ngForm'>
              <div class="form-group">
                <label for="feedback">Feedback</label>
                <textarea type="text" #feedback='ngModel' required class="form-control" name="comment" id="feedback" [(ngModel)]="history.feedback" placeholder="Enter Feedback"></textarea>
                <small class="error" *ngIf="feedback.invalid && feedback.touched">Required</small>
              </div>
              <div class="form-group">
                <label for="money">Charge</label>
                <input type="number" #money='ngModel' required class="form-control" id="money" name="charge" [(ngModel)]="history.charge" placeholder="Enter Money">
                <small class="error" *ngIf="money.invalid && money.touched">Required</small>
              </div>
          <button type="submit" class="btn btn-primary" [disabled]="f.invalid">Complete</button>
          </form>
          </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class CompleteBookingModalContent {

  @Input()
  booking!: BookingResponse;

  history: HistoryRequest={
    email:'',
    bookingDate: undefined,
    bookingTime: '',
    pickupAddress: '',
    landMark: '',
    pickupDate: undefined,
    pickupTime: '',
    cabTypeId: undefined,
    contactNo: '',
    feedback: '',
    comp_time: '',
    fromPlace: undefined,
    toPlace: undefined,
    charge: undefined,
  };
  constructor(public activeModal: NgbActiveModal, private historyService: HistoryService, private bookingService: BookingService) { }

  ngOnInit(){
    this.history.bookingDate = this.booking.bookingDate;
    this.history.bookingTime = this.booking.bookingTime;
    this.history.cabTypeId = this.booking.cab.cabTypeId;
    this.history.email = this.booking.email;
    this.history.contactNo = this.booking.contactNo;
    this.history.landMark = this.booking.landMark;
    this.history.pickupAddress = this.booking.pickupAddress;
    this.history.pickupDate = this.booking.pickupDate;
    this.history.pickupTime = this.booking.pickupTime;
    this.history.fromPlace = this.booking.from.placeId;
    this.history.toPlace = this.booking.to.placeId;
  }
  addHistory() {
    this.history.comp_time = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
    this.historyService.addHistory(this.history).subscribe(
      res => {
        console.log("Inside add history modal");
        console.log(res);
        this.onClose();
      },
      error => {
        console.log(error);
      }
    )
    
    this.bookingService.deleteBooking(this.booking.id).subscribe(
      res => {
        console.log("booking record deleted, moved to booking history");
        console.log(res);
        this.bookingService.filter("booking moved to history")
      }
    )
  }
  onClose() {
    this.activeModal.close();
    this.historyService.filter("Order Completed");
  }
}

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  @Input()
  booking!: BookingResponse;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    console.log("Inside add booking Modal")
    const modalRef = this.modalService.open(CompleteBookingModalContent);
    modalRef.componentInstance.booking = this.booking;
  }
}
