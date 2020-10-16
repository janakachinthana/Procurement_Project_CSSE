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

import { LoginComponent } from './Account/login/login.component';
import { environment } from 'environments/environment';
import { OrderNowService } from './common-component/shared/services/order-now.service'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmployeeRegistrationFormComponent } from './procurement/employees/employee-registration-form/employee-registration-form.component';
import { EmployeesComponent } from './procurement/employees/employees.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';

import 'zone.js/dist/zone';
import { CataloguesInsertionFormComponent } from './procurement/catalogues/catalogues-insertion-form/catalogues-insertion-form.component';
import { CataloguesComponent } from './procurement/catalogues/catalogues.component';
import { OrderHistoryComponent } from './project-managers/Orders/order-history/order-history.component';
import { ApprovedOrdersComponent } from './procurement/orders/approved-orders/approved-orders.component';
import { RequestedOrdersComponent } from './procurement/orders/requested-orders/requested-orders.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

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
    LoginComponent,
    EmployeesComponent,
    EmployeeRegistrationFormComponent,
    SupervisorsComponent,
    CataloguesComponent,
    CataloguesInsertionFormComponent,
    OrderHistoryComponent,
    ApprovedOrdersComponent,
    RequestedOrdersComponent,
   


  ],
  providers: [OrderNowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
