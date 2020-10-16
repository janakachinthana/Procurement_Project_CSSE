// import statements
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})

// class declaretion
export class EmployeeService {

  // variable declareration
  formData: Employee;

  // constructor implementation
  constructor(
    private fireStore: AngularFirestore
  ) { }

  // implementation for the get every Employee from the database
  getEmployees() {
    return this.fireStore.collection('Employees').snapshotChanges();
  }

}
