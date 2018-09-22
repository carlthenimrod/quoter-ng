import { Component, OnInit } from '@angular/core';

import { Quote } from '@app/models/quote';
import { QuoteService } from '@app/core/quote.service';

@Component({
  selector: 'app-quoter',
  templateUrl: './quoter.component.html',
  styleUrls: ['./quoter.component.scss']
})
export class QuoterComponent implements OnInit {
  quote: Quote;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quote = new Quote('', '');
  }

  onSubmit() {
    this.quoteService.add(this.quote).subscribe((quote: Quote) => {
      console.log(quote);
    }, error => {
      console.log(error);
    });
  }
}
