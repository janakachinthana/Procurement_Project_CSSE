import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'app/common-component/shared/models/employee.model';
import { NewOrder } from 'app/common-component/shared/models/new-order.model';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';
import { EmployeeService } from 'app/common-component/shared/services/employee.service';
import { EmployeeRegistrationFormComponent } from './employee-registration-form/employee-registration-form.component';
// import { EmployeeService } from 'app/shared/servises/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  list : Employee[];
  
  constructor(
    private dialog:MatDialog,
    private service : EmployeeService,
    private fireStore : AngularFirestore,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
   
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Employee};
      })
    });

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
