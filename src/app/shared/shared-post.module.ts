import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from '../feature-modules/user/home-con/home-page/post/post.component';
import {SharedModule} from './shared.module';
import {SharedPostRoutingModule} from './shared-post-routing.module';
import {MagContainerComponent} from '../feature-modules/user/home-con/home-page/mag-container/mag-container.component';


@NgModule({
  declarations: [
    PostComponent,
    MagContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedPostRoutingModule
  ], exports: [
    PostComponent,
    MagContainerComponent
  ], entryComponents: [

    MagContainerComponent,
  ]
})
export class SharedPostModule {
}
