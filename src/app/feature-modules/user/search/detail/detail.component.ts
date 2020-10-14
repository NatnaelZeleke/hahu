import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../../api/models/post.model';
import {Account} from '../../../../api/models/account.model';
import {IProfile} from '../../../../api/models/profile.model';
import {ILikes} from '../../../../api/models/likes.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment, IComment} from '../../../../api/models/comment.model';
import {IUser} from '../../../../api/models/user.model';
import {IPreference} from '../../../../api/models/preference.model';
import {ProfileService} from '../../../../api/services/profile.service';
import {LikesService} from '../../../../api/services/likes.service';
import {CommentService} from '../../../../api/services/comment.service';
import {UserService} from '../../../../api/services/user.service';
import {PreferenceService} from '../../../../api/services/preference.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import {SaveModalComponent} from '../../home-con/home-page/save-modal/save-modal.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post: IPost;
  account: Account;
  profile: IProfile[] = [];
  isLiked = false;
  likeObject: ILikes;
  likeCount = 0;
  commentCount = 0;
  isCommentShown = false;
  commentForm: FormGroup;
  comments: IComment[] = [];
  isCommentLoaded = false;
  commentPlaceHolder = '';
  user: IUser;
  showTags = false;
  preference: IPreference;

  constructor(public postService: ProfileService,
              public likeService: LikesService,
              public commentService: CommentService,
              public formBuilder: FormBuilder,
              public userService: UserService,
              public preferenceService: PreferenceService,
              public modalService: BsModalService,
              public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
    this.getCommentCount();
    this.isPostLiked();
    this.loadProfilePicture();
    this.getLikeCount();
    this.commentForm = this.formBuilder.group(
      {
        comment: ['', Validators.required]
      }
    );
    this.getPreference(this.account.id);

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
          this.getUserAccount(this.profile[0].userLogin);
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
      this.likeCount = this.likeCount + 1;
      const like: ILikes = {
        postId: this.post.id,
        userLogin: this.account.login,
        userId: this.account.id,
        registeredTime: moment().startOf('second')
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
      this.likeCount = this.likeCount - 1;
      this.likeObject = null;
      this.isLiked = false;
    }
  }

  getLikeCount() {
    this.likeService.queryCount({
      page: 0,
      size: 1,
      'postId.equals': this.post.id
    }).subscribe(result => {
      this.likeCount = result.body;
    });
  }

  getCommentCount() {
    this.commentService.queryCount({
      page: 0,
      size: 1,
      'postId.equals': this.post.id

    }).subscribe(result => {
      this.commentCount = result.body;
    });
  }

  toggleComment() {
    this.isCommentShown = !this.isCommentShown;
    if (!this.isCommentLoaded) {
      this.isCommentLoaded = true;
      this.getCommentList();
    }
  }

  postComment() {
    if (this.commentForm.valid) {
      const com: Comment = {
        content: this.commentForm.value.comment,
        postId: this.post.id,
        userLogin: this.account.login,
        postedDate: moment().startOf('second'),
        userId: this.account.id
      };
      this.commentPlaceHolder = this.commentForm.value.comment;

      this.commentCount = this.comments.length + 1;
      this.commentService.create(com)
        .subscribe(result => {
          // if(result)
          this.comments.splice(0, 0, result.body);
          this.commentForm.reset();
        });
    }
  }

  getCommentList() {
    this.commentService.query({
      page: 0,
      'postId.equals': this.post.id,
      'sort': ['postedDate,desc']
    }).subscribe(result => {
      this.comments = result.body;
    });
  }

  getUserAccount(userLogin: string) {
    this.userService.find(userLogin)
      .subscribe(result => {
        this.user = result;
      });
  }

  get f() {
    return this.commentForm.controls;
  }

  removeComment(idx: any) {
    this.comments.splice(idx, 1);
    if (this.commentCount > 0) {
      this.commentCount = this.commentCount - 1;
    }
  }

  toggleTags() {
    this.showTags = !this.showTags;
  }

  getPreference(userId: number) {
    this.preferenceService.find(userId)
      .subscribe(result => {
        this.preference = result.body;
        console.log(this.preference);
      });
  }

  savePost() {
    this.preference.savedPosts.push(this.post);
    this.preferenceService.update(this.preference)
      .subscribe(result => {
        console.log('saved');
      });
  }

  save() {
    this.preference.savedPosts.push(this.post);
    const initialState = {
      title: 'Save Post',
      message: '',
      content: this.preference
    };
    this.modalService.show(SaveModalComponent, {initialState});
  }

}
