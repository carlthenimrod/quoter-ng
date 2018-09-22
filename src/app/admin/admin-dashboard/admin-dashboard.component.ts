import { Component, OnInit } from '@angular/core';

import { QuoteService } from '@app/core/quote.service';
import { Quote } from '@app/models/quote';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

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
