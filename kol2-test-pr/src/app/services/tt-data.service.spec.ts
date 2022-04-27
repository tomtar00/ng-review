import { TestBed } from '@angular/core/testing';

import { TTDataService } from './tt-data.service';

describe('TTDataService', () => {
  let service: TTDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TTDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
