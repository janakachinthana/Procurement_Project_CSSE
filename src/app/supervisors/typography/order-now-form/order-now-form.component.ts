import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-order-now-form',
  templateUrl: './order-now-form.component.html',
  styleUrls: ['./order-now-form.component.css']
})
export class OrderNowFormComponent implements OnInit {

  todayDate : Date = new Date();

  constructor(private service: OrderNowService,
    private fireStore : AngularFirestore,
    private _snackBar: MatSnackBar) { }

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
    let data =Object.assign({},form.value);
    delete data.id;
    if(form.value.id == ''){
      this.fireStore.collection('new-orders').doc(this.todayDate.toString()).set(data);  
      // this.fireStore.collection('Orders').doc('new-orders').collection('xxx').add(data);   
      this.openSnackBar();
      this.resetForm(form);
    }
    else{
      this.fireStore.doc('new-order/'+form.value.id).update(data);
      this.openSnackBarUpdate();

    }
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

