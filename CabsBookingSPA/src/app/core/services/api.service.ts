import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BookingRequest } from 'src/app/shared/models/bookingRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http:HttpClient) { }

  getAllBookings(path:string) : Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    );
  }

  addBooking(path:string, booking:BookingRequest) : Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, booking).pipe(
      map(resp => resp as any)
    );
  }

  deleteBooking(path:string, id:number) : Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`+ '/'+id).pipe(
      map(resp => resp as any)
    )
  }

  getAllPlaces(path:string) : Observable<any[]>{
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    );
  }

  getAllCabs(path: string) : Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    )
  }

}
