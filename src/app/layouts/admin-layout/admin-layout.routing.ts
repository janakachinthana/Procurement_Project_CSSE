import { Routes } from '@angular/router';

import { DashboardComponent } from '../../supervisors/dashboard/dashboard.component';
import { UserProfileComponent } from '../../common-component/user-profile/user-profile.component';
import { TableListComponent } from '../../supervisors/table-list/table-list.component';
import { TypographyComponent } from '../../supervisors/typography/typography.component';
import { IconsComponent } from '../../supervisors/icons/icons.component';
import { MapsComponent } from '../../supervisors/maps/maps.component';
import { NotificationsComponent } from '../../supervisors/notifications/notifications.component';
import { UpgradeComponent } from '../../supervisors/upgrade/upgrade.component';
import { AccountComponent } from 'app/account/account.component';
import { LoginComponent } from 'app/Account/login/login.component';
import { EmployeesComponent } from '../../procurement/employees/employees.component';
import { RequestedOrderListComponent } from '../../project-managers/requested-order-list/requested-order-list.component';
import { CataloguesComponent } from 'app/procurement/employees/catalogues/catalogues.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'employees',        component: EmployeesComponent },
    { path: 'requestedOrderList',        component: RequestedOrderListComponent },
    { path: 'catalogues',        component: CataloguesComponent },
    

];

export const account: Routes = [
    { path: 'login',      component: LoginComponent },
  
];
