import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAndPenaltyHomeComponent } from './premium-and-penalty-home.component';

describe('PremiumAndPenaltyHomeComponent', () => {
  let component: PremiumAndPenaltyHomeComponent;
  let fixture: ComponentFixture<PremiumAndPenaltyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumAndPenaltyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumAndPenaltyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
