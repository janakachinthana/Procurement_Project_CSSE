import { Injectable } from '@angular/core';

import { AngularFirestore } from "@angular/fire/firestore";
import { NewOrder } from '../models/new-order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderNowService {
  formData: NewOrder;
  constructor(private fireStore : AngularFirestore) { }

  getNewOrder(){
    return this.fireStore.collection('new-orders').snapshotChanges();
  }

  getNewOrders(){
    return this.fireStore.collection('Requested Orders').snapshotChanges();
  }

  getApprovedOrders(){
    return this.fireStore.collection('Approved Orders').snapshotChanges();
  }
}
