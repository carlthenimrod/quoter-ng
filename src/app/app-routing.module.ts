import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "@app/core/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
	{ path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'quote/:id', loadChildren: './quote/quote.module#QuoteModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }