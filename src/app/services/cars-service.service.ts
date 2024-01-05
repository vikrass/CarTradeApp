import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {
  httpclient: HttpClient;
 apiUrl = environment.cartradApi;

  constructor(httpClient: HttpClient) {
    this.httpclient = httpClient;
  }

  getCars() {
    return  this.httpclient.get<Car[]>(`${this.apiUrl}/cars`);
  }
}
