import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { QuoteService } from '@app/core/quote.service';
import { Quote } from '@app/models/quote';

@Component({
  selector: 'app-admin-quote',
  templateUrl: './admin-quote.component.html',
  styleUrls: ['./admin-quote.component.sass']
})
export class AdminQuoteComponent implements OnInit {

  quote: Quote;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.quoteService.get(params['id']).subscribe((quote: Quote) => {
        this.quote = quote;
      });
    },
    e => {
      console.log(e);
    });
  }
}