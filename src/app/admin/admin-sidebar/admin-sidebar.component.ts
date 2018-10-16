import { Component, OnInit } from '@angular/core';
import { QuoteService } from '@app/core/quote.service';
import { Quote } from '@app/models/quote';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  pending: number;

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.quoteService.pending.subscribe((pending: number) => {
      this.pending = pending;
    });
  }

}
