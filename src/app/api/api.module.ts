/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AccountResourceService } from './services/account-resource.service';
import { AlbumResourceService } from './services/album-resource.service';
import { UserJwtControllerService } from './services/user-jwt-controller.service';
import { CategoryResourceService } from './services/category-resource.service';
import { CommentResourceService } from './services/comment-resource.service';
import { ImageMetaDataResourceService } from './services/image-meta-data-resource.service';
import { ImageResourceService } from './services/image-resource.service';
import { LikesResourceService } from './services/likes-resource.service';
import { NotificationMetaDataResourceService } from './services/notification-meta-data-resource.service';
import { NotificationResourceService } from './services/notification-resource.service';
import { PostMetaDataResourceService } from './services/post-meta-data-resource.service';
import { PostResourceService } from './services/post-resource.service';
import { ProfileResourceService } from './services/profile-resource.service';
import { ScheduleTypeResourceService } from './services/schedule-type-resource.service';
import { ScheduleResourceService } from './services/schedule-resource.service';
import { SchoolProgressResourceService } from './services/school-progress-resource.service';
import { SchoolResourceService } from './services/school-resource.service';
import { TagResourceService } from './services/tag-resource.service';
import { UserGroupResourceService } from './services/user-group-resource.service';
import { UserResourceService } from './services/user-resource.service';
import { UsersConnectionResourceService } from './services/users-connection-resource.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AccountResourceService,
    AlbumResourceService,
    UserJwtControllerService,
    CategoryResourceService,
    CommentResourceService,
    ImageMetaDataResourceService,
    ImageResourceService,
    LikesResourceService,
    NotificationMetaDataResourceService,
    NotificationResourceService,
    PostMetaDataResourceService,
    PostResourceService,
    ProfileResourceService,
    ScheduleTypeResourceService,
    ScheduleResourceService,
    SchoolProgressResourceService,
    SchoolResourceService,
    TagResourceService,
    UserGroupResourceService,
    UserResourceService,
    UsersConnectionResourceService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
