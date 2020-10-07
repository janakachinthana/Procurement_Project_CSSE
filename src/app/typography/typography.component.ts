import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { NewOrder } from 'app/shared/new-order.model';
import { OrderNowService } from 'app/shared/order-now.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  list : NewOrder[];


  constructor(private service : OrderNowService,
    private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.service.getNewOrder().subscribe(actionArray=>{
      this.list = actionArray.map(item => {
        return {   
          id: item.payload.doc.id, ...item.payload.doc.data() as NewOrder}
      })
    });
  }


  addToPending(){
      this.list.forEach(item => {
        this.fireStore.collection('Orders').doc('pending-orders').collection(''+item.id).add(item);    
        this.fireStore.doc('new-order/'+item.id).delete();
      });
  }
}
