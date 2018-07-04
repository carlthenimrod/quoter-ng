import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { QuoteService } from '@app/core/quote.service';
import { CommentService } from '@app/core/comment.service';
import { Quote, Comment } from '@app/models/quote';

@Component({
  selector: 'app-admin-quote',
  templateUrl: './admin-quote.component.html',
  styleUrls: ['./admin-quote.component.scss']
})
export class AdminQuoteComponent implements OnInit {

  quote: Quote;
  comment: Comment;
  latestUserComment: Comment;
  latestAdminComment: Comment;
  latestComment: string;

  constructor(
    private route: ActivatedRoute,
    private quoteService: QuoteService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.quoteService.get(params['id']).subscribe((quote: Quote) => {

        //remove latest comments
        quote.comments = this.removeLatestComments(quote.comments);

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

    //find who made the latest comment
    if (this.latestAdminComment && this.latestUserComment) {
      const adminCommentDate = new Date(this.latestAdminComment.updatedAt);
      const userCommentDate = new Date(this.latestUserComment.updatedAt);

      this.latestComment = (adminCommentDate > userCommentDate) ? 'admin' : 'user';
    }
    else if (this.latestAdminComment) this.latestComment = 'admin';
    else if (this.latestUserComment) this.latestComment = 'user';

    return filteredComments;
  }

  onSubmit() {

    //add comment
    this.commentService.add(this.quote._id, this.comment).subscribe((quote: Quote) => {

      //remove latest comments
      quote.comments = this.removeLatestComments(quote.comments);

      //store quote
      this.quote = quote;
    },
    e => {
      console.log(e);
    });
  }
}