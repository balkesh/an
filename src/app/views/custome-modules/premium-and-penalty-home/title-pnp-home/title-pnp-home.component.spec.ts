import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePnpHomeComponent } from './title-pnp-home.component';

describe('TitleDashboardComponent', () => {
  let component: TitlePnpHomeComponent;
  let fixture: ComponentFixture<TitlePnpHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlePnpHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePnpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
