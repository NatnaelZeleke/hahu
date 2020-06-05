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


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  postList: IPost[] = [];
  account: Account;

  constructor(protected postService: PostService,
              protected accService: AccService,
              public modalService: BsModalService,
              public tagService: HashtagService,
              private spinner: NgxSpinnerService,
              public appPostService: AppPostService) {
  }

  ngOnInit() {
    this.appPostService.postsSubject
      .subscribe(result => {
        this.postList = result;
      });
    this.accService.accountSubject
      .subscribe(result => {
        this.account = result;

        this.loadPost();
      });
    this.accService.getUserAccount();

    this.tagService.getTags();
    // this.createContent();
  }

  loadPost() {

    this.spinner.show('postSpinner');
    this.appPostService.getPost(0, 10)
      .subscribe(result => {
        this.spinner.hide('postSpinner');
      });


    // this.postService.query(
    //   {
    //     page: 0,
    //     size: 10
    //   }
    // ).subscribe((result) => {
    //     this.postList.push(...result.body);
    //
    //   },
    //   (err) => {
    //     // TODO handle post scroll errors, things like connection and database errors
    //   });
  }


  createContent() {
    const initialState = {
      title: 'create content',
      message: '',
    };
    this.modalService.show(ContentComponent, {
      initialState: initialState,
      animated: false,
      class: 'c-c-con',
    });
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

}
