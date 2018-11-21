import { TestBed } from '@angular/core/testing';

import { TxnserviceService } from './txnservice.service';

describe('TxnserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TxnserviceService = TestBed.get(TxnserviceService);
    expect(service).toBeTruthy();
  });
});
