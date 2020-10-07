import { Injectable } from '@angular/core';
import { NewOrder } from './new-order.model';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class OrderNowService {
  formData: NewOrder;
  constructor(private fireStore : AngularFirestore) { }

  getNewOrder(){
    return this.fireStore.collection('new-order').snapshotChanges();
  }
}
