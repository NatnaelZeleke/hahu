import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../../../api/models/post.model';
import {ProfileService} from '../../../../../api/services/profile.service';
import {IProfile} from '../../../../../api/models/profile.model';
import {Account} from '../../../../../api/models/account.model';
import {LikesService} from '../../../../../api/services/likes.service';
import {ILikes} from '../../../../../api/models/likes.model';

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
  likeObject: ILikes;

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
        this.likeObject = result.body[0];
      }
    });
  }

  like() {
    if (!this.isLiked) {
      this.isLiked = true;
      // create like
      // change status
      const like: ILikes = {
        postId: this.post.id,
        userLogin: this.account.login
      };
      this.likeService.create(like)
        .subscribe(result => {
          if (result.body != null) {

            this.likeObject = result.body;
          }
        });

    } else {
      this.likeService.delete(this.likeObject.id)
        .subscribe(result => {

        });
      // delete like
      // change status
      this.likeObject = null;
      this.isLiked = false;

    }
  }


}
