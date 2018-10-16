import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CommentService } from '@app/core/comment.service';
import { Comment } from '@app/models/quote';
import { QuoteService } from '@app/core/quote.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  @Input() quoteId: string;
  @Input() comment: Comment;
  @Output() saved: EventEmitter<Comment> = new EventEmitter();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private commentService: CommentService,
    private quoteService: QuoteService
  ) { }

  onCancel() {
    this.cancel.emit(true);
  }

  onSubmit() {
    // check if we have an _id
    if (this.comment._id) {
      this.commentService.update(this.quoteId, this.comment).subscribe((comment: Comment) => {
        this.saved.emit(comment);
        this.quoteService.updatePending();
      },
      e => {
        console.log(e);
      });
    } else { // new comment
      this.commentService.add(this.quoteId, this.comment).subscribe((comment: Comment) => {
        this.saved.emit(comment);
        this.quoteService.updatePending();
      },
      e => {
        console.log(e);
      });
    }
  }
}
