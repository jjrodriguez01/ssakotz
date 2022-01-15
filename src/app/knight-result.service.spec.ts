import { TestBed } from '@angular/core/testing';

import { KnightResultService } from './knight-result.service';

describe('KnightResultService', () => {
  let service: KnightResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnightResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
