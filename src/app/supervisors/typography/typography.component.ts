import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { NewOrder } from 'app/common-component/shared/models/new-order.model';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';
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

// inserting data of requesting order 
  addToPending(){
      this.list.forEach(item => {
        this.fireStore.collection('Requested Orders').doc(item.id.toString()).set(item);  
        this.fireStore.collection('new-orders').doc(item.id.toString()).delete();
      });
  }
}
