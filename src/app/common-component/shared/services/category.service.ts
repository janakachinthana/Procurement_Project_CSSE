import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  formData: Category;
  
  constructor(private fireStore : AngularFirestore) { }


  getItems(){
    return this.fireStore.collection('Items').snapshotChanges();
    // return this.fireStore.collection('Items').snapshotChanges();
  }
  
}