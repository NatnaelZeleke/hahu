import {Component, OnInit} from '@angular/core';
import {TagService} from '../../../../api/services/tag.service';
import {ITag} from '../../../../api/models/tag.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {PostService} from '../../../../api/services/post.service';
import {IPost} from '../../../../api/models/post.model';
import {TypeaheadMatch} from 'ngx-bootstrap/typeahead';

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
  posts: IPost[];

  constructor(public tagService: TagService,
              private formBuilder: FormBuilder,
              public postService: PostService) {

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
  }

  getTags() {
    this.tagService.query()
      .subscribe(result => {
        this.tags = result.body;
      });
  }

  searchPosts(queryString?: string): Observable<IPost[]> {

    this.loading = true;
    return this.postService.query({
      'title.contains': queryString,
    })
      .pipe(map(result => {
        this.loading = false;
        this.posts = result.body;
        return result.body;
      }));
    // const searchQuery = {
    //   query: queryString
    // };
    // const params: SearchRequestDTO = {
    //   query: queryString,
    //   start: null,
    //   max: null
    // };
    //
    // return this.productService.searchProduct(params)
    //   .pipe(map(result => {
    //     this.loading = false;
    //     this.productList = result.productList;
    //     return this.productList;
    //   }));
  }

  onSelect(event: TypeaheadMatch) {
    // this.searchProduct(event.value);
  }

  getRecentlyOpened() {

  }

  getTrending() {

  }

  getLocal() {

  }

  getRecommendation() {

  }

}
