import { Component, OnInit } from '@angular/core';
import { CarsServiceService } from '../services/cars-service.service';
import { Car } from '../models/car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [ CommonModule] ,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.sass'
})
export class CarsComponent implements OnInit{
  carsService: CarsServiceService;
  cars: Car[] = [];

  constructor(carsService: CarsServiceService) {
    this.carsService = carsService;
  }
  ngOnInit(): void {
    this.carsService.getCars().subscribe(cars => this.cars = cars);
  }
}
