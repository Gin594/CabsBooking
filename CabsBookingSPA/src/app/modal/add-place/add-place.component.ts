import { Component, OnInit } from '@angular/core';
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
          <form (ngSubmit)='addPlace()'>
              <div class="form-group">
                <label for="txtPlace">Add Place</label>
                <input type="text" class="form-control" name="place" [(ngModel)]="place.placeName" id="txtPlace" placeholder="Enter Place">
              </div>
          <button type="submit" class="btn btn-primary">Add</button>
          </form>
          </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class AddPlaceModalContent {

  place: PlaceRequest = {
    placeId: undefined, placeName:''
  }
  constructor(public activeModal: NgbActiveModal, private placeService: PlaceService) { }

  addPlace(){
    this.placeService.addPlace(this.place).subscribe(
      res => {
        console.log("Inside add place method")
        console.log(res);
        this.onClose();
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
