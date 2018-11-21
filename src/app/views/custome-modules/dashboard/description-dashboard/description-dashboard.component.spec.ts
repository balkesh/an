import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionDashboardComponent } from './description-dashboard.component';

describe('DescriptionDashboardComponent', () => {
  let component: DescriptionDashboardComponent;
  let fixture: ComponentFixture<DescriptionDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
