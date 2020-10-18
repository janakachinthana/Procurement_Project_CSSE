import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewOrder } from 'app/common-component/shared/models/new-order.model';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';

@Component({
  selector: 'app-requested-orders',
  templateUrl: './requested-orders.component.html',
  styleUrls: ['./requested-orders.component.css']
})
export class RequestedOrdersComponent implements OnInit {

  list : NewOrder[];
  isShown: boolean = true ;

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
      this.fireStore.collection('Approved Orders').doc(item.id.toString()).set(item);  
      this.fireStore.collection('Requested Orders').doc(item.id.toString()).delete();
    });
    this.isShown =false;
    
}
  
  
}
