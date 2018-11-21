import { PremiumAndPenaltyXlsxPageModule } from './premium-and-penalty-xlsx-page.module';

describe('PremiumAndPenaltyXlsxPageModule', () => {
  let premiumAndPenaltyXlsxPageModule: PremiumAndPenaltyXlsxPageModule;

  beforeEach(() => {
    premiumAndPenaltyXlsxPageModule = new PremiumAndPenaltyXlsxPageModule();
  });

  it('should create an instance', () => {
    expect(premiumAndPenaltyXlsxPageModule).toBeTruthy();
  });
});
