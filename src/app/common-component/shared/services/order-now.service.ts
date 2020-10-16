// import statements
import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { NewOrder } from '../models/new-order.model';

@Injectable({
  providedIn: 'root'
})

// class declaretion
export class OrderNowService {

  // variable declareration
  formData: NewOrder;

  // constructor implementation
  constructor(
    private fireStore: AngularFirestore
  ) { }

  // implementation for the get new order Items from the database
  getNewOrder() {
    return this.fireStore.collection('new-orders').snapshotChanges();
  }

  // implementation for the get Requested orders Items from the database
  getNewOrders() {
    return this.fireStore.collection('Requested Orders').snapshotChanges();
  }

  // implementation for the get Approved orders Items from the database
  getApprovedOrders() {
    return this.fireStore.collection('Approved Orders').snapshotChanges();
  }
}
