import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormBuilder} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {PostService} from '../../../../../../api/services/post.service';
import {IPost} from '../../../../../../api/models/post.model';
import {AppPostService} from '../../../../../../services/app-post.service';
import {CloseModalsService} from '../../../../../../services/close-modals.service';
import {HashtagService} from '../../../../../../services/hashtag.service';
import {MagContainerComponent} from '../../mag-container/mag-container.component';

@Component({
  selector: 'app-choose-mag',
  templateUrl: './choose-mag.component.html',
  styleUrls: ['./choose-mag.component.css']
})
export class ChooseMagComponent implements OnInit {

  mag: IPost;
  title: string;
  magContainer: IPost;


  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public formBuilder: FormBuilder,
              private spinner: NgxSpinnerService,
              public appPostService: AppPostService,
              public postService: PostService,
              public closeModals: CloseModalsService,
              public tagService: HashtagService) {
  }

  ngOnInit() {

  }

  addToMag() {

    this.spinner.show('savingPostSpinner');
    this.mag.pageId = this.magContainer.id;
    this.postService.create(this.mag)
      .subscribe(result3 => {
        this.appPostService.addPost(result3.body);
        this.tagService.resetTags();
        // this.onClose.next(true);
        this.spinner.hide('savingPostSpinner');
        this.closeModals.closeFirst();
        this.bsModalRef.hide();
      }, () => {
        this.spinner.hide('posting');
      });

  }




}
