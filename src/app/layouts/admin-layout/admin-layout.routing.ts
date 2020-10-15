import { Routes } from '@angular/router';

import { DashboardComponent } from '../../supervisors/dashboard/dashboard.component';
import { UserProfileComponent } from '../../common-component/user-profile/user-profile.component';
import { TypographyComponent } from '../../supervisors/typography/typography.component';
import { AccountComponent } from 'app/account/account.component';
import { LoginComponent } from '../..//Account/login/login.component';
import { EmployeesComponent } from '../../procurement/employees/employees.component';
import { CataloguesComponent } from 'app/procurement/employees/catalogues/catalogues.component';
import { OrdersComponent } from 'app/procurement/orders/orders.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'order', component: TypographyComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'ordersProcurement', component: OrdersComponent },
    { path: 'catalogues',        component: CataloguesComponent },
];

export const account: Routes = [
    { path: 'login', component: LoginComponent },

];
