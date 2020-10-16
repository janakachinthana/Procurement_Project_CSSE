// import statement
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from 'app/common-component/shared/models/item.model';
import { EmployeeService } from 'app/common-component/shared/services/employee.service';
import { ItemService } from 'app/common-component/shared/services/item.service';
import { CataloguesInsertionFormComponent } from './catalogues-insertion-form/catalogues-insertion-form.component';

// compoents declareration
@Component({
  selector: 'app-catalogues',
  templateUrl: './catalogues.component.html',
  styleUrls: ['./catalogues.component.scss']
})

// class declreration
export class CataloguesComponent implements OnInit {

  // variable declareration
  list: Item[];

  // implementation of constructor
  constructor(
    private dialog: MatDialog, // mat dialog class declareration
    private service: ItemService, // Item service class declareration
    private fireStore: AngularFirestore, // angularfiresotore class declareration
    private _snackBar: MatSnackBar // matsnackbar class declareration 

  ) { }

  // initializing method seclareration
  ngOnInit() {

    // calling a method that include in the servise class for getting data
    this.service.getItems().subscribe(actionArray => {
      this.list = actionArray.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Item
        };
      })
    });
  }

  // method of add or edit button implementation with the pop up window
  addOrEditItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '35%';
    dialogConfig.height = '80%';
    this.dialog.open(CataloguesInsertionFormComponent);
  }

  // delete method implementation
  onDelete(id: string) {
    if (confirm("Are you sure to delete this item?")) {
      this.fireStore.doc('Items/' + id).delete();
    }
  }
}
