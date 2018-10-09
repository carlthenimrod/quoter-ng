import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuoterComponent } from '@app/core/quoter/quoter.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    QuoterComponent,
    HeaderComponent,
    LoginComponent
  ]
})
export class CoreModule { }
