import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { AdminRoutingModule } from '@app/admin/admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminQuoteComponent } from './admin-quote/admin-quote.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent, 
    AdminQuoteComponent
  ]
})
export class AdminModule { }
