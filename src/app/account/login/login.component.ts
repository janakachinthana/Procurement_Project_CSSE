import { Injector, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



submitting = false;

constructor(
  injector: Injector,
  private router: Router,
) {
 
}
login(){
  this.router.navigateByUrl('main/dashboard');
}
ngOnInit(): void {

}

}

