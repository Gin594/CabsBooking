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
  constructor(private cabService:CabService) { }

  ngOnInit(): void {
    this.cabService.getAll().subscribe(
      res => {
        console.log("Inside the CabComponent OnInit method, loading cabs....");
        this.cabs = res;
        console.log(this.cabs);
      }
    )
  }

}
