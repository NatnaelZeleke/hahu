import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {ProfileSettingComponent} from './profile-setting/profile-setting.component';
import {GeneralSettingComponent} from './general-setting/general-setting.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {PostsComponent} from './profile/posts/posts.component';
import {LikesComponent} from './profile/likes/likes.component';
import {FollowingComponent} from './profile/following/following.component';
import {BlockedUsersComponent} from './blocked-users/blocked-users.component';
import {PagesSettingComponent} from './pages-setting/pages-setting.component';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'posts',
        component: PostsComponent
      }, {
        path: 'likes',
        component: LikesComponent
      }, {
        path: 'following',
        component: FollowingComponent
      }, {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'profilesetting',
    component: ProfileSettingComponent
  },
  {
    path: 'generalsetting',
    component: GeneralSettingComponent
  },
  {
    path: 'blockedusers',
    component: BlockedUsersComponent
  },
  {
    path: 'editprofile',
    component: EditProfileComponent
  },
  {
    path: 'pagesetting',
    component: PagesSettingComponent
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
