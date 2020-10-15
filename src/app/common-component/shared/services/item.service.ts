import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  formData: Item;
  
  constructor(private fireStore : AngularFirestore) { }


  getItems(){
    return this.fireStore.collection('Items').snapshotChanges();
    // return this.fireStore.collection('Items').snapshotChanges();
  }
}






