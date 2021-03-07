import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BookingRequest } from 'src/app/shared/models/bookingRequest';
import { PlaceRequest } from 'src/app/shared/models/placeRequest';

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

  updateBooking(path: string, booking:BookingRequest) : Observable<any>{
    return this.http.put(`${environment.apiUrl}${path}`, booking).pipe(
      map(resp => resp as any)
    )
  }

  getAllPlaces(path:string) : Observable<any[]>{
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    );
  }

  addPlace(path: string, place: PlaceRequest) : Observable<any>{
    return this.http.post(`${environment.apiUrl}${path}`, place).pipe(
      map(resp => resp as any)
    )
  }

  updatePlace(path: string, place: PlaceRequest) : Observable<any>{
    return this.http.put(`${environment.apiUrl}${path}`, place).pipe(
      map(resp => resp as any)
    )
  }

  deletePlace(path: string, id: number) : Observable<any>{
    return this.http.delete(`${environment.apiUrl}${path}` + '/' + id).pipe(
      map(resp => resp as any)
    )
  }

  getAllCabs(path: string) : Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[])
    )
  }

}
