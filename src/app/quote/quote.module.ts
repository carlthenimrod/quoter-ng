import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from '@app/quote/quote-routing.module';
import { QuoteComponent } from './quote.component';

@NgModule({
  imports: [
    CommonModule,
    QuoteRoutingModule
  ],
  declarations: [QuoteComponent]
})
export class QuoteModule { }
