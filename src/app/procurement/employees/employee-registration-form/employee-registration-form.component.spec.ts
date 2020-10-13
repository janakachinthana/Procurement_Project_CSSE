import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegistrationFormComponent } from './employee-registration-form.component';

describe('EmployeeRegistrationFormComponent', () => {
  let component: EmployeeRegistrationFormComponent;
  let fixture: ComponentFixture<EmployeeRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
