import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HistoryRequest } from 'src/app/shared/models/historyRequest';
import { HistoryResponse } from 'src/app/shared/models/historyResposne';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private apiService: ApiService) { }

  getAll() : Observable<HistoryResponse[]>{
   return this.apiService.getAllHistories("bookingHistory");
  }

  addHistory(history: HistoryRequest) : Observable<HistoryRequest>{
    return this.apiService.addHistory("bookingHistory/add", history);
  }

  deleteHistory(id:number) : Observable<HistoryRequest> {
    return this.apiService.deleteHistory("bookingHistory", id);
  }

  private _listeners = new Subject<any>();

  listen() : Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy: string){
    this._listeners.next(filterBy);
  }
}
