import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SchoolFeedComponent } from './school-feed/school-feed.component';
import { SavedComponent } from './saved/saved.component';
import {SharedModule} from '../../shared/shared.module';
import { PostComponent } from './post/post/post.component';
import { CommentComponent } from './post/comment/comment.component';
import { PostModalComponent } from './post/post-modal/post-modal.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [UserComponent, HomePageComponent, SchoolFeedComponent, SavedComponent, PostComponent, CommentComponent, PostModalComponent]
})
export class UserModule { }
