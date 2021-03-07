import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../core/services/place.service';
import { PlaceResponse } from '../shared/models/placeResponse';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  places : PlaceResponse[] = [];
  constructor(private placeService:PlaceService) { 
    this.placeService.listen().subscribe(res => {
      this.ngOnInit();
    })
  }

  ngOnInit(): void {
    this.placeService.getAll().subscribe(
      res => {
        console.log("Inside PlaceComponent, loading places....")
        this.places = res;
        console.log(this.places);
      }
    )
  }

  deletePlace(id:number){
    if(confirm("Are you sure to delete this booking?")) {
      this.placeService.deletePlace(id).subscribe(
        res => {
          console.log(res);
          this.placeService.filter("Booking deleted");
        }
      )
    }
  }

}
