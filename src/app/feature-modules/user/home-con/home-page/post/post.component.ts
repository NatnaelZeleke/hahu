import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../../../api/models/post.model';
import {ProfileService} from '../../../../../api/services/profile.service';
import {IProfile} from '../../../../../api/models/profile.model';
import {Account} from '../../../../../api/models/account.model';
import {LikesService} from '../../../../../api/services/likes.service';
import {ILikes} from '../../../../../api/models/likes.model';
import {CommentService} from '../../../../../api/services/comment.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment, IComment} from '../../../../../api/models/comment.model';


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
  likeCount = 0;
  commentCount = 0;
  isCommentShown = false;
  commentForm: FormGroup;
  comments: IComment[] = [];
  isCommentLoaded = false;

  constructor(public postService: ProfileService,
              public likeService: LikesService,
              public commentService: CommentService,
              public formBuilder: FormBuilder) {
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

  // comment control section

  postComment() {
    if (this.commentForm.valid) {
      const com: Comment = {
        content: this.commentForm.value.comment,
        postId: this.post.id,
        userLogin: this.account.login
      };
      this.commentService.create(com)
        .subscribe(result => {
          // if(result)
        });
    }

  }

  getCommentList() {
    this.commentService.query({
      page: 0,
      size: 1,
      'postId.equals': this.post.id
    }).subscribe(result => {
      this.comments = result.body;
    });
  }

  get f() {
    return this.commentForm.controls;
  }

}
