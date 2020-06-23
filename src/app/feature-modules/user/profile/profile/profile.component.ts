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

  constructor(public profileService: ProfileService,
              public accountService: AccService,
              public userService: UserService,
              public ngxSpinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.ngxSpinner.show('loadingProfilePic');
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
        this.ngxSpinner.hide('loadingProfilePic');
      }, () => {
        this.ngxSpinner.hide('loadingProfilePic');
      });
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


  changeTab(number: number) {
    this.currentClass = number;
  }
}
