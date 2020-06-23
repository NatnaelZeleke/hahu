import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import {SharedModule} from '../../../shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { PagesComponent } from './pages/pages.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [ProfileComponent, ProfileSettingComponent, EditProfileComponent, GeneralSettingComponent, PagesComponent, BlockedUsersComponent]
})
export class ProfileModule { }
