import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { QuoterComponent } from '@app/core/quoter/quoter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    QuoterComponent
  ]
})
export class CoreModule { }