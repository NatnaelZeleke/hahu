import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../../api/models/account.model';
import {IPost} from '../../../../../api/models/post.model';
import {AccService} from '../../../../../services/acc.service';
import {PostService} from '../../../../../api/services/post.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {UsersConnectionService} from '../../../../../api/services/users-connection.service';
import {IUsersConnection} from '../../../../../api/models/users-connection.model';
import {ProfileService} from '../../../../../api/services/profile.service';
import {IProfile} from '../../../../../api/models/profile.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  account: Account;
  posts: IPost[] = [];
  connection: IUsersConnection[] = [];
  loaded = false;
  profiles: IProfile[] = [];
  userId = 0;
  queryId = 0;
  parentId = 0;

  constructor(public accService: AccService,
              public postService: PostService,
              public ngxSpinner: NgxSpinnerService,
              public userConnectionService: UsersConnectionService,
              public profileService: ProfileService,
              private route: ActivatedRoute,
              private router: Router) {
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
        this.getFollowing();
      });
  }

  navigateProfile(userId: number) {
    this.router.navigate(
      ['../profile/profile'],
      {queryParams: {userId: userId}}
      );
  }

  getFollowing() {
    this.ngxSpinner.show('loadingFollowing');
    this.userConnectionService.query({'followingId.equals': this.queryId})
      .subscribe(result => {
        this.loaded = true;
        console.log(result);
        this.connection = result.body;
        this.ngxSpinner.hide('loadingFollowing');
        this.getConnectionProfile();
      });
  }


  getConnectionProfile() {
    for (let i = 0; i < this.connection.length; i++) {
      this.getProfile(this.connection[i].followerId);
    }
  }

  getProfile(userId: number) {
    this.profileService.find(userId)
      .subscribe(result => {
        this.profiles.push(result.body);
      });
  }


}
