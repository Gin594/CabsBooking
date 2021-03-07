import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlaceRequest } from 'src/app/shared/models/placeRequest';
import { PlaceResponse } from 'src/app/shared/models/placeResponse';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private apiService : ApiService) { }

  getAll() : Observable<PlaceResponse[]>{
    return this.apiService.getAllPlaces("place");
  }
  
  addPlace(place: PlaceRequest) : Observable<PlaceRequest>{
    return this.apiService.addPlace("place/add", place);
  }

  updatePlace(place: PlaceRequest) : Observable<PlaceRequest> {
    return this.apiService.updatePlace("place/edit", place);
  }

  deletePlace(id: number) : Observable<any> {
    return this.apiService.deletePlace("place", id);
  }

  private _listeners = new Subject<any>();

  listen() : Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy: string){
    this._listeners.next(filterBy);
  }
}
