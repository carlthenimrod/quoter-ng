import { Component, Input } from '@angular/core';

import { Comment } from '@app/models/quote';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comment: Comment;
  @Input() me: boolean;
}