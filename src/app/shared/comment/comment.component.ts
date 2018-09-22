import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Comment } from '@app/models/quote';
import { CommentService } from '@app/core/comment.service';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  @Input() quoteId: String;
  @Input() me: boolean;
  @Input() editable = false;
  @Input() removable = false;
  @Output() saved: EventEmitter<Comment> = new EventEmitter();
  @Output() delete: EventEmitter<String> = new EventEmitter();

  editing = false;

  constructor(private commentService: CommentService) { }

  ngOnInit() { }

  onEdit($event) {
    $event.preventDefault();

    if (this.editable && !this.editing) {
      this.editing = true;
    }
  }

  onSave(comment: Comment) {
    this.saved.emit(comment);

    this.editing = false;
  }

  onDelete($event) {
    $event.preventDefault();

    this.commentService.remove(this.quoteId, this.comment._id).subscribe(success => {
      this.delete.emit(this.comment._id);
    }, e => console.log(e));
  }

  onCancel() {
    this.editing = false;
  }
}
