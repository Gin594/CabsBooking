import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private apiService : ApiService) { }

  getAll(){
    return this.apiService.getAllPlaces("place");
  }
}
