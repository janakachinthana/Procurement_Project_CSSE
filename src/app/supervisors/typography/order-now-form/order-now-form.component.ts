import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-order-now-form',
  templateUrl: './order-now-form.component.html',
  styleUrls: ['./order-now-form.component.css']
})
export class OrderNowFormComponent implements OnInit {

  todayDate : Date = new Date();
  

  constructor(private service: OrderNowService,
    private fireStore : AngularFirestore,
    private _snackBar: MatSnackBar,
    private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if(form != null)
      form.resetForm();
    this.service.formData = {
      id: '',
      categoryName: '',
      productName: '',
      quantity: null,
      remark: ''
    }
  }


  onSubmit(form:NgForm){
      this.todayDate = new Date();
      form.value.id = this.todayDate.toString();
     let data =Object.assign({},form.value);
      this.fireStore.collection('new-orders').doc(this.todayDate.toString()).set(data);  
      this.openSnackBar();
      this.resetForm(form);
  }


  openSnackBar() {
    this._snackBar.open('Item added successfully', 'Done!', {
      duration: 2000,
    });
  }

  
  
}

