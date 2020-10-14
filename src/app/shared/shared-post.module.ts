import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from '../feature-modules/user/home-con/home-page/post/post.component';
import {SharedModule} from './shared.module';
import {SharedPostRoutingModule} from './shared-post-routing.module';


@NgModule({
  declarations: [
    PostComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedPostRoutingModule
  ], exports: [
    PostComponent
  ]
})
export class SharedPostModule {
}
