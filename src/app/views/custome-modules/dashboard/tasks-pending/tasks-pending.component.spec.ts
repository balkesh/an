import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPendingComponent } from './tasks-pending.component';

describe('TasksPendingComponent', () => {
  let component: TasksPendingComponent;
  let fixture: ComponentFixture<TasksPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
