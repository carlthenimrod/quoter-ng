import { Component, OnInit } from '@angular/core';

import { QuoteService } from '@app/core/quote.service';
import { Quote } from '@app/models/quote';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  quotes: Quote[];

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.quoteService.all().subscribe((quotes: Quote[]) => {
      this.quotes = quotes;
    });
  }
}