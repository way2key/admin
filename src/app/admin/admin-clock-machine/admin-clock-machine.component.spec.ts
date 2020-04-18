import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClockMachineComponent } from './admin-clock-machine.component';

describe('AdminClockMachineComponent', () => {
  let component: AdminClockMachineComponent;
  let fixture: ComponentFixture<AdminClockMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClockMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClockMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
