import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../api/models/account.model';
import {IProfile} from '../../../../api/models/profile.model';
import {IUser} from '../../../../api/models/user.model';
import {ProfileService} from '../../../../api/services/profile.service';
import {AccService} from '../../../../services/acc.service';
import {UserService} from '../../../../api/services/user.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  account: Account;
  profile: IProfile;
  user: IUser;
  profileForm: FormGroup;

  constructor(public profileService: ProfileService,
              public accountService: AccService,
              public userService: UserService,
              public ngxSpinner: NgxSpinnerService,
              public formBuilder: FormBuilder) {

  }


  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    });
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
        this.profileForm.patchValue({
          'firstName': this.user.firstName,
          'lastName': this.user.lastName,
          'age': this.profile.age
        });

      });
  }

}
