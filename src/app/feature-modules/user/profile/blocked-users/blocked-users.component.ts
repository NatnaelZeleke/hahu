import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Account} from '../../../../api/models/account.model';
import {IProfile} from '../../../../api/models/profile.model';
import {AccService} from '../../../../services/acc.service';
import {PreferenceService} from '../../../../api/services/preference.service';
import {IPreference} from '../../../../api/models/preference.model';
import {IUser} from '../../../../api/models/user.model';
import {ProfileService} from '../../../../api/services/profile.service';

@Component({
  selector: 'app-blocked-users',
  templateUrl: './blocked-users.component.html',
  styleUrls: ['./blocked-users.component.css']
})
export class BlockedUsersComponent implements OnInit {

  account: Account;
  profile: IProfile;
  loaded = false;
  profiles: IProfile[] = [];
  blockedUsers: IPreference[] = [];
  hasBlockedUsers = false;

  constructor(public accountService: AccService,
              public ngxSpinner: NgxSpinnerService,
              public preferenceService: PreferenceService,
              public profileService: ProfileService) {
  }

  ngOnInit() {
    this.ngxSpinner.show('loadingBlocked');
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getBlockedUsersProfile(this.account.id);
        // this.getUserProfile(this.account.id);
      });
  }

  getBlockedUsersProfile(userId: number) {
    this.preferenceService.query({
      'userId.equals': userId
    }).subscribe(result => {
      this.blockedUsers[0] = result.body[0];
      this.loaded = true;
      this.ngxSpinner.hide('loadingBlocked');
      if (this.blockedUsers[0].blockedUsers.length > 0) {
        this.hasBlockedUsers = true;
        this.getAllProfiles(this.blockedUsers[0].blockedUsers);
      }

    });
  }

  getAllProfiles(users: IUser[]) {
    for (let i = 0; i < users.length; i++) {
      this.getUserProfiles(users[i].id);
    }
  }

  getUserProfiles(userId: number) {
    this.profileService.find(userId)
      .subscribe(result => {
        this.profiles.push(result.body);
      });
  }

}
