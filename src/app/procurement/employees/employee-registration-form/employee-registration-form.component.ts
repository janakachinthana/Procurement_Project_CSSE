// import statement
import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'app/common-component/shared/services/employee.service';

// components declareration
@Component({
  selector: 'app-employee-registration-form',
  templateUrl: './employee-registration-form.component.html',
  styleUrls: ['./employee-registration-form.component.css']
})

// class declareration 
export class EmployeeRegistrationFormComponent implements OnInit {

  // implementation of constructor
  constructor(
    private service: EmployeeService, // employee service class declareration
    private fireStore: AngularFirestore, // AngularFirestore class declareration
    private _snackBar: MatSnackBar // MatSnackBar class declareration
  ) { }


  // initializing method implementation
  ngOnInit(): void {
    this.resetForm(); // call the reset function
  }

  // implementation of reset form values
  resetForm(form?: NgForm) {
    if (form != null) 
      form.resetForm();
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      Designation: '',
      projectName: '',
      SiteAddress: '',
      Nic: '',
      Contact: null,
      Email: '',
      Password: 'ABCabc123',

    }
  }

//  method of submit button implementation 
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value); // assign form data to vaariable
    this.fireStore.collection('Employees').doc(this.service.formData.Contact.toString()).set(data); //insert the data into the database
    this.openSnackBar(); // show notification 
    this.resetForm(form); // calling method to reset form
  }

  // notification method for insertion
  openSnackBar() {
    this._snackBar.open('Item added successfully', 'Done!', {
      duration: 2000,
    });
  }

// notification method for update
  openSnackBarUpdate() {
    this._snackBar.open('Item Updated successfully', 'Done!', {
      duration: 2000,
    });
  }

}
