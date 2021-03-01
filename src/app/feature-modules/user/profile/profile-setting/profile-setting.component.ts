import {Component, OnInit} from '@angular/core';
import {AccService} from '../../../../services/acc.service';
import {ProfileService} from '../../../../api/services/profile.service';
import {IProfile} from '../../../../api/models/profile.model';
import {Account} from '../../../../api/models/account.model';
import {UserService} from '../../../../api/services/user.service';
import {IUser} from '../../../../api/models/user.model';
import {AuthenticationService} from '../../../../auth/authentication.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent implements OnInit {

  account: Account;
  profile: IProfile;
  user: IUser;

  constructor(public accountService: AccService,
              public profileService: ProfileService,
              public userService: UserService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getUserProfile(this.account.id);
      });
  }

  getUserProfile(userId: number) {
    this.profileService.query({'userId.equals': userId})
      .subscribe(result => {
        this.profile = result.body[0];
        this.getUserAccount(this.profile.userLogin);
        // this.ngxSpinner.hide('loadingProfilePic');
      }, () => {
        // this.ngxSpinner.hide('loadingProfilePic');
      });
  }

  getUserAccount(userLogin: string) {
    this.userService.find(userLogin)
      .subscribe(result => {
        this.user = result;
      });
  }

  logOut() {
    this.authService.logout();
  }
}
