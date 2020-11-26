import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../../../api/models/post.model';
import {UserService} from '../../../../../api/services/user.service';
import {ProfileService} from '../../../../../api/services/profile.service';
import {IProfile} from '../../../../../api/models/profile.model';
import {IUser} from '../../../../../api/models/user.model';
import {UsersConnectionService} from '../../../../../api/services/users-connection.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {IUsersConnection} from '../../../../../api/models/users-connection.model';
import * as moment from 'moment';
import {Account} from '../../../../../api/models/account.model';

@Component({
  selector: 'app-recom',
  templateUrl: './recom.component.html',
  styleUrls: ['./recom.component.css']
})
export class RecomComponent implements OnInit {

  @Input() post: IPost;
  @Input() account: Account;
  @Input() count: number;
  connection: IUsersConnection;
  user: IUser;
  isUserFollowing = false;
  name = '';


  constructor(public profileService: ProfileService,
              public userService: UserService,
              public userConnection: UsersConnectionService,
              public ngxSpinner: NgxSpinnerService) {
  }

  ngOnInit() {

    this.getUserProfile();
    this.name = 'recomFollowSpinner' + this.count;

  }


  getUserProfile() {
    this.userService.find(this.post.userLogin)
      .subscribe(result => {
        this.user = result;
      });
  }

  follow(action: boolean) {

    this.ngxSpinner.show(this.name);
    if (action) {
      const conn: IUsersConnection = {
        followerId: this.account.id,
        followingId: this.post.userId,
        registeredTime: moment().startOf('second')
      };

      this.userConnection.create(conn)
        .subscribe(result => {
          this.ngxSpinner.hide(this.name);
          this.connection = result.body;
          this.isUserFollowing = true;
        });
    } else {
      this.userConnection.delete(this.connection.id)
        .subscribe(result => {
          this.ngxSpinner.hide(this.name);
          this.isUserFollowing = false;
        });
    }

  }
}
