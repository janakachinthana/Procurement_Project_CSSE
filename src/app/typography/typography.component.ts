import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { NewOrder } from 'app/shared/new-order.model';
import { OrderNowService } from 'app/shared/order-now.service';
import { data } from 'jquery';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  todayDate : Date = new Date();
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
        this.fireStore.collection('orders').doc('Pending-Orders').collection(this.todayDate.toString()).doc(item.id.toString()).set(item);
        // this.fireStore.collection('pending-orders').doc('pending-orders').collection(''+item.id).add(item);    
        this.fireStore.collection('new-orders').doc(item.id.toString()).delete();
      });
  }
}
