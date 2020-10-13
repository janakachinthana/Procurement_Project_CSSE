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


import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './Account/login/login.component';
import { environment } from 'environments/environment';
import { OrderNowFormComponent } from './supervisors/typography/order-now-form/order-now-form.component';
import { OrderNowItemslitsComponent } from './supervisors/typography/order-now-itemslits/order-now-itemslits.component';
import { OrderNowService } from './common-component/shared/order-now.service'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmployeeRegistrationFormComponent } from './procurement/employees/employee-registration-form/employee-registration-form.component';
import { EmployeesComponent } from './procurement/employees/employees.component';
import { ProjectManagersComponent } from './project-managers/project-managers.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';






@NgModule({
  imports: [
    BrowserAnimationsModule,
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
    EmployeeRegistrationFormComponent,
    ProjectManagersComponent,
    SupervisorsComponent,
   


  ],
  providers: [OrderNowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
