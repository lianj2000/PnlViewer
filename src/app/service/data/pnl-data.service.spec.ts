import { TestBed } from '@angular/core/testing';

import { PnlDataService } from './pnl-data.service';

describe('PnlDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PnlDataService = TestBed.get(PnlDataService);
    expect(service).toBeTruthy();
  });
});
