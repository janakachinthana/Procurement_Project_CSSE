// import statement
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenaralService } from 'app/common-component/shared/services/genaral.service';

// variable declareration
declare const $: any;

// interface declareration
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

// routing implementation for employees
export const ROUTES: RouteInfo[] = [
  { path: '/main/dashboard', title: 'Dashbord', icon: 'Dashbord', class: 'Dashbord' },
  { path: '/main/user-profile', title: 'User Profile', icon: 'person', class: '' },
];

// routing implementation for Project Manager
export const ROUTES1: RouteInfo[] = [
  { path: '/main/dashboard', title: 'Dashbord', icon: 'Dashbord', class: 'Dashbord' },
  { path: '/main/order', title: 'Request Order', icon: 'person', class: '' },
  { path: '/main/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/main/ordersProjectManager', title: 'Requested Order', icon: 'person', class: '' }
];

// routing implementation for Procument Staff
export const ROUTES2: RouteInfo[] = [
  { path: '/main/dashboard', title: 'Dashbord', icon: 'Dashbord', class: 'Dashbord' },
  { path: '/main/employees', title: 'Employee Management', icon: 'person', class: '' },
  { path: '/main/catalogues', title: 'Catalogue Management', icon: 'person', class: '' },
  { path: '/main/requestedOrdersProcurement', title: 'Order Requests', icon: 'person', class: '' },
  { path: '/main/approvedOrdersProcurement', title: 'Approved Orders', icon: 'person', class: '' }
];

// component declreration
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

// class declareration
export class SidebarComponent implements OnInit {

  // variable declareration
  menuItems: any[];
  type: any = 0;

  // implentation of costrctor
  constructor(
    private serviceGenaral: GenaralService, //gebaral service class declareration
    private router: Router, //router class declareration
  ) { }


  // initializing method implementation
  ngOnInit() {

    // check user type to set routing for employees
    if (this.serviceGenaral.type == 0) {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    // check user type to set routing for Project Manager
    else if (this.serviceGenaral.type == 1) {
      this.menuItems = ROUTES1.filter(menuItem => menuItem);
    }

    // check user type to set routing for Procurement
    else if (this.serviceGenaral.type == 2) {
      this.menuItems = ROUTES2.filter(menuItem => menuItem);
    }

    // nevigate to login page if the user type uknown
    else {
      this.router.navigateByUrl('/');
    }
  }

  // check screen size
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
