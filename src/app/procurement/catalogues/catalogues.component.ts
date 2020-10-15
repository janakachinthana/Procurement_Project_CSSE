import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from 'app/common-component/shared/models/item.model';
import { EmployeeService } from 'app/common-component/shared/services/employee.service';
import { ItemService } from 'app/common-component/shared/services/item.service';
import { CataloguesInsertionFormComponent } from './catalogues-insertion-form/catalogues-insertion-form.component';

@Component({
  selector: 'app-catalogues',
  templateUrl: './catalogues.component.html',
  styleUrls: ['./catalogues.component.scss']
})
export class CataloguesComponent implements OnInit {

  list : Item[];

  constructor(
    private dialog:MatDialog,
    private service : ItemService,
    private fireStore : AngularFirestore,
    private _snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    this.service.getItems().subscribe(actionArray => {
      this.list = actionArray.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Item};
      })
    });
  }


  addOrEditItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '35%';
    dialogConfig.height = '80%';
    this.dialog.open(CataloguesInsertionFormComponent);
  }


  onDelete(id: string){
    if(confirm("Are you sure to delete this item?")){
      this.fireStore.doc('Items/'+id).delete();
    }

  }
}
