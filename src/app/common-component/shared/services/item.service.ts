// import statements
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})

// class declaretion
export class ItemService {

  // variable declareration
  formData: Item;

  // constructor implementation
  constructor(
    private fireStore: AngularFirestore
  ) { }

  // implementation for the get every items from the database
  getItems() {
    return this.fireStore.collection('Items').snapshotChanges();
  }
}






