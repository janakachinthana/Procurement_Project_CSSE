import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'app/shared/models/employee.model';
import { EmployeeService } from 'app/shared/servises/employee.service';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

@Component({
  selector: 'app-employee-registration-form',
  templateUrl: './employee-registration-form.component.html',
  styleUrls: ['./employee-registration-form.component.css']
})
export class EmployeeRegistrationFormComponent implements OnInit {

  constructor(
    private service: EmployeeService,
    private fireStore : AngularFirestore,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if(form != null)
      form.resetForm();
    this.service.formData = {
      EmployeeID : null,
      FullName : '',
      Designation : '',
      ProjectName : '',
      SiteAddress : '',
      Nic : '',
      Contact : null,
      Email : '',
      Password : 'ABCabc123',

    }
  }

  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
  
  
      // this.fireStore.collection('new-order').add(data); 
      this.fireStore.collection('Employees').doc(this.service.formData.Contact.toString()).set(data);   
      this.openSnackBar();
      this.resetForm(form);
    
   
    this.resetForm(form);
  }


  openSnackBar() {
    this._snackBar.open('Item added successfully', 'Done!', {
      duration: 2000,
    });
  }

  
  openSnackBarUpdate() {
    this._snackBar.open('Item Updated successfully', 'Done!', {
      duration: 2000,
    });
  }

}
