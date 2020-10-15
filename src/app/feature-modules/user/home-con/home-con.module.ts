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
import {ContentComponent} from './home-page/content/content.component';
import {TagsComponent} from './home-page/content/tags/tags.component';
import {SharedPostModule} from '../../../shared/shared-post.module';
import {MagComponent} from './home-page/mag/mag.component';
import {PostAltComponent} from './post-alt/post-alt.component';
import {SaveModalComponent} from './home-page/save-modal/save-modal.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  imports: [
    CommonModule,
    HomeConRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    SharedPostModule
  ],
  declarations: [
    HomePageComponent,
    DashboardComponent,
    SchoolfeedComponent,
    SavesComponent,
    ContentComponent,
    TagsComponent,
    MagComponent,
    PostAltComponent,
    SaveModalComponent,
    StoryComponent],
  entryComponents: [SaveModalComponent]
})
export class HomeConModule {
}
