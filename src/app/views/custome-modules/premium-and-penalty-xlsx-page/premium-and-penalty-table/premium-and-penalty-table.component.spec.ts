import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAndPenaltyTableComponent } from './premium-and-penalty-table.component';

describe('PremiumAndPenaltyTableComponent', () => {
  let component: PremiumAndPenaltyTableComponent;
  let fixture: ComponentFixture<PremiumAndPenaltyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumAndPenaltyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumAndPenaltyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
