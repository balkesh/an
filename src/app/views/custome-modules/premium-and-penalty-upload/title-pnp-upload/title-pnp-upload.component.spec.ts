import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePnpUploadComponent } from './title-pnp-upload.component';

describe('TitleDashboardComponent', () => {
  let component: TitlePnpUploadComponent;
  let fixture: ComponentFixture<TitlePnpUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlePnpUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePnpUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
