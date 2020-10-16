// import statements
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})

// class declaretion
export class CategoryService {

  // variable declareration
  formData: Category;

  // constructor implementation
  constructor(
    private fireStore: AngularFirestore //firestore class declareration
  ) { }

  // implementation for the get every items from the database related to the new order
  getItems() {
    return this.fireStore.collection('Items').snapshotChanges();
  }

}