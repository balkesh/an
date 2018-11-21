import { PremiumAndPenaltyHomeModule } from './premium-and-penalty-home.module';

describe('PremiumAndPenaltyHomeModule', () => {
  let premiumAndPenaltyHomeModule: PremiumAndPenaltyHomeModule;

  beforeEach(() => {
    premiumAndPenaltyHomeModule = new PremiumAndPenaltyHomeModule();
  });

  it('should create an instance', () => {
    expect(premiumAndPenaltyHomeModule).toBeTruthy();
  });
});
