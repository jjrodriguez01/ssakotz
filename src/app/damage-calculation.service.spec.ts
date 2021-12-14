import { TestBed } from '@angular/core/testing';

import { DamageCalculationService } from './damage-calculation.service';

describe('DamageCalculationService', () => {
  let service: DamageCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamageCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
