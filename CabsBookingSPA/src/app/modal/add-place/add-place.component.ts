import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlaceService } from 'src/app/core/services/place.service';
import { PlaceRequest } from 'src/app/shared/models/placeRequest';

@Component({
  selector: 'add-place-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Add Place</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="modal-body">
          <form (ngSubmit)='addPlace()' [formGroup]="form">
              <div class="form-group">
                <label for="txtPlace">Add Place</label>
                <input type="text"  formControlName="inputPlace" required class="form-control" name="place" [(ngModel)]="place.placeName" placeholder="Enter Place">
                <small *ngIf="form.get('inputPlace')?.invalid && form.get('inputPlace')?.touched" [ngStyle]="{color: 'red'}">Place Required</small>
              </div>
          <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Add</button>
          </form>
          </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" [disabled]="!form.invalid" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class AddPlaceModalContent {

  form = new FormGroup({
    inputPlace: new FormControl('', Validators.required)
  });

  place: PlaceRequest = {
    placeId: undefined, placeName:''
  }

  constructor(public activeModal: NgbActiveModal, private placeService: PlaceService) { }

  ngOnInit(): void {

  
  }
    
  // get power() { return this.form.get('power'); }

  addPlace(){
    this.placeService.addPlace(this.place).subscribe(
      res => {
        console.log("Inside add place method")
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
    this.placeService.filter("Place added");
  }
}

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    console.log("Inside add booking Modal")
    const modalRef = this.modalService.open(AddPlaceModalContent);
  }

}
