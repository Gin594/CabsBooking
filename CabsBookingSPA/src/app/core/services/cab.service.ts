import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private apiService:ApiService) { }

  getAll():Observable<any[]> {
    return this.apiService.getAllCabs("cab");
  }
}
