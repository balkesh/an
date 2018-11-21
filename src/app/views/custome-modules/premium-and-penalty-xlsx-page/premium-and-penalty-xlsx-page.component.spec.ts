import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAndPenaltyXlsxPageComponent } from './premium-and-penalty-xlsx-page.component';

describe('PremiumAndPenaltyXlsxPageComponent', () => {
  let component: PremiumAndPenaltyXlsxPageComponent;
  let fixture: ComponentFixture<PremiumAndPenaltyXlsxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumAndPenaltyXlsxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumAndPenaltyXlsxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
