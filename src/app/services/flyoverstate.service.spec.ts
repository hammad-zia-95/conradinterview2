import { TestBed } from '@angular/core/testing';

import { FlyoverstateService } from './flyoverstate.service';

describe('FlyoverstateService', () => {
  let service: FlyoverstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyoverstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
