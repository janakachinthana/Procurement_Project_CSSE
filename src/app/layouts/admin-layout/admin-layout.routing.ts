// import statement
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../supervisors/dashboard/dashboard.component';
import { UserProfileComponent } from '../../common-component/user-profile/user-profile.component';
import { TypographyComponent } from '../../supervisors/typography/typography.component';
import { LoginComponent } from '../../Account/login/login.component';
import { EmployeesComponent } from '../../procurement/employees/employees.component';
import { CataloguesComponent } from '../../procurement/catalogues/catalogues.component';
import { OrderHistoryComponent } from '../../project-managers/Orders/order-history/order-history.component';
import { RequestedOrdersComponent } from '../../procurement/orders/requested-orders/requested-orders.component';
import { ApprovedOrdersComponent } from 'app/procurement/orders/approved-orders/approved-orders.component';
import { SpecialRequestedOrdersComponent } from 'app/procurement/orders/special-requested-orders/special-requested-orders.component';

// compoents set to path for access the compoents
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'order', component: TypographyComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'requestedOrdersProcurement', component: RequestedOrdersComponent },
    { path: 'approvedOrdersProcurement', component: ApprovedOrdersComponent },
    { path: 'catalogues',        component: CataloguesComponent },
    { path: 'ordersProjectManager',        component: OrderHistoryComponent },
    { path: 'login', component: LoginComponent },
    { path: 'specialRequestedOrdersProcurement', component: SpecialRequestedOrdersComponent },

    
];

