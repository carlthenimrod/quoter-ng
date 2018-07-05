import { Component, Input, OnInit } from '@angular/core';

import { Comment } from '@app/models/quote';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  @Input() me: boolean;
  @Input() size: string;
  @Input() editable: boolean = false;
  @Input() removable: boolean = false;

  ngOnInit() {
    switch (this.size) {
      case 'sm':
        this.size = '1rem';
        break;

      case 'lg':
        this.size = '1.4rem';
        break;

      default:
        this.size = '1.2rem'
    }
  }
}