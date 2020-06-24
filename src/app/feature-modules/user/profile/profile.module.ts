import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile/profile.component';
import {ProfileSettingComponent} from './profile-setting/profile-setting.component';
import {SharedModule} from '../../../shared/shared.module';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {GeneralSettingComponent} from './general-setting/general-setting.component';
import {PagesComponent} from './pages/pages.component';
import {BlockedUsersComponent} from './blocked-users/blocked-users.component';
import {PostsComponent} from './profile/posts/posts.component';
import {LikesComponent} from './profile/likes/likes.component';
import {FollowingComponent} from './profile/following/following.component';
import {SharedPostModule} from '../../../shared/shared-post.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    SharedPostModule,
    InfiniteScrollModule
  ],
  declarations: [ProfileComponent,
    ProfileSettingComponent,
    EditProfileComponent,
    GeneralSettingComponent,
    PagesComponent,
    BlockedUsersComponent,
    PostsComponent,
    LikesComponent,
    FollowingComponent]
})
export class ProfileModule {
}
