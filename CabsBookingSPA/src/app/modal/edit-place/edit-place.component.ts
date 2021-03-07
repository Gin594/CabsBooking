import { Component, Input, OnInit } from '@angular/core';
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
          <form (ngSubmit)='editPlace()'>
              <div class="form-group">
                <label for="txtPlace">Edit Place</label>
                <input type="text" class="form-control" name="place" [(ngModel)]="placeRequest.placeName" id="txtPlace" placeholder="Enter Place">
              </div>
          <button type="submit" class="btn btn-primary">Edit</button>
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
