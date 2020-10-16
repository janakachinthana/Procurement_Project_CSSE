// import statements
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// ngModule imports
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],

  // component declareration
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],

  // compoent exports
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})

// lass declareration
export class ComponentsModule { }
