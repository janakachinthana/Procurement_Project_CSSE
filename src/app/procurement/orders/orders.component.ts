import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewOrder } from 'app/common-component/shared/models/new-order.model';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  list : NewOrder[];

  constructor(
    private service : OrderNowService,
    private fireStore: AngularFirestore
  ) { }

  ngOnInit(): void {

    this.service.getNewOrders().subscribe(actionArray=>{
      this.list = actionArray.map(item => {
        return {   
          id: item.payload.doc.id, ...item.payload.doc.data() as NewOrder}
      })
    });
  
  }

  addToApprovedList(){
    this.list.forEach(item => {
      this.fireStore.collection('approved').doc(item.id.toString()).set(item);  
      // this.fireStore.collection('new-orders').doc(item.id.toString()).delete();
    });
}
  
  
}
