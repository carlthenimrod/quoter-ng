import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { QuoteComponent } from "./quote.component";

const quoteRoutes: Routes = [
  { path: '', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(quoteRoutes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule{ }