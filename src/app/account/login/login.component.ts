// import statements
import { Injector, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'app/common-component/shared/models/employee.model';
import { EmployeeService } from 'app/common-component/shared/services/employee.service';
import { GenaralService } from 'app/common-component/shared/services/genaral.service';

// files declaretions
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// class declareration
export class LoginComponent implements OnInit {

  //  variable of the class declareration
  list: Employee[];
  submitting = false;
  temp: Employee;

  // constructor of the class
  constructor(
    private router: Router, //rotuer class declareration
    private service: EmployeeService, //Employee service class declareration
    private serviceGenaral: GenaralService //general service class class declareration
  ) { }

  // implementation of class intialization method
  ngOnInit(): void {

    // get employee list by calling a method of the employee service class
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Employee
        };
      })
    });

  }

  // implementation of login button method
  onSubmit(form: NgForm) {

    // check the credintials of user from the database list
    for (let index = 0; index < this.list.length; index++) {
      this.temp = this.list[index];

      // maching the credintials
      if (form.value.Password == this.temp.Password && form.value.Contact == this.temp.Contact) {

        // check user type condionfor supervisor
        if (this.temp.Designation == "Supervisor") {
          this.router.navigateByUrl('main/dashboard');
          this.serviceGenaral.type = 0;
        }

        // check user type condionfor Project Manager
        else if (this.temp.Designation == "Project Manager") {
          this.router.navigateByUrl('main/dashboard');
          this.serviceGenaral.type = 1;
        }

        // check user type condionfor Procurement
        else if (this.temp.Designation == "Procurement") {
          this.router.navigateByUrl('main/dashboard');
          this.serviceGenaral.type = 2;
        }
      }
    }
  }
}

