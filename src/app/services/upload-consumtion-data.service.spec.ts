import { TestBed } from '@angular/core/testing';

import { UploadConsumtionDataService } from './upload-consumtion-data.service';

describe('UploadConsumtionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadConsumtionDataService = TestBed.get(UploadConsumtionDataService);
    expect(service).toBeTruthy();
  });
});
