import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from '../feature-modules/user/home-con/home-page/post/post.component';
import {CommentComponent} from '../feature-modules/user/home-con/home-page/comment/comment.component';
import {SharedModule} from './shared.module';


@NgModule({
  declarations: [
    PostComponent,
    CommentComponent],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    PostComponent,
    CommentComponent
  ]
})
export class SharedPostModule {
}
