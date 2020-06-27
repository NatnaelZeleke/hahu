import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from '../feature-modules/user/home-con/home-page/post/post.component';
import {CommentComponent} from '../feature-modules/user/home-con/home-page/comment/comment.component';
import {SharedModule} from './shared.module';
import {SharedPostRoutingModule} from './shared-post-routing.module';


@NgModule({
  declarations: [
    PostComponent,
    CommentComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedPostRoutingModule
  ], exports: [
    PostComponent,
    CommentComponent
  ]
})
export class SharedPostModule {
}
