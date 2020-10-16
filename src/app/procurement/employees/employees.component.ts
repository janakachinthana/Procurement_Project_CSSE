// import statements
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'app/common-component/shared/models/employee.model';
import { EmployeeService } from 'app/common-component/shared/services/employee.service';
import { EmployeeRegistrationFormComponent } from './employee-registration-form/employee-registration-form.component';

// components declareration
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

// class declareration
export class EmployeesComponent implements OnInit {

  // variable declareration
  list : Employee[];
  
  // implementation of constructor
  constructor(
    private dialog:MatDialog, // MatDialog class declareration
    private service : EmployeeService, // EmployeeService class declareration
    private fireStore : AngularFirestore, // AngularFirestore class declareration
    private _snackBar: MatSnackBar // MatSnackBar class declareration
  ) { }

  // initializing method implementation
  ngOnInit(): void {

    // calla method of the service class to retrieve data
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Employee};
      })
    });
  }
  
  // implementation of add or edit button with popup window
  AddOrEditEmployees(emp: Employee) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '35%';
    dialogConfig.height = '80%';
    dialogConfig.data = {emp};
    this.dialog.open(EmployeeRegistrationFormComponent);
  }
}
