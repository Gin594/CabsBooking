import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../core/services/history.service';
import { HistoryResponse } from '../shared/models/historyResposne';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  histories: HistoryResponse[] = [];
  constructor(private historyService:HistoryService) {
    this.historyService.listen().subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
   }

  ngOnInit(): void {
    this.historyService.getAll().subscribe(
      res => {
        console.log("Inside history component, loading histories...");
        this.histories = res;
        console.log(this.histories);
      }
    )
  }

  deleteHistory(id:number){
    if(confirm("Are you sure to delete this history?")) {
      this.historyService.deleteHistory(id).subscribe(
        res => {
          this.historyService.filter("History deleted");
        }
      )
    }
  }
}
