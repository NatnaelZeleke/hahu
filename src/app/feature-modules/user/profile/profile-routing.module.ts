import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {ProfileSettingComponent} from './profile-setting/profile-setting.component';
import {GeneralSettingComponent} from './general-setting/general-setting.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
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
    path: 'editprofile',
    component: EditProfileComponent
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
