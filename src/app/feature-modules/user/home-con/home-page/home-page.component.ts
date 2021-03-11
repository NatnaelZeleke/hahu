import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../../api/services/post.service';
import {IPost} from '../../../../api/models/post.model';
import {Account} from '../../../../api/models/account.model';
import {ModalComponent} from '../../../../shared/component/modal/modal.component';
import {ContentComponent} from './content/content.component';
import {HashtagService} from '../../../../services/hashtag.service';
import {AccService} from '../../../../services/acc.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AppPostService} from '../../../../services/app-post.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {MagComponent} from './mag/mag.component';
import {DashboardSrService} from '../../../../services/dashboard-sr.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  postList: IPost[] = [];
  account: Account;
  recommendation: IPost[] = [];

  constructor(protected postService: PostService,
              protected accService: AccService,
              public modalService: BsModalService,
              public tagService: HashtagService,
              private spinner: NgxSpinnerService,
              public appPostService: AppPostService,
              public dashBoardRS: DashboardSrService) {
  }

  ngOnInit() {
    // this.dashBoardRS.changeSelected(0);
    this.appPostService.postsSubject
      .subscribe(result => {
        this.postList = result;
      });
    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.loadPost();
      });
    this.tagService.getTags();
    this.getRecommendation();
    // this.createContent(1);
  }

  loadPost() {
    this.spinner.show('postSpinner');
    this.appPostService.getPost(0, 10, {'pageId.specified': false})
      .subscribe(result => {
        this.spinner.hide('postSpinner');
      });
  }

  createContent(num: number) {
    if (num == 1) {
      const initialState = {
        title: 'create content',
        message: '',
      };
      this.modalService.show(ContentComponent, {
        initialState: initialState,
        animated: false,
        class: 'c-c-con',
      });
    } else {
      const initialState = {
        title: 'create mag',
        message: '',
      };
      this.modalService.show(MagComponent, {
        initialState: initialState,
        animated: false,
        class: 'c-c-con h-100',
      });
    }

  }

  openModal(title: string, message: string, success: boolean, error: boolean) {
    const initialState = {
      title: title,
      message: message,
      success: success,
      error: error
    };
    this.modalService.show(ModalComponent, {initialState});
  }

  showRecom(i: number) {
    if (i > 0) {
      if ((i % 5) === 0) {
        return true;
      }
    }

  }


  getRecommendation() {
    this.postService.queryRecommended({})
      .subscribe(result => {
        this.recommendation = result.body;
      });
  }

}
