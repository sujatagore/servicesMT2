import { TestBed } from '@angular/core/testing';

import { AirlinepassengerService } from './airlinepassenger.service';

describe('AirlinepassengerService', () => {
  let service: AirlinepassengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlinepassengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
