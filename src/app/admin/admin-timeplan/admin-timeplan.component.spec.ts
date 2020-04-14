import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimeplanComponent } from './admin-timeplan.component';

describe('AdminTimeplanComponent', () => {
  let component: AdminTimeplanComponent;
  let fixture: ComponentFixture<AdminTimeplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTimeplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTimeplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
