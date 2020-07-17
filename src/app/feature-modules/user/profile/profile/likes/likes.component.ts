import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../../api/models/account.model';
import {IPost} from '../../../../../api/models/post.model';
import {AccService} from '../../../../../services/acc.service';
import {PostService} from '../../../../../api/services/post.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {LikesService} from '../../../../../api/services/likes.service';
import {ILikes} from '../../../../../api/models/likes.model';
import {ActivatedRoute} from '@angular/router';
import {PTabService} from '../../../../../services/p-tab.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  account: Account;
  likes: ILikes[] = [];
  loaded = false;
  posts: IPost[] = [];
  userId = 0;
  queryId = 0;

  constructor(public accService: AccService,
              public likeService: LikesService,
              public ngxSpinner: NgxSpinnerService,
              public postService: PostService,
              private route: ActivatedRoute,
              public pTabService: PTabService) {
  }

  ngOnInit() {
    this.pTabService.changeTab(2);
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });

    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        if (this.userId > 0 && this.userId != this.account.id) {
          this.queryId = this.userId;
        } else {
          this.queryId = this.account.id;
        }
        this.getUserLikes();
      });
  }

  getUserLikes() {
    this.ngxSpinner.show('loadingLikes');
    this.likeService.query({
      'postId.specified': true,
      'userId.equals': this.queryId
    })
      .subscribe(result => {
        // this.loaded = true;
        console.log(result);
        this.likes = result.body;
        this.getLikePosts();
      });
  }


  getLikePosts() {
    if (this.likes.length > 0) {
      for (let i = 0; i < this.likes.length; i++) {
        this.getPost(this.likes[i].postId);
      }
    } else {
      this.ngxSpinner.hide('loadingLikes');
      this.loaded = true;
    }
  }

  getPost(postId: number) {
    this.postService.find(postId)
      .subscribe(result => {
        this.posts.push(result.body);
        this.loaded = true;
        this.ngxSpinner.hide('loadingLikes');
      });
  }


}
