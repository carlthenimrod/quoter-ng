import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommentComponent,
    CommentFormComponent
  ],
  declarations: [
    CommentComponent,
    CommentFormComponent
  ]
})
export class SharedModule { }
