import { TestBed } from '@angular/core/testing';

import { WheatherApiService } from './wheather-api.service';

describe('WheatherApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WheatherApiService = TestBed.get(WheatherApiService);
    expect(service).toBeTruthy();
  });
});
