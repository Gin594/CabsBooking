import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BookingRequest } from 'src/app/shared/models/bookingRequest';
import { BookingResponse } from 'src/app/shared/models/bookingResponse';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private apiService:ApiService) { }

  getAll() : Observable<BookingResponse[]>{
    return this.apiService.getAllBookings("booking");
  }

  addBooking(booking:BookingRequest) : Observable<BookingRequest>{
    return this.apiService.addBooking("booking/add", booking);
  }

  deleteBooking(id:number) : Observable<any>{
    return this.apiService.deleteBooking("booking", id);
  }

  updateBooking(booking:BookingRequest) : Observable<any>{
    return this.apiService.updateBooking("booking/edit", booking);
  }

  private _listeners = new Subject<any>();

  listen() : Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy: string){
    this._listeners.next(filterBy);
  }
}
