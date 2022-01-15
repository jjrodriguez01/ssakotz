import { TestBed } from '@angular/core/testing';

import { CosmoService } from './cosmo.service';

describe('CosmoService', () => {
  let service: CosmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
