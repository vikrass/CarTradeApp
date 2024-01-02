import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

export const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: '',   redirectTo: '/cars', pathMatch: 'full' },
];
