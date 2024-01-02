import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {
  httpclient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpclient = httpClient;
  }


  getCars() {
    return  this.httpclient.get<Car[]>("https://localhost:7094/cars");
  }

}
