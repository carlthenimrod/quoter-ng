import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Quote } from '@app/models/quote';
import { QuoteService } from '@app/core/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass']
})
export class QuoteComponent implements OnInit {

  quote: Quote;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.quoteService.get(params['id']).subscribe((quote: Quote) => {
        console.log(quote);
      });
    });
  }
}