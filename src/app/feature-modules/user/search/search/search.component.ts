import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
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
import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent, Direction
} from 'angular2-swing';
import {BsModalService} from 'ngx-bootstrap/modal';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('myswing1', {static: false}) swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any> = [];
  stackConfig: StackConfig;

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
  recommendations: IPost[] = [];
  account: Account;
  showPads = true;

  constructor(public tagService: TagService,
              private formBuilder: FormBuilder,
              public postService: PostService,
              public ngxSpinner: NgxSpinnerService,
              public viewService: ViewsService,
              public accService: AccService,
              public modalService: BsModalService) {

    this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT],
      // Now need to send offsetX and offsetY with element instead of just offset
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };

    this.cards = [];
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
    this.getRecommendations();
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

  getRecommendations() {
    this.ngxSpinner.show('recommendationSpinner');
    this.postService.queryRecommended({})
      .subscribe(result => {
        this.ngxSpinner.hide('recommendationSpinner');
        this.recommendations = result.body.filter(post => {
          if (post.featuredImage != null) {
            return post;
          }
        });
      });
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
      this.getPostByTag(this.tags[i].id);
    }
  }

  getPostByTag(tagId: number) {
    this.postService.query({
      'tagId.equals': tagId
    }).subscribe(result => {
      this.tagPosts.push(result.body.filter(post => {
        if (post.featuredImage != null) {
          return post;
        }
      }));
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
        this.trendingPosts = result.body.filter(post => {
          if (post.featuredImage != null) {
            return post;
          }
        });
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

  ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function

    // console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    // console.log(this.swingStack.stack);

    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    // this.swingCards.forEach((c) => console.log(c.getCard()));


    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    // this.swingStack.throwoutleft.subscribe(
    //   (event: ThrowEvent) => console.log('Manual hook: ', event)
    // );

    this.swingCards.changes
      .subscribe(result => {
        // console.log(result);
        // console.log('length', this.swingCards.length);
      });
    // this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));

    // this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event));
  }

  removeCard(idx: number) {
    this.cards.splice(idx, 1);
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: any) {
    const idx = +event.target.outerText[0];
    this.recommendations.splice(idx, 1);
    if (this.recommendations.length == 0) {
      this.showPads = false;
    }
  }


  openDetail(post: IPost) {

    const initialState = {
      title: '',
      message: '',
      post: post,
      account: this.account
    };
    this.modalService.show(DetailComponent, {initialState});
  }


}
