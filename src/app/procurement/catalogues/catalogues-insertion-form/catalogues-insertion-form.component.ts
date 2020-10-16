// import statements
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'app/common-component/shared/services/employee.service';
import { ItemService } from 'app/common-component/shared/services/item.service';
import { timestamp } from 'rxjs/operators';

// component declareration
@Component({
  selector: 'app-catalogues-insertion-form',
  templateUrl: './catalogues-insertion-form.component.html',
  styleUrls: ['./catalogues-insertion-form.component.css']
})

// class declareration
export class CataloguesInsertionFormComponent implements OnInit {

  // variable declareration ()
  todayDate: Date = new Date(); // getting currrent time to variable

  constructor(
    private service: ItemService, // item service class declareration
    private fireStore: AngularFirestore, // AngularFirestore class declareration
    private _snackBar: MatSnackBar, // MatSnackBar class declareration
    private dialogRef: MatDialog // MatDialog class declareration
  ) { }

  ngOnInit(): void {
    // calling reset form method on the start
    this.resetForm();
  }


  // reset the form by checking the condition
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      // initializing variables to null
      itemID: null,
      itemName: '',
      itemCategory: '',
      itemPrice: null
    }
  }


  // submit method of the form
  onSubmit(form: NgForm) {
    form.value.itemID = this.todayDate.toString();

    let data = Object.assign({}, form.value);

    // this.fireStore.collection('new-order').add(data); 
    this.fireStore.collection('Items').doc(this.todayDate.toString()).set(data);
    //save confirmation as a snack bar
    this.openSnackBar();
    //reset the form after insertion
    this.resetForm(form);
    this.dialogRef.closeAll();

  }


  //snackbar method for item insertion notification 
  openSnackBar() {
    this._snackBar.open('Item added successfully', 'Done!', {
      duration: 2000,
    });
  }

}
