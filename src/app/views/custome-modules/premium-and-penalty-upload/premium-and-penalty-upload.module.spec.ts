import { PremiumAndPenaltyUploadModule } from './premium-and-penalty-upload.module';

describe('PremiumAndPenaltyUploadModule', () => {
  let premiumAndPenaltyUploadModule: PremiumAndPenaltyUploadModule;

  beforeEach(() => {
    premiumAndPenaltyUploadModule = new PremiumAndPenaltyUploadModule();
  });

  it('should create an instance', () => {
    expect(premiumAndPenaltyUploadModule).toBeTruthy();
  });
});
