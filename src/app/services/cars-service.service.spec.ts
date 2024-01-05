import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarsServiceService } from './cars-service.service';
import { HttpClient } from '@angular/common/http';

describe('CarsServiceService', () => {
  let service: CarsServiceService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(CarsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
