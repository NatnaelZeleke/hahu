import {Component, OnInit} from '@angular/core';
import {IPreference} from '../../../../api/models/preference.model';
import {PreferenceService} from '../../../../api/services/preference.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {IPost} from '../../../../api/models/post.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TagService} from '../../../../api/services/tag.service';
import {ITag} from '../../../../api/models/tag.model';

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
  tags: ITag[];

  constructor(public preferenceService: PreferenceService,
              public accountService: AccService,
              private spinner: NgxSpinnerService,
              private formBuilder: FormBuilder,
              public tagService: TagService) {
  }

  ngOnInit() {
    this.loadProfile();
    this.searchForm = this.formBuilder.group(
      {
        query: ['', Validators.required]
      });
    this.getTags();
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

  getTags() {
    this.tagService.query()
      .subscribe(result => {
        this.tags = result.body;
        // this.getTagPosts();
      });
  }

  filterWithTags(id: number) {
    console.log(id);
    this.searchResult = [];
    this.preference.savedPosts.filter((item: IPost) => {
      item.tags.filter(t => {
        if (t.id == id) {
          this.searchResult.push(item);
        }
      });
    });
    this.savedPosts = this.searchResult;
    console.log(this.searchResult);
  }


}
