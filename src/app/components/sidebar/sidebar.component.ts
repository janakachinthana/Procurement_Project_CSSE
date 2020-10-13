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
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/main/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/main/table-list', title: 'Janaka',  icon:'content_paste', class: '' },
    { path: '/main/typography', title: 'Order now',  icon:'library_books', class: '' },
    { path: '/main/icons', title: 'Dhanusha',  icon:'bubble_chart', class: '' },
    { path: '/main/maps', title: 'Menura',  icon:'location_on', class: '' },
    { path: '/main/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/main/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    { path: '/main/dashboard', title: 'Dashbord',  icon:'Dashbord', class: 'Dashbord' },
];

export const ROUTES1: RouteInfo[] = [

  { path: '/main/dashboard', title: 'Dashbord',  icon:'Dashbord', class: 'Dashbord' },
  { path: '/main/requestedOrderList', title: 'Requested Orders',  icon:'order', class: '' },
];

export const ROUTES2: RouteInfo[] = [

  { path: '/main/dashboard', title: 'Dashbord',  icon:'Dashbord', class: 'Dashbord' },
  { path: '/main/employees', title: 'Employee Management',  icon:'person', class: '' },
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

    }else if (this.serviceGenaral.type == 1) {

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
