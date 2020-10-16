import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewOrder } from 'app/common-component/shared/models/new-order.model';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';

@Component({
  selector: 'app-approved-orders',
  templateUrl: './approved-orders.component.html',
  styleUrls: ['./approved-orders.component.css']
})
export class ApprovedOrdersComponent implements OnInit {

  list : NewOrder[];

  constructor(
    private service : OrderNowService,
    private fireStore: AngularFirestore
  ) { }

  ngOnInit(): void {
    
    this.service.getApprovedOrders().subscribe(actionArray=>{
      this.list = actionArray.map(item => {
        return {   
          id: item.payload.doc.id, ...item.payload.doc.data() as NewOrder}
      })
    });
  }

}
