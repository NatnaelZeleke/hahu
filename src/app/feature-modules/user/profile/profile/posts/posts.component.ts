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
  postList: IPost[] = [];
  loaded = false;

  constructor(public accService: AccService,
              public postService: PostService,
              public ngxSpinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.loadPost();
      });
  }

  loadPost() {
    if (this.account) {
      this.ngxSpinner.show('loadingPosts');
      this.postService.query({'userId.equals': this.account.id})
        .subscribe(result => {
          this.loaded = true;
          this.postList.push(...result.body);
          this.ngxSpinner.hide('loadingPosts');
        });
    }

  }

}
