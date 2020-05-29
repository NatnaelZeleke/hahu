import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../../api/services/post.service';
import {IPost} from '../../../../api/models/post.model';
import {AccountService} from '../../../../api/services/account.service';
import {Account} from '../../../../api/models/account.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  postList: IPost[];
  account: Account;

  constructor(protected postService: PostService,
              protected accountService: AccountService) {
  }

  ngOnInit() {
    this.getUserAccount();
  }


  loadPost() {
    this.postService.query(
      {
        page: 0,
        size: 10
      }
    ).subscribe((result) => {
        this.postList = result.body;
      },
      (err) => {
        // TODO handle post scroll errors, things like connection and database errors
      });
  }

  getUserAccount() {
    this.accountService.getAccount()
      .subscribe(result => {
        this.account = result;
        this.loadPost();
      });
  }

}
