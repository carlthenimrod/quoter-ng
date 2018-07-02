import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { QuoteService } from '@app/core/quote.service';
import { Quote, Comment } from '@app/models/quote';

@Component({
  selector: 'app-admin-quote',
  templateUrl: './admin-quote.component.html',
  styleUrls: ['./admin-quote.component.scss']
})
export class AdminQuoteComponent implements OnInit {

  quote: Quote;
  comment: Comment;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.quoteService.get(params['id']).subscribe((quote: Quote) => {
        this.quote = quote;

        //create new comment, set admin flag to true
        this.comment = new Comment('', true);
      });
    },
    e => {
      console.log(e);
    });
  }

  onSubmit() {

    //add new comment to quote
    this.quote.comments.push(this.comment);

    //update quote
    this.quoteService.update(this.quote).subscribe((quote: Quote) => {
      console.log(this.quote);
    },
    e => {
      console.log(e);
    });
  }
}