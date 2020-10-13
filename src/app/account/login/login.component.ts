import { Injector, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'app/shared/models/employee.model';
import { EmployeeService } from 'app/shared/services/employee.service';
import { GenaralService } from 'app/shared/services/genaral.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  list: Employee[];
  submitting = false;
  temp: Employee;
  constructor(
    injector: Injector,
    private router: Router,
    private service: EmployeeService,
    private serviceGenaral: GenaralService
  ) {

  }

  onSubmit(form: NgForm) {

    for (let index = 0; index < this.list.length; index++) {
      this.temp = this.list[index];


      if (form.value.Password == this.temp.Password && form.value.Contact == this.temp.Contact) {

        if (this.temp.Designation == "Supervisor") {

          this.router.navigateByUrl('main/dashboard');
          this.serviceGenaral.type = 0;

        }else if (this.temp.Designation == "Project Manager") {

          this.router.navigateByUrl('main/dashboard');
          this.serviceGenaral.type = 1;

        }else if (this.temp.Designation == "Procurement") {

          this.router.navigateByUrl('main/dashboard');
          this.serviceGenaral.type = 2;

        }

      }

    }

  }
  ngOnInit(): void {

    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Employee
        };
      })
    });

  }

}

