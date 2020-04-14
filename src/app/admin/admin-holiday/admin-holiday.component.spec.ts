import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHolidayComponent } from './admin-holiday.component';

describe('AdminHolidayComponent', () => {
  let component: AdminHolidayComponent;
  let fixture: ComponentFixture<AdminHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
