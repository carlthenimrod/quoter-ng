import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
