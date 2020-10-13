import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes, account} from './admin-layout.routing';
import { TableListComponent } from '../../supervisors/table-list/table-list.component';
import { TypographyComponent } from '../../supervisors/typography/typography.component';
import { IconsComponent } from '../../supervisors/icons/icons.component';
import { MapsComponent } from '../../supervisors/maps/maps.component';
import { NotificationsComponent } from '../../supervisors/notifications/notifications.component';
import { UpgradeComponent } from '../../supervisors/upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { OrderNowFormComponent } from '../../supervisors/typography/order-now-form/order-now-form.component';
import { OrderNowItemslitsComponent } from '../../supervisors/typography/order-now-itemslits/order-now-itemslits.component';
import { DashboardComponent } from '../../supervisors/dashboard/dashboard.component';
import { UserProfileComponent } from '../../common-component/user-profile/user-profile.component';
// import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    RouterModule.forChild(account),
    // ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    OrderNowFormComponent,
    OrderNowItemslitsComponent
  
  ]
})

export class AdminLayoutModule {}
