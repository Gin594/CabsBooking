import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CabRequest } from 'src/app/shared/models/cabRequest';
import { CabResponse } from 'src/app/shared/models/cabResponse';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private apiService:ApiService) { }

  getAll():Observable<CabResponse[]> {
    return this.apiService.getAllCabs("cab");
  }

  addCab(cab: CabRequest):Observable<CabRequest> {
    return this.apiService.addCab("cab/add", cab);
  }

  updateCab(cab: CabRequest) : Observable<CabRequest> {
    return this.apiService.updateCab("cab/edit", cab);
  }

  deleteCab(id:number) : Observable<CabRequest> {
    return this.apiService.deleteCab("cab", id);
  }

  private _listeners = new Subject<any>();

  listen() : Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy: string){
    this._listeners.next(filterBy);
  }
}
