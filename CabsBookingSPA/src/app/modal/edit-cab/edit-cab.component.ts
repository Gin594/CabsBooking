import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CabService } from 'src/app/core/services/cab.service';
import { CabRequest } from 'src/app/shared/models/cabRequest';
import { CabResponse } from 'src/app/shared/models/cabResponse';

@Component({
  selector: 'edit-place-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edit Cab</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="modal-body">
          <form (ngSubmit)='editCab()'>
              <div class="form-group">
                <label for="txtCab">Edit Place</label>
                <input type="text" class="form-control" name="cab" id="txtCab" [(ngModel)]="cabRequest.cabTypeName" placeholder="Enter Place">
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
export class EditCabModalContent {

  @Input()
  cab!: CabResponse;

  cabRequest: CabRequest = {
    cabTypeId: undefined, cabTypeName:''
  }

  constructor(public activeModal: NgbActiveModal, private cabService: CabService) { }

  ngOnInit() {
    this.cabRequest.cabTypeId = this.cab.cabTypeId;
    this.cabRequest.cabTypeName = this.cab.cabTypeName;
  }

  editCab(){
      this.cabService.updateCab(this.cabRequest).subscribe(
        res => {
          console.log("Inside edit cab method")
          console.log(res);
          this.onClose();
        }
      )
  }

  onClose() {
    this.activeModal.close();
    this.cabService.filter("Cab edited");
  }
}

@Component({
  selector: 'app-edit-cab',
  templateUrl: './edit-cab.component.html',
  styleUrls: ['./edit-cab.component.css']
})
export class EditCabComponent implements OnInit {

  @Input()
  cab!: CabResponse;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    console.log("Inside add booking Modal")
    const modalRef = this.modalService.open(EditCabModalContent);
    modalRef.componentInstance.cab = this.cab;
  }
}
