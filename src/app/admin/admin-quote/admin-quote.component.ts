import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { QuoteService } from '@app/core/quote.service';
import { Quote, Comment } from '@app/models/quote';
import { commentPopTrigger } from './animations';

@Component({
  selector: 'app-admin-quote',
  templateUrl: './admin-quote.component.html',
  styleUrls: ['./admin-quote.component.scss'],
  animations: [commentPopTrigger]
})
export class AdminQuoteComponent implements OnInit {

  quote: Quote;
  comments: Comment[];
  comment: Comment;
  latestUserComment: Comment;
  latestAdminComment: Comment;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.quoteService.get(params['id']).subscribe((quote: Quote) => {

        //remove latest comments
        this.comments = this.removeLatestComments(quote.comments);

        //store quote
        this.quote = quote;

        //create new comment, set admin flag to true
        this.comment = new Comment('', true);
      });
    },
    e => {
      console.log(e);
    });
  }

  removeLatestComments(comments: Comment[]): Comment[] {

    let foundUserComment: boolean = false;
    let foundAdminComment: boolean = false;
    let filteredComments: Comment[];

    filteredComments = comments.filter(comment => {

      //only get admin comment if no user comment is present
      if (comment.admin && !foundAdminComment && !foundUserComment) {
        this.latestAdminComment = comment;
        foundAdminComment = true;
      } else if (!foundUserComment && !comment.admin) {
        this.latestUserComment = comment;
        foundUserComment = true;
      } else return comment;
    });

    //remove old values if nothing found
    if (!foundUserComment) this.latestUserComment = undefined;
    if (!foundAdminComment) this.latestAdminComment = undefined;

    return filteredComments;
  }

  onDelete(commentId: String) {
    //get index
    const index = this.quote.comments.findIndex(comment => comment._id === commentId);

    //remove from array
    this.quote.comments.splice(index, 1);

    //remove latest comments
    this.comments = this.removeLatestComments(this.quote.comments);
  }
}