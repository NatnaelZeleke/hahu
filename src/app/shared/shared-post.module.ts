import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from '../feature-modules/user/home-con/home-page/post/post.component';
import {SharedModule} from './shared.module';
import {SharedPostRoutingModule} from './shared-post-routing.module';
import {MagContainerComponent} from '../feature-modules/user/home-con/home-page/mag-container/mag-container.component';
import {SaveModalComponent} from '../feature-modules/user/home-con/home-page/save-modal/save-modal.component';
import {ShareModalComponent} from '../feature-modules/user/home-con/home-page/share-modal/share-modal.component';


@NgModule({
  declarations: [
    PostComponent,
    MagContainerComponent,
    SaveModalComponent,
    ShareModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedPostRoutingModule
  ], exports: [
    PostComponent,
    MagContainerComponent,
    SaveModalComponent,
    ShareModalComponent
  ], entryComponents: [
    MagContainerComponent,
    SaveModalComponent,
    ShareModalComponent
  ]
})
export class SharedPostModule {
}
