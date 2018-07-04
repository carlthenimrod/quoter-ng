import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommentComponent
  ],
  declarations: [
    CommentComponent
  ]
})
export class SharedModule { }
