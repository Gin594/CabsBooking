import { Component, OnInit } from '@angular/core';
import { CabService } from '../core/services/cab.service';
import { CabResponse } from '../shared/models/cabResponse';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {

  cabs: CabResponse[] = [];
  constructor(private cabService:CabService) {
    this.cabService.listen().subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
   }

  ngOnInit(): void {
    this.cabService.getAll().subscribe(
      res => {
        console.log("Inside the CabComponent OnInit method, loading cabs....");
        this.cabs = res;
        console.log(this.cabs);
      }
    )
  }

  deleteCab(id:number) {
    if(confirm("Are you sure to delete this cab?")) {
      this.cabService.deleteCab(id).subscribe(
        res => {
          console.log("Deleted");
          this.cabService.filter("Cab deleted");
        }
      )
    }
  }

}
