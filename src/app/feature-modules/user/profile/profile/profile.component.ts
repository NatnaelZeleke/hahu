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
import {ActivatedRoute, Router} from '@angular/router';
import {UsersConnectionService} from '../../../../api/services/users-connection.service';
import {IUsersConnection} from '../../../../api/models/users-connection.model';
import * as moment from 'moment';
import {PTabService} from '../../../../services/p-tab.service';
import {PreferenceService} from '../../../../api/services/preference.service';
import {IPreference} from '../../../../api/models/preference.model';
import {Observable} from 'rxjs';
import {ProfileRSService} from '../../../../services/profile-rs.service';
import {ImageService} from '../../../../api/services/background-image.service';
import {IImage} from '../../../../api/models/image.model';

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
  currentClass = 0;
  userId = 0;
  visitingProfile = false;
  isUserFollowing = false;
  loaded = false;
  loadingFollowingStatus = false;
  loadingBlockedStatus = false;
  connection: IUsersConnection;
  preference: IPreference;
  isUserBlocked = false;
  backgroundImage: IImage  = new class implements IImage {
    albumId: number;
    id: number;
    image: any;
    imageContentType: string;
  };

  SWIPE_ACTION = {LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown'};
  currentIndex = 0;

  constructor(public profileService: ProfileService,
              public accountService: AccService,
              public userService: UserService,
              public ngxSpinner: NgxSpinnerService,
              private route: ActivatedRoute,
              private userConnection: UsersConnectionService,
              public pTabService: PTabService,
              public preferenceService: PreferenceService,
              public profileRS: ProfileRSService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private imageService: ImageService) {

  }

  ngOnInit() {
    // this.tabController();
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      if (params['reload'] != null) {
        this.loadProfile();
      }
    });
    this.loadProfile();
    // this.getCurrentBackgroundImage();
  }

  // tabController() {
  //   this.pTabService.selectedSubject
  //     .subscribe(result => {
  //       if (result != 0) {
  //         this.currentClass = result;
  //       } else {
  //         this.currentClass = 1;
  //       }
  //     });
  // }

  loadProfile() {
    this.resetProfile();
    this.ngxSpinner.show('loadingProfilePic');
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        if (this.userId > 0 && this.userId != this.account.id) {
          this.visitingProfile = true;
          this.getUserProfile(this.userId);
          this.checkBlockedStatus(this.userId);
          this.getPreference(this.account.id);
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
    this.currentClass = 0;
    this.visitingProfile = false;
    this.isUserFollowing = false;
    this.loaded = false;
    this.loadingFollowingStatus = false;
    this.connection = null;
  }

  blockUser() {
    this.preference.blockedUsers.push(this.user);
    this.preferenceService.update(this.preference)
      .subscribe(result => {
        if (result != null) {
          this.isUserBlocked = true;
        }
      });
  }

  changeTab(number: number) {
    this.currentClass = number;
  }

  getPreference(userId: number) {
    this.preferenceService.query({
      'userId.equals': userId
    }).subscribe(result => {
      this.preference = result.body[0];
    });
  }

  checkBlockedStatus(userId: number) {
    this.preferenceService.checkIfUserBlocked(userId)
      .subscribe(result => {
        this.isUserBlocked = result.body;
      });
  }

  unblockUser() {
    this.loadingBlockedStatus = true;
    const idx = this.getBlockedUserIndex(this.user.id);
    this.preference.blockedUsers.splice(idx, 1);
    this.ngxSpinner.show('blockSpinner');
    this.preferenceService.update(this.preference)
      .subscribe(result => {
        this.ngxSpinner.hide('blockSpinner');
        this.isUserBlocked = false;
        this.loadingBlockedStatus = false;
      });
  }

  getBlockedUserIndex(blockedUserId: number): number {
    for (let i = 0; i < this.preference.blockedUsers.length; i++) {
      if (blockedUserId == this.preference.blockedUsers[i].id) {
        return i;
      }
    }
  }

  routeToComponent() {
    if (this.currentIndex == 0) {
      this.currentClass = 0;
      // this.profileRS.changeSelected(0);
      this.router.navigate(['/user/user/profile/profile/posts'], {relativeTo: this.activatedRoute});
    } else if (this.currentIndex == 1) {
      this.currentClass = 1;
      // this.profileRS.changeSelected(1);
      this.router.navigate(['/user/user/profile/profile/likes'], {relativeTo: this.activatedRoute});
    } else if (this.currentIndex == 2) {
      this.currentClass = 2;
      // this.profileRS.changeSelected(2);
      this.router.navigate(['/user/user/profile/profile/following'], {relativeTo: this.activatedRoute});
    }
  }

  swipeCalled(action: string) {
    if (action === this.SWIPE_ACTION.RIGHT) {
      if (this.currentIndex == 0) {
        console.log('do nothing return');
        return;
      } else {
        this.currentIndex = this.currentIndex - 1;
        this.routeToComponent();
        console.log('right swipe');
      }
    } else if (action === this.SWIPE_ACTION.LEFT) {
      if (this.currentIndex == 2) {
        console.log('do nothing left swipe');
        return;
      } else {
        this.currentIndex = this.currentIndex + 1;
        this.routeToComponent();
        console.log('left swipe');
      }
    } else if (action === this.SWIPE_ACTION.UP) {
      return;
    } else if (action === this.SWIPE_ACTION.DOWN) {
      return;
    }
  }

  onFileInputChange(event: Event) {
    const eventTarget: HTMLInputElement = event.target as HTMLInputElement;
    const file: File = eventTarget.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.backgroundImage.image = (fileReader.result as string).substr((fileReader.result as string).indexOf('base64,') + 'base64,'.length);
    };
  }

  // getCurrentBackgroundImage() {
  //   this.imageService.find()
  //     .subscribe(result => {
  //       this.backgroundImage = result.body;
  //     });
  // }


}
