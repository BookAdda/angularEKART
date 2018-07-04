import { TestBed, inject } from '@angular/core/testing';

import { DataTravelService } from './data-travel.service';

describe('DataTravelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTravelService]
    });
  });

  it('should be created', inject([DataTravelService], (service: DataTravelService) => {
    expect(service).toBeTruthy();
  }));
});
