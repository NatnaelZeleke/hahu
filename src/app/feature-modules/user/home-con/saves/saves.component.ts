import {Component, OnInit} from '@angular/core';
import {IPreference} from '../../../../api/models/preference.model';
import {PreferenceService} from '../../../../api/services/preference.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {IPost} from '../../../../api/models/post.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.css']
})
export class SavesComponent implements OnInit {

  account: Account;
  preference: IPreference;
  savedPosts: IPost[] = [];
  loading = false;
  searchResult: IPost[] = [];
  searchForm: FormGroup;

  constructor(public preferenceService: PreferenceService,
              public accountService: AccService,
              private spinner: NgxSpinnerService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loadProfile();
    this.searchForm = this.formBuilder.group(
      {
        query: ['', Validators.required]
      });
  }

  loadProfile() {
    this.spinner.show('savedSpinner');
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getPreference(this.account.id);
      });
  }

  getPreference(userId: number) {
    this.preferenceService.query({
      'userId.equals': userId
    }).subscribe(result => {
      this.spinner.hide('savedSpinner');
      this.preference = result.body[0];
      this.savedPosts = this.preference.savedPosts;
    });
  }

  searchSavedPosts() {
    if (this.searchForm.valid) {
      this.filterData(this.searchForm.value.query);
    } else {
      this.savedPosts = this.preference.savedPosts;
    }

  }

  filterData(searchData: string) {
    this.searchResult = this.savedPosts.filter((item: IPost) => {
      if (item.title != null) {
        if (item.title.toLowerCase().includes(searchData.toLowerCase())) {
          return item;
        }
      }
    });
    this.savedPosts = this.searchResult;
    // console.log(this.searchResult);
  }

}
