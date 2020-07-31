import {Component, OnInit} from '@angular/core';
import {TagService} from '../../../../api/services/tag.service';
import {ITag} from '../../../../api/models/tag.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {PostService} from '../../../../api/services/post.service';
import {IPost} from '../../../../api/models/post.model';
import {TypeaheadMatch} from 'ngx-bootstrap/typeahead';
import {NgxSpinnerService} from 'ngx-spinner';
import {ViewsService} from '../../../../api/services/views.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {IViews} from '../../../../api/models/views.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tags: ITag[];
  searchForm: FormGroup;
  dataSource: Observable<any>;
  loading = false;
  posts: IPost[] = [];
  searchResult: IPost[] = [];
  tagPosts: Array<IPost[]> = [];
  similarTagPosts: Array<IPost[]> = [];
  trendingPosts: IPost[] = [];
  recentlyOpenedPosts: IPost[] = [];
  roViews: IViews[] = [];
  similarTags: ITag[] = [];
  queryText = '';
  account: Account;

  constructor(public tagService: TagService,
              private formBuilder: FormBuilder,
              public postService: PostService,
              public ngxSpinner: NgxSpinnerService,
              public viewService: ViewsService,
              public accService: AccService) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        query: ['', Validators.required]
      });
    this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.searchForm.value.query);
    })
      .pipe(
        mergeMap((token: string) => this.searchPosts(token))
      );
    this.getTags();
    this.getTrendingPosts();
    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getRecentlyOpenedPosts(this.account.id);
      });
  }

  getTags() {
    this.tagService.query()
      .subscribe(result => {
        this.tags = result.body;
        this.getTagPosts();
      });
  }

  get f() {
    return this.searchForm.controls;
  }

  searchPosts(queryString?: string): Observable<IPost[]> {
    this.ngxSpinner.show('searchSpinner');
    this.loading = true;
    this.queryText = queryString;
    return this.postService.query({
      'title.contains': queryString,
    })
      .pipe(map(result => {
        this.ngxSpinner.hide('searchSpinner');
        this.loading = false;
        this.posts = result.body;
        return result.body;
      }));
  }

  onSelect(event: TypeaheadMatch) {

    this.ngxSpinner.show('loadingSResult');
    this.search(event.value);
    // this.searchProduct(event.value);
  }

  onSearch() {
    this.ngxSpinner.show('loadingSResult');
    this.search(this.searchForm.value.query);
  }

  search(query: string) {
    this.queryText = query;
    this.ngxSpinner.show('loadingSResult');
    this.resetExplorePage();
    this.getSimilarTags(query);
    this.postService.query({'title.contains': query})
      .subscribe(result => {
        this.posts = [];

        this.searchResult = result.body;
        this.ngxSpinner.hide('loadingSResult');
      }, (err) => {
        this.ngxSpinner.hide('loadingSResult');
      });
  }


  resetExplorePage() {
    this.tagPosts = [];
    this.trendingPosts = [];
    this.similarTagPosts = [];
    this.recentlyOpenedPosts = [];
  }


  getSimilarTags(query: string) {
    this.tagService.query({
      'name.contains': query,
      page: 0,
      size: 3
    })
      .subscribe(result => {
        this.similarTags = result.body;
        for (let i = 0; i < this.similarTags.length; i++) {
          this.getSimilarPostByTag(this.similarTags[i].id);
        }
      });
  }

  searchWithTags(tagId: number, name: string) {
    this.queryText = name;
    this.resetExplorePage();
    this.getSimilarTags(name);

    this.searchForm.reset();
    this.ngxSpinner.show('loadingSResult');
    this.postService.query({'tagId.in': [tagId]})
      .subscribe(result => {
        this.posts = [];
        this.searchResult = result.body;
        this.ngxSpinner.hide('loadingSResult');
        console.log(this.similarTagPosts.length);
      }, (err) => {
        this.ngxSpinner.hide('loadingSResult');
      });

  }


  getTrending() {

  }

  getLocal() {

  }

  getRecommendation() {

  }

  getTagPosts() {
    for (let i = 0; i < 3; i++) {
      this.getPostByTag(this.tags[i].id)
      ;
    }
  }

  getPostByTag(tagId: number) {
    this.postService.query({
      'tagId.equals': tagId
    }).subscribe(result => {
      this.tagPosts.push(result.body);
    });
  }

  getSimilarPostByTag(tagId: number) {
    this.postService.query({
      'tagId.equals': tagId
    }).subscribe(result => {
      this.similarTagPosts.push(result.body);
    });
  }

  getTrendingPosts() {
    this.postService.query({
      page: 0, /// since page it is zero indexed to get page 1 we send 0
      size: 10,
      sort: ['trendingIndex,desc']
    })
      .subscribe(result => {
        this.trendingPosts = result.body;
      });
  }

  getRecentlyOpenedPosts(userId: number) {
    this.viewService.query({
      'userId.equals': userId, // logged in user id
      sort: ['registeredTime,desc'],
    })
      .subscribe(result => {
        this.roViews = result.body;
        for (let i = 0; i < this.roViews.length; i++) {
          this.getPosts(this.roViews[i].postId);
        }
      });
  }

  getPosts(postId: number) {
    this.postService.find(postId)
      .subscribe(result => {
        this.recentlyOpenedPosts.push(result.body);
      });
  }


}
