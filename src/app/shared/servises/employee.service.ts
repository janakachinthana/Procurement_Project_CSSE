import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  constructor(private fireStore : AngularFirestore) { }

  getEmployees(){
    return this.fireStore.collection('Employees').snapshotChanges();
    // return this.fireStore.collection('new-orders').snapshotChanges();
  }
  
}
