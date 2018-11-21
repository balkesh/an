import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePnpXlsxComponent } from './title-pnp-xlsx.component';

describe('TitleDashboardComponent', () => {
  let component: TitlePnpXlsxComponent;
  let fixture: ComponentFixture<TitlePnpXlsxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlePnpXlsxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePnpXlsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
