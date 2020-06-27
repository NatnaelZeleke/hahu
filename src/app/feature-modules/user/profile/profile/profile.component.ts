import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../../../api/services/profile.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {IProfile} from '../../../../api/models/profile.model';
import {UserService} from '../../../../api/services/user.service';
import {IUser} from '../../../../api/models/user.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {AlbumService} from '../../../../api/services/album.service';
import {IAlbum} from '../../../../api/models/album.model';
import {ActivatedRoute} from '@angular/router';
import {UsersConnectionService} from '../../../../api/services/users-connection.service';
import {IUsersConnection} from '../../../../api/models/users-connection.model';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  account: Account;
  profile: IProfile;
  user: IUser;
  album: IAlbum[] = [];
  currentClass = 1;
  userId = 0;
  visitingProfile = false;
  isUserFollowing = false;
  loaded = false;
  loadingFollowingStatus = false;
  connection: IUsersConnection;

  constructor(public profileService: ProfileService,
              public accountService: AccService,
              public userService: UserService,
              public ngxSpinner: NgxSpinnerService,
              private route: ActivatedRoute,
              private userConnection: UsersConnectionService) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      if (params['reload'] != null) {
        this.loadProfile();
      }
    });
    this.loadProfile();
  }

  loadProfile() {
    this.resetProfile();
    this.ngxSpinner.show('loadingProfilePic');
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        if (this.userId > 0 && this.userId != this.account.id) {

          this.visitingProfile = true;
          this.getUserProfile(this.userId);
          this.isFollowing();
        } else {
          this.getUserProfile(this.account.id);
          this.loaded = true;
        }
      });
  }

  isFollowing() {
    this.userConnection.query({
      'followerId.equals': this.account.id,
      'followingId.equals': this.userId,
    }).subscribe(result => {
      if (result.body.length > 0) {
        this.isUserFollowing = true;
        this.connection = result.body[0];
      }
      this.loaded = true;
    });
  }

  getUserProfile(userId: number) {
    this.profileService.query({'userId.equals': userId})
      .subscribe(result => {
        this.profile = result.body[0];
        this.getUserAccount(this.profile.userLogin);
        this.ngxSpinner.hide('loadingProfilePic');
      }, () => {
        this.ngxSpinner.hide('loadingProfilePic');
      });
  }

  followUser() {
    this.ngxSpinner.show('followSpinner');
    this.loadingFollowingStatus = true;

    if (!this.isUserFollowing) {
      const conn: IUsersConnection = {
        followerId: this.account.id,
        followingId: this.userId,
        registeredTime: moment().startOf('second')
      };

      this.userConnection.create(conn)
        .subscribe(result => {
          this.ngxSpinner.hide('followSpinner');
          this.loadingFollowingStatus = false;
          this.isUserFollowing = true;
          this.connection = result.body;
        }, () => {
          this.ngxSpinner.hide('followSpinner');
          this.loadingFollowingStatus = false;
        }, () => {

        });
    } else {
      this.userConnection.delete(this.connection.id)
        .subscribe(result => {
          this.ngxSpinner.hide('followSpinner');
          this.loadingFollowingStatus = false;
          this.isUserFollowing = false;

        }, () => {
          this.ngxSpinner.hide('followSpinner');
          this.loadingFollowingStatus = false;
        });
    }


  }


  getUserAccount(userLogin: string) {
    this.userService.find(userLogin)
      .subscribe(result => {
        this.user = result;
      });
  }

  isActive(idx: number) {
    if (this.currentClass == idx) {
      return true;
    }
    return false;
  }

  resetProfile() {
    this.profile = null;
    this.user = null;
    this.currentClass = 1;
    this.visitingProfile = false;
    this.isUserFollowing = false;
    this.loaded = false;
    this.loadingFollowingStatus = false;
    this.connection = null;
  }

  changeTab(number: number) {
    this.currentClass = number;
  }
}
