import { Component, OnInit } from '@angular/core';
import { NewOrder } from 'app/common-component/shared/models/new-order.model';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-now-itemslits',
  templateUrl: './order-now-itemslits.component.html',
  styleUrls: ['./order-now-itemslits.component.css']
})
export class OrderNowItemslitsComponent implements OnInit {

  list : NewOrder[];
  
  constructor(private service : OrderNowService,
    private fireStore : AngularFirestore,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getNewOrder().subscribe(actionArray=>{
      this.list = actionArray.map(item => {
        return {   
          id: item.payload.doc.id, ...item.payload.doc.data() as NewOrder}
      })
    });
  }

  onEdit(neword : NewOrder){
    this.service.formData = Object.assign({},neword);
  }

  onDelete(id:String){
    if(confirm("Are you sure to delete this record?")){
        this.fireStore.doc('new-order/'+id).delete();
        this.openSnackBar();
    }
  }


  openSnackBar() {
    this._snackBar.open('Item Deleted successfully', 'Done!', {
      duration: 2000,
    });
  }
}
