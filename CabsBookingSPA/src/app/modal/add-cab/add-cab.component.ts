import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CabService } from 'src/app/core/services/cab.service';
import { CabRequest } from 'src/app/shared/models/cabRequest';

@Component({
  selector: 'add-cab-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Add Cab</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="modal-body">
          <form (ngSubmit)='addCab()'>
              <div class="form-group">
                <label for="txtCab">Add Place</label>
                <input type="text" class="form-control" name="cab" [(ngModel)]="cab.cabTypeName" id="txtCab" placeholder="Enter Place">
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
export class AddCabModalContent {

  cab: CabRequest = {
    cabTypeId: undefined, cabTypeName:''
  }
  constructor(public activeModal: NgbActiveModal, private cabService: CabService) { }

  addCab(){
    this.cabService.addCab(this.cab).subscribe(
      res => {
        console.log("Inside add Cab method")
        console.log(res);
        this.onClose();
      }
    )
  }
  onClose() {
    this.activeModal.close();
    this.cabService.filter("Cab added");
  }
}

@Component({
  selector: 'app-add-cab',
  templateUrl: './add-cab.component.html',
  styleUrls: ['./add-cab.component.css']
})
export class AddCabComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    console.log("Inside add booking Modal")
    const modalRef = this.modalService.open(AddCabModalContent);
  }
}
