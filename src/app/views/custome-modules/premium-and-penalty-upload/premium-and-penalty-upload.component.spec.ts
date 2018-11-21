import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumAndPenaltyUploadComponent } from './premium-and-penalty-upload.component';

describe('PremiumAndPenaltyUploadComponent', () => {
  let component: PremiumAndPenaltyUploadComponent;
  let fixture: ComponentFixture<PremiumAndPenaltyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumAndPenaltyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumAndPenaltyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
