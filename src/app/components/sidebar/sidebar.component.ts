import { Component, OnInit } from '@angular/core';
import { GenaralService } from 'app/common-component/shared/services/genaral.service';


declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/main/dashboard', title: 'Dashbord', icon: 'Dashbord', class: 'Dashbord' },
  { path: '/main/user-profile', title: 'User Profile', icon: 'person', class: '' },

];

export const ROUTES1: RouteInfo[] = [

  { path: '/main/dashboard', title: 'Dashbord', icon: 'Dashbord', class: 'Dashbord' },
  { path: '/main/order', title: 'Request Order', icon: 'person', class: '' },
  { path: '/main/user-profile', title: 'User Profile', icon: 'person', class: '' },
];

export const ROUTES2: RouteInfo[] = [

  { path: '/main/dashboard', title: 'Dashbord', icon: 'Dashbord', class: 'Dashbord' },
  { path: '/main/employees', title: 'Employee Management', icon: 'person', class: '' },
  { path: '/main/catalogues', title: 'Catalogue Management', icon: 'person', class: '' },
  { path: '/main/ordersProcurement', title: 'Requested Orders', icon: 'person', class: '' }
  
  

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  type: any = 0;

  constructor(
    private serviceGenaral: GenaralService
  ) { }

  ngOnInit() {

    if (this.serviceGenaral.type == 0) {

      this.menuItems = ROUTES.filter(menuItem => menuItem);

    } else if (this.serviceGenaral.type == 1) {

      this.menuItems = ROUTES1.filter(menuItem => menuItem);

    } else if (this.serviceGenaral.type == 2) {

      this.menuItems = ROUTES2.filter(menuItem => menuItem);

    }


  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
