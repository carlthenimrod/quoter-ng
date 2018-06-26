import { Component, OnInit } from '@angular/core';

import { Quote } from '../models/quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass']
})
export class QuoteComponent implements OnInit {

  quote: Quote;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quote = new Quote('', '');
  }
  
  onSubmit(){
    this.quoteService.save(this.quote).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    });
  }
}