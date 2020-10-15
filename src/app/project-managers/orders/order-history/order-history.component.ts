import { Component, OnInit } from '@angular/core';
import { NewOrder } from 'app/common-component/shared/models/new-order.model';
import { OrderNowService } from 'app/common-component/shared/services/order-now.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  // list : Observable<any>[];
  list : NewOrder[];
  constructor(
    private service : OrderNowService,
  ) { }

  ngOnInit(): void {
    // this.service.getNewOrders().subscribe(actionArray=>{
    //   this.list = actionArray.map(item => {
    //     return {   
    //       id: item.payload.doc.id, ...item.payload.doc.data() as any}
    //   })
    // });


       this.service.getNewOrder().subscribe(actionArray=>{
      this.list = actionArray.map(item => {
        return {   
          id: item.payload.doc.id, ...item.payload.doc.data() as NewOrder}
      })
    });
  }

}
