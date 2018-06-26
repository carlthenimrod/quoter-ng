import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteComponent } from './quote.component';
import { QuoteRoutingModule } from '@app/quote/quote-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuoteRoutingModule
  ],
  declarations: [QuoteComponent]
})
export class QuoteModule { }
