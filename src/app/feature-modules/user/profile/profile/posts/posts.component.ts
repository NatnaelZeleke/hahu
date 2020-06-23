import {Component, OnInit} from '@angular/core';
import {AccService} from '../../../../../services/acc.service';
import {Account} from '../../../../../api/models/account.model';
import {PostService} from '../../../../../api/services/post.service';
import {IPost} from '../../../../../api/models/post.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  account: Account;
  posts: IPost[] = [];
  loaded = false;

  constructor(public accService: AccService,
              public postService: PostService,
              public ngxSpinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getUserPosts(this.account.id);
      });
  }


  getUserPosts(userId: number) {
    this.ngxSpinner.show('loadingPosts');


    this.postService.query()
      .subscribe(result => {
        this.loaded = true;
        console.log(result);
        this.posts = result.body;
        this.ngxSpinner.hide('loadingPosts');
      });
  }

}
