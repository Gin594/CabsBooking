import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlaceService } from 'src/app/core/services/place.service';
import { PlaceRequest } from 'src/app/shared/models/placeRequest';
import { PlaceResponse } from 'src/app/shared/models/placeResponse';


@Component({
  selector: 'edit-place-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edit Place</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="modal-body">
          <form (ngSubmit)='editPlace()' [formGroup]="form">
              <div class="form-group">
                <label for="txtPlace">Edit Place</label>
                <input type="text" class="form-control" formControlName='editPlace' name="place" [(ngModel)]="placeRequest.placeName" id="txtPlace" placeholder="Enter Place" required>
                <small *ngIf="form.get('editPlace')?.invalid && form.get('editPlace')?.touched" [ngStyle]="{color: 'red'}">Place Required</small>
              </div>
          <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Edit</button>
          </form>
          </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class EditPlaceModalContent {
  
  form = new FormGroup({
    editPlace: new FormControl('', Validators.required)
  });

  @Input()
  place!: PlaceResponse;

  placeRequest: PlaceRequest = {
    placeId: undefined, placeName: ''
  }
  constructor(public activeModal: NgbActiveModal, private placeService: PlaceService) { }

  ngOnInit(){
    this.placeRequest.placeId = this.place.placeId;
    this.placeRequest.placeName = this.place.placeName;
  }
  editPlace(){
    this.placeService.updatePlace(this.placeRequest).subscribe(
      res => {
        console.log("Inside edit place method")
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
    this.placeService.filter("Place edited");
  }
}

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.css']
})
export class EditPlaceComponent implements OnInit {

  @Input()
  place!: PlaceResponse;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    console.log("Inside add booking Modal")
    const modalRef = this.modalService.open(EditPlaceModalContent);
    modalRef.componentInstance.place = this.place;
  }
}
