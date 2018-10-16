import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '@app/admin/admin.component';
import { AdminQuoteComponent } from '@app/admin/admin-quote/admin-quote.component';
import { AdminDashboardComponent } from '@app/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'quote/:id', component: AdminQuoteComponent },
    { path: '**', component: AdminDashboardComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
