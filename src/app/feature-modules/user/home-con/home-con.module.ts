import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeConRoutingModule} from './home-con-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {HomePageComponent} from './home-page/home-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SchoolfeedComponent} from './schoolfeed/schoolfeed.component';
import {SavesComponent} from './saves/saves.component';
import {PostComponent} from './home-page/post/post.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { CommentComponent } from './home-page/comment/comment.component';
import { ContentComponent } from './home-page/content/content.component';
import { TagsComponent } from './home-page/content/tags/tags.component';

@NgModule({
  imports: [
    CommonModule,
    HomeConRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ],
  declarations: [HomePageComponent,
      DashboardComponent,
      SchoolfeedComponent,
      SavesComponent,
      PostComponent,
      CommentComponent,
      ContentComponent,
      TagsComponent]
})
export class HomeConModule {
}
