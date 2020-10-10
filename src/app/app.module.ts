import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule} from "@angular/fire";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { SelectDropDownModule } from 'ngx-select-dropdown'
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatDialogModule} from "@angular/material/dialog";

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './Account/login/login.component';
import { environment } from 'environments/environment';
import { OrderNowFormComponent } from './typography/order-now-form/order-now-form.component';
import { OrderNowItemslitsComponent } from './typography/order-now-itemslits/order-now-itemslits.component';
import { OrderNowService } from './shared/order-now.service'; 
// import { ToastrModule } from 'ngx-toastr';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmployeesComponent } from './account/employees/employees.component';
import { EmployeeRegistrationFormComponent } from './account/employees/employee-registration-form/employee-registration-form.component';
// import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    // ToastrModule.forRoot(), // ToastrModule added
    // ToastrModule.forRoot(),
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatSelectModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    SelectDropDownModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AccountComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeeRegistrationFormComponent

  ],
  providers: [OrderNowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
