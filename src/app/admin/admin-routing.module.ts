import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "@app/admin/admin.component";
import { AdminQuoteComponent } from "@app/admin/admin-quote/admin-quote.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'quote/:id', component: AdminQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }