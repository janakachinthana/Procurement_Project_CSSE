// import statements
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes} from './admin-layout.routing';
import { TypographyComponent } from '../../supervisors/typography/typography.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { DashboardComponent } from '../../supervisors/dashboard/dashboard.component';
import { UserProfileComponent } from '../../common-component/user-profile/user-profile.component';
import { OrderNowFormComponent } from '../../supervisors/typography/order-now-form/order-now-form.component';
import { OrderNowItemslitsComponent } from '../../supervisors/typography/order-now-itemslits/order-now-itemslits.component';

// ngModule imports
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],

  // component declareration
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TypographyComponent,
    OrderNowFormComponent,
    OrderNowItemslitsComponent,
  
  ]
})

// class declareration
export class AdminLayoutModule {}
