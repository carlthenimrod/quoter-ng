import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "@app/core/home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
	{ path: 'quote/:id', loadChildren: './quote/quote.module#QuoteModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}