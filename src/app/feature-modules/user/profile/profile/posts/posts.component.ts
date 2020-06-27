import {Component, OnInit} from '@angular/core';
import {AccService} from '../../../../../services/acc.service';
import {Account} from '../../../../../api/models/account.model';
import {PostService} from '../../../../../api/services/post.service';
import {IPost} from '../../../../../api/models/post.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  account: Account;
  postList: IPost[] = [];
  loaded = false;

  userId = 0;
  queryId = 0;

  constructor(public accService: AccService,
              public postService: PostService,
              public ngxSpinner: NgxSpinnerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
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

        this.loadPost();
      });
  }

  loadPost() {
    if (this.account) {
      this.ngxSpinner.show('loadingPosts');
      this.postService.query({'userId.equals': this.queryId})
        .subscribe(result => {
          this.loaded = true;
          this.postList.push(...result.body);
          this.ngxSpinner.hide('loadingPosts');
        });
    }

  }

}
