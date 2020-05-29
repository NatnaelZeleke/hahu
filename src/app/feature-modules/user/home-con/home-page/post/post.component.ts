import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../../../api/models/post.model';
import {ProfileService} from '../../../../../api/services/profile.service';
import {IProfile} from '../../../../../api/models/profile.model';
import {Account} from '../../../../../api/models/account.model';
import {LikesService} from '../../../../../api/services/likes.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: IPost;
  @Input() account: Account;
  profile: IProfile[] = [];
  isLiked = false;
  constructor(public postService: ProfileService,
              public likeService: LikesService) {
  }

  ngOnInit() {
    this.isPostLiked();
    this.loadProfilePicture();
  }


  loadProfilePicture() {
    this.postService.query({
      page: 0,
      size: 1,
      'userId.equals': this.post.userId
    })
      .subscribe(
        (response) => {
          this.profile = response.body;
        },
        () => {
        }
      );
  }


  isPostLiked() {
    this.likeService.query({
      page: 0,
      size: 1,
      'postId.equals': this.post.id,
      'userLogin.equals': this.account.login
    }).subscribe(result => {
        if (result.body.length > 0) {
            this.isLiked = true;
        }
    });
  }


}
