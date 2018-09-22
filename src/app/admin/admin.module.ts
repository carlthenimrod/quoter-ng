import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { AdminRoutingModule } from '@app/admin/admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminQuoteComponent } from './admin-quote/admin-quote.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent, 
    AdminQuoteComponent, 
    AdminSidebarComponent, 
    AdminDashboardComponent
  ]
})
export class AdminModule { }
