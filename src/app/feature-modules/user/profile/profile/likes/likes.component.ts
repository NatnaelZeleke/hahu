import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../../api/models/account.model';
import {IPost} from '../../../../../api/models/post.model';
import {AccService} from '../../../../../services/acc.service';
import {PostService} from '../../../../../api/services/post.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {LikesService} from '../../../../../api/services/likes.service';
import {ILikes} from '../../../../../api/models/likes.model';

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

  constructor(public accService: AccService,
              public likeService: LikesService,
              public ngxSpinner: NgxSpinnerService,
              public postService: PostService) {
  }

  ngOnInit() {
    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getUserLikes(this.account.id);
      });
  }

  getUserLikes(userId: number) {
    this.ngxSpinner.show('loadingLikes');
    this.likeService.query()
      .subscribe(result => {
        this.loaded = true;
        console.log(result);
        this.likes = result.body;
        this.ngxSpinner.hide('loadingLikes');
        this.getLikePosts();
      });
  }


  getLikePosts() {
    if (this.likes.length > 0) {
      for (let i = 0; i < this.likes.length; i++) {
        this.getPost(this.likes[i].postId);
      }
    }
  }

  getPost(postId: number) {
    this.postService.find(postId)
      .subscribe(result => {
        this.posts.push(result.body);
      });
  }


}
