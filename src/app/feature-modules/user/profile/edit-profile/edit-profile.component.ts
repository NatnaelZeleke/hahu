import {Component, OnInit} from '@angular/core';
import {Account} from '../../../../api/models/account.model';
import {IProfile} from '../../../../api/models/profile.model';
import {IUser} from '../../../../api/models/user.model';
import {ProfileService} from '../../../../api/services/profile.service';
import {AccService} from '../../../../services/acc.service';
import {UserService} from '../../../../api/services/user.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {PatternService} from '../../../../services/Pattern.service';

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
  submitted = false;
  // file upload code
  file: File;
  userNameTaken = false;

  constructor(public profileService: ProfileService,
              public accountService: AccService,
              public userService: UserService,
              public ngxSpinner: NgxSpinnerService,
              public formBuilder: FormBuilder,
              public httpClient: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private patternService: PatternService) {
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      city: ['', Validators.required],
      bio: ['', Validators.required],
      userName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.patternService.phonePattern)]],
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
          'age': this.profile.age,
          'city': this.profile.location,
          'bio': this.profile.bio,
          'userName': this.user.login,
          'phoneNumber': this.profile.phone
        });
      });
  }

  updateProfile() {
    this.submitted = true;
    if (this.profileForm.valid) {
      this.profile.age = this.profileForm.value.age;
      this.profile.bio = this.profileForm.value.bio;
      this.profile.phone = this.profileForm.value.phoneNumber;
      this.profile.location = this.profileForm.value.city;
      this.user.firstName = this.profileForm.value.firstName;
      this.user.lastName = this.profileForm.value.lastName;
      this.user.login = this.profileForm.value.userName;

      this.ngxSpinner.show('updatingProfile');
      this.profileService.update(this.profile)
        .subscribe(result => {
          this.userService.update(this.user)
            .subscribe(result2 => {
              this.ngxSpinner.hide('updatingProfile');
              this.router.navigate(['../profile'], {relativeTo: this.route});
            }, (err) => {
              this.ngxSpinner.hide('updatingProfile');
              alert('something went wrong');
            });
        });
    }
  }

  getDate() {
    return new Date();
  }

  get f() {
    return this.profileForm.controls;
  }

  checkUserName() {
    if (this.profileForm.value.userName != this.user.login) {
      this.userService.find(this.profileForm.value.userName)
        .subscribe(result => {
          if (result != null) {
            this.userNameTaken = true;
          }
        }, (err) => {
        });
    } else {
      this.userNameTaken = false;
    }
  }


  onFileInputChange(event: Event): void {
    console.log('caleed');
    const eventTarget: HTMLInputElement = event.target as HTMLInputElement;
    const file: File = eventTarget.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.profile.curentProfilePic = (fileReader.result as string).substr((fileReader.result as string).indexOf('base64,') + 'base64,'.length);
    };
  }
}
