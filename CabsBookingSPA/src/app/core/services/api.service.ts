import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { BookingRequest } from 'src/app/shared/models/bookingRequest';
import { PlaceRequest } from 'src/app/shared/models/placeRequest';
import { CabRequest } from 'src/app/shared/models/cabRequest';
import { HistoryRequest } from 'src/app/shared/models/historyRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http:HttpClient) { }

  getAllBookings(path:string) : Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[]),
      catchError(this.handleError)
    );
  }

  addBooking(path:string, booking:BookingRequest) : Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, booking).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    );
  }

  deleteBooking(path:string, id:number) : Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`+ '/'+id).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  updateBooking(path: string, booking:BookingRequest) : Observable<any>{
    return this.http.put(`${environment.apiUrl}${path}`, booking).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  getAllPlaces(path:string) : Observable<any[]>{
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[]),
      catchError(this.handleError)
    );
  }

  addPlace(path: string, place: PlaceRequest) : Observable<any>{
    return this.http.post(`${environment.apiUrl}${path}`, place).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  updatePlace(path: string, place: PlaceRequest) : Observable<any>{
    return this.http.put(`${environment.apiUrl}${path}`, place).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  deletePlace(path: string, id: number) : Observable<any>{
    return this.http.delete(`${environment.apiUrl}${path}` + '/' + id).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  getAllCabs(path: string) : Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[]),
      catchError(this.handleError)
    )
  }

  addCab(path: string, cab: CabRequest) : Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, cab).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  updateCab(path: string, cab: CabRequest) : Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, cab).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  deleteCab(path: string, id:number) : Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}`+'/'+id).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  getAllHistories(path: string) : Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[]),
      catchError(this.handleError)
    )
  }

  addHistory(path: string, history: HistoryRequest) : Observable<any>{
    return this.http.post(`${environment.apiUrl}${path}`, history).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  deleteHistory(path: string, id:number) : Observable<any> {
    return this.http.delete(`${environment.apiUrl}${path}` + '/' + id).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  updateHistory(path: string, history: HistoryRequest) : Observable<any> {
    return this.http.put(`${environment.apiUrl}${path}`, history).pipe(
      map(resp => resp as any),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error.error.errorMessage);
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.message}`
      );
    }
    return throwError(error.error.errorMessage);
  }
}
