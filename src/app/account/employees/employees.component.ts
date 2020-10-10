import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Employee } from 'app/shared/models/employee.model';
import { EmployeeRegistrationFormComponent } from './employee-registration-form/employee-registration-form.component';
// import { EmployeeService } from 'app/shared/servises/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private dialog:MatDialog,
  ) { }

  ngOnInit(): void {
  }
  AddOrEditEmployees(emp: Employee) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '35%';
    dialogConfig.height = '80%';
    // dialogConfig.data = {emp};
    this.dialog.open(EmployeeRegistrationFormComponent);
  }

}
